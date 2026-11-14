import React, { useEffect, useRef } from 'react';

export default function PortfolioMotion() {
  const progress = useRef(null);
  useEffect(() => {
    const root = progress.current.closest('.portfolio-motion');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const observed = new WeakSet();
    const scenes = new Set();
    let scrollFrame = 0;
    let tiltFrame = 0;
    let activeCard = null;
    const revealSelector = '.home-text, .home-image, .home-social-links, .about-content, .resume-category, .projects-title, .project-card, #snapchat > h2, #snapchat > div, .shop-content, .contact-form-container, #contact > h2';

    function register() {
      root.querySelectorAll(revealSelector).forEach(element => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add('motion-reveal');
        const section = element.closest('section');
        element.dataset.motionScene = section?.id || 'home';
        section?.classList.add('motion-scene');
        const cards = element.classList.contains('project-card') ? [...element.parentElement.querySelectorAll('.project-card')] : [];
        const order = Math.max(0, cards.indexOf(element));
        element.style.setProperty('--scene-delay', `${(order % 3) * 100}ms`);
        element.style.setProperty('--card-fan', `${((order % 3) - 1) * 9}deg`);
        scenes.add(element);
        if (reduced.matches) element.classList.add('motion-visible');
      });
      scheduleProgress();
    }
    function resetTilt() {
      cancelAnimationFrame(tiltFrame);
      if (activeCard) {
        activeCard.style.setProperty('--tilt-x', '0deg');
        activeCard.style.setProperty('--tilt-y', '0deg');
        activeCard = null;
      }
    }
    function preferenceChanged() {
      root.classList.toggle('motion-enabled', !reduced.matches);
      if (reduced.matches) {
        resetTilt();
        root.querySelectorAll('.motion-reveal').forEach(element => element.classList.add('motion-visible'));
      }
      register();
      scheduleProgress();
    }
    preferenceChanged();
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });

    function updateProgress() {
      scrollFrame = 0;
      const height = document.documentElement.scrollHeight - innerHeight;
      const ratio = height > 0 ? Math.min(1, Math.max(0, scrollY / height)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
      root.style.setProperty('--scroll-logo-angle', `${reduced.matches ? 0 : scrollY * 0.18}deg`);
      // Measure layout offsets, not transformed bounds, so dramatic entrances
      // cannot trigger an enter/exit feedback loop at the viewport edges.
      const measurements = [];
      for (const element of scenes) {
        if (!element.isConnected) { scenes.delete(element); continue; }
        let top = 0;
        for (let node = element; node; node = node.offsetParent) top += node.offsetTop;
        top -= scrollY;
        measurements.push({ element, top, bottom: top + element.offsetHeight });
      }
      const activeSections = new Set();
      for (const { element, top, bottom } of measurements) {
        const visible = reduced.matches || (top < innerHeight * .92 && bottom > 64);
        element.classList.toggle('motion-above', !visible && bottom <= 64);
        element.classList.toggle('motion-visible', visible);
        if (visible) activeSections.add(element.closest('section'));
      }
      root.querySelectorAll('section.motion-scene').forEach(section => {
        section.classList.toggle('motion-section-active', activeSections.has(section));
      });
    }
    function scheduleProgress() {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress);
    }
    function move(event) {
      if (reduced.matches || !finePointer.matches) return;
      const card = event.target.closest('.project-card');
      if (!card) return resetTilt();
      if (activeCard !== card) { resetTilt(); activeCard = card; }
      cancelAnimationFrame(tiltFrame);
      tiltFrame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        card.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`);
        card.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
        card.style.setProperty('--spot-x', `${x * 100}%`);
        card.style.setProperty('--spot-y', `${y * 100}%`);
      });
    }
    root.addEventListener('pointermove', move, { passive: true });
    root.addEventListener('pointerleave', resetTilt);
    const revealFocus = event => event.target.closest('.motion-reveal')?.classList.add('motion-visible');
    root.addEventListener('focusin', revealFocus);
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress);
    reduced.addEventListener('change', preferenceChanged);
    const resize = new ResizeObserver(scheduleProgress);
    resize.observe(root);
    updateProgress();
    return () => {
      root.classList.remove('motion-enabled');
      root.style.removeProperty('--scroll-logo-angle');
      root.removeEventListener('focusin', revealFocus);
      root.removeEventListener('pointermove', move);
      root.removeEventListener('pointerleave', resetTilt);
      window.removeEventListener('scroll', scheduleProgress);
      window.removeEventListener('resize', scheduleProgress);
      reduced.removeEventListener('change', preferenceChanged);
      mutations.disconnect();
      resize.disconnect();
      cancelAnimationFrame(scrollFrame);
      resetTilt();
    };
  }, []);
  return <div className="portfolio-scroll-track" aria-hidden="true"><div ref={progress} className="portfolio-scroll-progress" /></div>;
}
