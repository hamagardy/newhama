import React, { createContext, useContext, useId, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ClosePreview = createContext(() => {});
export function PreviewCloseButton({ children = 'Close' }) {
  return <button className="preview-close-button" onClick={useContext(ClosePreview)}>{children}</button>;
}

export function ProjectPreview({ title, onClose, children }) {
  const panel = useRef(null);
  const backdrop = useRef(null);
  const close = useRef(() => {});
  const callback = useRef(onClose);
  const titleId = useId();
  callback.current = onClose;

  useLayoutEffect(() => {
    const trigger = document.activeElement;
    const card = trigger?.closest('.project-card');
    const root = document.querySelector('.portfolio-motion');
    const wasInert = root?.inert;
    const overflow = document.body.style.overflow;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let closing = false;
    const animations = [];
    document.body.style.overflow = 'hidden';
    panel.current.focus({ preventScroll: true });
    if (root) root.inert = true;

    function sourceTransform() {
      if (!card?.isConnected) return 'translateY(24px) scale(.96)';
      const from = card.getBoundingClientRect();
      const to = panel.current.getBoundingClientRect();
      const scale = Math.max(.25, Math.min(.9, from.width / to.width));
      return `translate(${from.left + from.width / 2 - to.left - to.width / 2}px, ${from.top + from.height / 2 - to.top - to.height / 2}px) scale(${scale})`;
    }
    if (!reduced.matches && panel.current.animate) {
      animations.push(panel.current.animate([
        { opacity: 0, transform: sourceTransform(), borderRadius: '12px' },
        { opacity: 1, transform: 'none', borderRadius: '20px' },
      ], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' }));
      animations.push(backdrop.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250 }));
    }
    close.current = () => {
      if (closing) return;
      closing = true;
      animations.forEach(animation => animation.cancel());
      if (reduced.matches || !panel.current.animate) return callback.current();
      const animation = panel.current.animate([
        { opacity: 1, transform: 'none' }, { opacity: 0, transform: sourceTransform() },
      ], { duration: 230, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
      animations.push(animation);
      animations.push(backdrop.current.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 230, fill: 'forwards' }));
      animation.finished.then(() => { if (!disposed) callback.current(); }).catch(() => {});
    };
    function keyboard(event) {
      if (event.key === 'Escape') { event.preventDefault(); close.current(); }
      if (event.key !== 'Tab') return;
      const items = [...panel.current.querySelectorAll('a[href], button:not(:disabled), [tabindex="0"]')];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === panel.current)) {
        event.preventDefault(); first?.focus();
      }
    }
    document.addEventListener('keydown', keyboard);
    return () => {
      disposed = true;
      animations.forEach(animation => animation.cancel());
      document.removeEventListener('keydown', keyboard);
      document.body.style.overflow = overflow;
      if (root) root.inert = wasInert;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <ClosePreview.Provider value={() => close.current()}>
      <div ref={backdrop} className="project-preview motion-project-preview" onClick={event => { if (event.target === event.currentTarget) close.current(); }}>
        <div ref={panel} className="preview-content" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
          <span id={titleId} className="motion-sr-only">{title}</span>
          <button className="motion-dialog-close" aria-label="Close project preview" onClick={() => close.current()}>×</button>
          {children}
        </div>
      </div>
    </ClosePreview.Provider>, document.body,
  );
}
