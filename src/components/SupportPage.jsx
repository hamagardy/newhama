import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiCopy, FiCheck } from 'react-icons/fi';
import portrait from '../assets/me.webp';
import logo from '../assets/hg2.png';
import fibQr from '../assets/fib-support-qr.png';
import '../styles/support.css';

const receivingCode = 'PJ6E6SOM846G';
const fibLink = `https://p.fib.iq/rlpG/onlinePayment?identifier=${receivingCode}`;

export default function SupportPage() {
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    const previous = document.title;
    document.title = 'Support Hama Gardy';
    return () => { document.title = previous; };
  }, []);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(receivingCode);
      setCopyStatus('Code copied.');
    } catch {
      setCopyStatus('Select and copy the code above.');
    }
  }

  return (
    <main className="support-page">
      <div className="support-glow" aria-hidden="true" />
      <header className="support-header">
        <Link to="/portfolio" className="support-brand"><img src={logo} alt="" />Hama Gardy</Link>
        <span className="support-preview-badge">FIB support</span>
      </header>
      <div className="support-layout">
        <div className="support-intro">
          <div className="support-avatar"><img src={portrait} alt="Hama Gardy" width="88" height="88" /></div>
          <p className="support-eyebrow">A LITTLE SUPPORT. MORE POSSIBILITY.</p>
          <h1>Support my work<span>.</span></h1>
          <p className="support-intro-copy">If my apps, websites, or AR creations helped you, you can support what I build next. Every little bit means a lot.</p>
          <div className="support-person">Hama Gardy · Developer &amp; creator</div>
        </div>
        <article className="support-card" aria-label="Support Hama Gardy with FIB">
          <div className="support-card-heading"><span className="support-heart"><FiHeart aria-hidden="true" /></span><div><h2>Send support with FIB</h2><p>Choose your amount inside the FIB app.</p></div></div>
          <img className="support-qr" src={fibQr} width="290" height="290" alt="FIB receiving QR code: PJ6E6SOM846G" />
          <p className="support-code-label">Receiving code</p>
          <div className="support-code-row">
            <code className="support-code">PJ6E-6SOM-846G</code>
            <button type="button" className="support-copy" onClick={copyCode} aria-label="Copy FIB receiving code">{copyStatus === 'Code copied.' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}</button>
          </div>
          <p className="support-copy-status" role="status">{copyStatus}</p>
          <a className="support-primary" href={fibLink} target="_blank" rel="noopener noreferrer">Open FIB</a>
          <p className="support-link-note">This link is unverified and may show a broken transaction. If it fails, try scanning the QR or entering the receiving code in FIB.</p>
          <ol className="support-instructions">
            <li>Open FIB, or scan the QR with its scanner.</li>
            <li>If FIB accepts the code, enter your chosen amount.</li>
            <li>Check the recipient and amount before confirming.</li>
          </ol>
          <p className="support-payment-note">Confirm payment in FIB. This page cannot verify transfers.</p>
        </article>
      </div>
      <div className="support-footer">Made with care by Hama Gardy<span>FIB</span></div>
    </main>
  );
}
