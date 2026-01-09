const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const TARGET = 'https://hamagardy.thewayl.com';

// Keep raw body for proper forwarding
app.use(express.raw({ type: '*/*', limit: '50mb' }));

// Serve static files
app.use('/css', express.static('public/css'));

// Policy page
app.get('/policy', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Policy - Hamagardy Shop</title>
    <link rel="icon" href="https://i.ibb.co/zTvpzzGq/hg-shop-removebg-preview.png">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <a href="/" class="logo">
                <img src="https://i.ibb.co/zTvpzzGq/hg-shop-removebg-preview.png" alt="Hamagardy">
                <span class="logo-text">Hamagardy Shop</span>
            </a>
            <nav>
                <a href="/">Home</a>
                <a href="/policy">Policy</a>
            </nav>
        </div>
    </header>
    <main class="policy-page">
        <div class="policy-container">
            <h1>Store Policies</h1>
            <h2>User Responsibility</h2>
            <p>By using this website and making purchases, you acknowledge and agree that you are fully responsible for all transactions and activities conducted through your account. All decisions regarding purchases are made at your own discretion and risk.</p>
            <h2>No Returns Policy</h2>
            <p>All sales are final. We do not accept returns, exchanges, or refunds for any products purchased through this store. Please review your order carefully before completing your purchase.</p>
            <h2>Payment Processing</h2>
            <p>All payments are processed and checked out by Wayl Company. By completing a purchase, you agree to Wayl's payment terms and conditions. Any payment-related inquiries should be directed to Wayl's support.</p>
            <h2>Disclaimer</h2>
            <p>This website is powered by Wayl. We are not responsible for:</p>
            <ul>
                <li>Any issues arising from payment processing</li>
                <li>Product quality or delivery issues</li>
                <li>Any losses incurred from purchases made on this platform</li>
                <li>Third-party services or links</li>
            </ul>
            <h2>Acceptance of Terms</h2>
            <p>By using this website, you confirm that you have read, understood, and agree to be bound by these policies. If you do not agree with any part of these terms, please do not use this website.</p>
            <h2>Contact</h2>
            <p>For any questions, please visit <a href="https://wayl.io" target="_blank">wayl.io</a>.</p>
        </div>
    </main>
    <footer>
        <div class="footer-content">
            <span>© 2026 Hamagardy</span>
            <span class="separator">|</span>
            <a href="/policy">Policy</a>
            <span class="separator">|</span>
            <span class="powered-by">Powered by <a href="https://wayl.io" target="_blank"><svg width="60" height="24" viewBox="0 0 900 300"><g fill="white"><path d="M13.31,251.43c-8.8-11.27-13.31-29.08-13.31-53.44,0-16.74,2.36-36.59,6.98-59.77l14.38-67.5h59.02l-12.88,60.52c-6.87,33.69-10.3,56.55-10.3,68.57,0,13.31,3.65,19.96,11.05,19.96,10.09,0,20.82-12.13,32.09-36.27,11.27-24.25,22.32-61.81,33.16-112.67h59.02l-19.53,88.53c-2.25,9.87-4.08,18.99-5.69,27.47-1.61,8.48-2.36,14.92-2.36,19.32,0,4.72.86,8.15,2.58,10.3,1.72,2.25,4.4,3.33,8.16,3.33,7.4,0,15.13-5.8,23.39-17.49,8.26-11.7,16.42-28.76,24.57-51.29,8.15-22.53,15.45-49.25,22.11-80.16h59.02c-6.44,34.12-16.63,66.42-30.58,96.58-14.06,30.26-30.58,54.62-49.58,73.18-19.1,18.56-38.74,27.79-59.23,27.79-10.84,0-19.21-3.54-25.22-10.52-6.01-6.97-9.01-17.06-9.01-30.05,0-4.94.64-11.05,1.82-18.46v-1.5c0-3-1.5-4.4-4.4-4.4-3.22,0-5.79,1.93-7.73,5.9-9.12,20.17-19.85,34.98-32.3,44.64-12.45,9.55-25.54,14.38-39.28,14.38-15.02,0-26.93-5.69-35.73-16.95h-.21Z"></path><path d="M314.52,118.68c11.05-16.42,24.57-29.51,40.56-39.28,15.99-9.66,32.94-14.59,50.87-14.59,10.84,0,19.53,2.36,25.97,6.98,6.55,4.72,12.13,10.84,16.74,18.46,1.18,1.72,2.36,2.9,3.33,3.65.97.75,2.36.75,4.08,0,2.25-1.18,3.33-2.79,3.33-4.83,0-.75-.21-1.82-.75-3.33-.75-1.5-1.61-3.22-2.58-5.15-.97-1.93-1.5-3.97-1.5-5.9,0-1.5.11-2.79.32-4.08h59.02l-21.78,103.23c-3.97,17.92-6.76,32.19-8.48,42.6-1.72,10.41-2.58,19.32-2.58,26.72s1.07,15.02,3.33,22.11h-59.77c-1.18-4.94-1.82-9.12-1.82-12.56,0-6.44,1.07-12.34,3.33-17.92,2.25-5.58,5.26-11.48,9.23-17.92,1.93-3,3.33-5.15,4.08-6.65.75-1.5,1.07-2.68,1.07-3.65,0-1.5-.75-2.58-2.25-3.33-.21-.21-.86-.32-1.82-.32s-2.04.32-3.11.97c-1.07.64-1.82,1.39-2.04,2.36-23.82,43.25-52.15,64.92-84.77,64.92-16.95,0-30.9-6.44-41.64-19.21-10.84-12.77-16.2-29.83-16.2-51.29,0-10.09.97-19.53,2.9-28.44,4.18-19.42,11.8-37.34,22.86-53.87l.11.32ZM400.8,210.43c9.12-7.08,17.17-17.28,24.36-30.48,7.08-13.2,12.56-28.22,16.2-45.18-4.94-7.4-9.87-12.56-14.7-15.45-4.94-2.9-11.27-4.4-19.21-4.4-14.27,0-26.4,5.37-36.27,15.99-9.98,10.73-16.95,25.22-20.82,43.67-1.18,6.65-1.82,12.02-1.82,16.2,0,9.87,2.25,17.28,6.87,22.54,4.51,5.15,10.52,7.73,17.92,7.73,9.34,0,18.57-3.54,27.69-10.73l-.21.11Z"></path><path d="M599.64,70.72l-19.21,89.93c-4.18,20.39-6.22,33.48-6.22,39.06,0,4.94.97,8.48,2.79,10.73,1.82,2.25,4.83,3.33,9.01,3.33,6.87,0,16.1-7.19,27.69-21.57,11.59-14.38,22.53-31.76,32.84-52.05,10.3-20.28,17.38-38.63,21.03-55.16l2.9-14.38h59.02l-30.26,141.65c-6.87,33.16-14.7,58.27-23.61,75.44-8.8,17.06-21.46,29.4-37.99,37.02-16.53,7.62-39.92,11.48-70.39,11.48h-77.05l9.98-47.22h50.54c23.39,0,40.24-1.5,50.76-4.4,10.41-2.9,18.03-8.59,22.86-16.74,4.83-8.26,9.23-22.21,13.41-41.85.97-5.36,2.68-10.41,4.94-15.13,2.36-4.61,4.51-8.8,6.65-12.34,2.04-3.54,3.54-6.01,4.29-7.19.97-1.93,1.5-3.33,1.5-4.08,0-1.5-.86-2.58-2.58-3.33-.54-.21-1.07-.32-1.82-.32-1.72,0-3.43,1.18-5.15,3.65-11.27,20.93-25.43,38.63-42.39,53.33-16.95,14.59-34.77,21.89-53.44,21.89-13.73,0-23.61-2.9-29.51-8.69-5.9-5.8-8.8-14.92-8.8-27.47,0-11.8,2.58-29.3,7.73-52.37l21.78-103.23h59.02-.32Z"></path><path d="M811.58,1.18c9.55.86,16.53,2.79,20.82,5.69,4.29,2.9,6.44,7.73,6.44,14.38,0,5.37-1.07,12.56-3.33,21.35l-34.34,147.55c-2.25,10.62-3.33,16.95-3.33,19.21,0,3.97,1.29,6.44,3.86,7.4,2.58.97,7.83,1.5,15.67,1.5h13.31l-9.98,47.22h-42.82c-15.77,0-26.93-2.04-33.59-6.22-6.65-4.18-9.98-11.91-9.98-23.18,0-6.87,1.07-15.24,3.33-25.11l33.59-143.79c1.72-7.4,2.58-11.91,2.58-13.63,0-3-1.18-4.72-3.54-5.37-2.36-.64-7.41-.97-15.35-.97l9.98-47.22c21.36,0,36.92.43,46.47,1.29l.21-.11Z"></path></g></svg></a></span>
        </div>
    </footer>
</body>
</html>`);
});

// Proxy all requests
app.all('*', async (req, res) => {
    const url = TARGET + req.originalUrl;
    
    try {
        // Forward all relevant headers
        const headers = {
            'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': req.headers['accept'] || '*/*',
            'Accept-Language': req.headers['accept-language'] || 'en-US,en;q=0.9',
            'Accept-Encoding': 'identity', // Don't compress so we can modify
            'Referer': TARGET + '/',
            'Origin': TARGET
        };
        
        // Forward important headers
        if (req.headers['cookie']) headers['Cookie'] = req.headers['cookie'];
        if (req.headers['content-type']) headers['Content-Type'] = req.headers['content-type'];
        if (req.headers['x-requested-with']) headers['X-Requested-With'] = req.headers['x-requested-with'];

        const response = await axios({
            method: req.method,
            url,
            headers,
            data: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
            responseType: 'arraybuffer',
            validateStatus: () => true,
            maxRedirects: 0,
            timeout: 30000
        });

        // Forward cookies
        if (response.headers['set-cookie']) {
            res.setHeader('Set-Cookie', response.headers['set-cookie']);
        }

        // Handle redirects
        if (response.status >= 300 && response.status < 400 && response.headers.location) {
            let loc = response.headers.location;
            // Only rewrite if it's pointing to the target domain
            if (loc.includes('hamagardy.thewayl.com')) {
                loc = loc.replace('https://hamagardy.thewayl.com', '');
            }
            if (!loc.startsWith('/') && !loc.startsWith('http')) loc = '/' + loc;
            return res.redirect(response.status, loc);
        }

        const ct = response.headers['content-type'] || '';
        res.status(response.status);

        // Process HTML - inject header/footer
        if (ct.includes('text/html')) {
            let html = response.data.toString('utf-8');
            
            // Script that injects header/footer after page loads and keeps them
            const injectionScript = `
<script>
(function() {
    // Set favicon
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'https://i.ibb.co/zTvpzzGq/hg-shop-removebg-preview.png';
    document.head.appendChild(link);
    
    // Set title
    if (!document.title.includes('Hamagardy')) {
        document.title = 'Hamagardy Shop';
    }

    function createHeader() {
        if (document.getElementById('hg-header')) return;
        var h = document.createElement('div');
        h.id = 'hg-header';
        h.innerHTML = '<a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;"><img src="https://i.ibb.co/zTvpzzGq/hg-shop-removebg-preview.png" style="height:36px;" alt="Hamagardy"><span style="font-size:1.3rem;font-weight:700;color:#fff;">Hamagardy Shop</span></a>';
        h.style.cssText = 'background:#000;color:#fff;padding:10px 24px;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;position:fixed;top:0;left:0;right:0;z-index:2147483647;box-shadow:0 2px 10px rgba(0,0,0,0.3);';
        document.body.insertBefore(h, document.body.firstChild);
    }
    function createFooter() {
        if (document.getElementById('hg-footer')) return;
        var f = document.createElement('div');
        f.id = 'hg-footer';
        f.innerHTML = '<span style="font-size:0.8rem;opacity:0.6;">© 2026 Hamagardy</span><a href="/policy" style="font-size:0.8rem;opacity:0.6;color:#fff;text-decoration:none;margin:0 12px;">Policy</a><span style="font-size:0.8rem;opacity:0.6;display:flex;align-items:center;gap:6px;">Powered by <a href="https://wayl.io" target="_blank" style="display:flex;align-items:center;"><svg width="50" height="18" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#c)"><path d="M1.18 22.44c-.78-1-.18-2.59 0-4.77 0-1.5.21-3.27.62-5.34l1.28-6.02h5.25l-1.15 5.4c-.61 3-.92 5.04-.92 6.11 0 1.19.33 1.78.99 1.78.9 0 1.85-1.08 2.85-3.24 1-2.16 1.98-5.51 2.95-10.05h5.25l-1.74 7.9c-.2.88-.36 1.7-.5 2.45-.15.76-.21 1.33-.21 1.72 0 .42.08.73.23.92.15.2.39.3.72.3.66 0 1.35-.52 2.08-1.56.73-1.04 1.46-2.56 2.18-4.58.73-2.01 1.38-4.39 1.97-7.15h5.25c-.57 3.04-1.48 5.92-2.72 8.61-1.25 2.7-2.72 4.87-4.41 6.53-1.7 1.66-3.44 2.48-5.27 2.48-.96 0-1.71-.32-2.24-.94-.53-.62-.8-1.52-.8-2.68 0-.44.06-.99.16-1.65v-.13c0-.27-.13-.39-.39-.39-.29 0-.52.17-.69.53-.81 1.8-1.76 3.12-2.87 3.98-1.11.85-2.27 1.28-3.49 1.28-1.34 0-2.4-.51-3.18-1.51z" fill="white"/><path d="M27.96 10.59c.98-1.46 2.18-2.63 3.6-3.5 1.42-.86 2.93-1.3 4.52-1.3.96 0 1.74.21 2.31.62.58.42 1.08.97 1.49 1.65.1.15.21.26.3.33.08.07.21.07.36 0 .2-.11.3-.25.3-.43 0-.07-.02-.16-.07-.3-.07-.13-.14-.29-.23-.46-.09-.17-.13-.35-.13-.52 0-.13.01-.25.03-.36h5.25l-1.94 9.21c-.35 1.6-.6 2.87-.75 3.8-.15.93-.23 1.72-.23 2.38s.1 1.34.3 1.97h-5.31c-.1-.44-.16-.81-.16-1.12 0-.57.1-1.1.3-1.6.2-.5.47-1.03.82-1.56.17-.27.3-.46.36-.59.07-.13.1-.24.1-.33 0-.13-.07-.24-.2-.3-.02-.02-.08-.03-.16-.03s-.17.03-.26.08c-.09.06-.16.13-.18.22-2.12 3.86-4.64 5.79-7.54 5.79-1.51 0-2.75-.57-3.7-1.71-.96-1.14-1.44-2.66-1.44-4.58 0-.9.09-1.74.26-2.54.37-1.73 1.05-3.33 2.03-4.8zm7.67 8.19c.81-.63 1.53-1.54 2.17-2.72.63-1.18 1.12-2.52 1.44-4.03-.44-.66-.88-1.12-1.31-1.38-.44-.26-1-.39-1.71-.39-1.27 0-2.35.48-3.22 1.43-.89.96-1.51 2.25-1.85 3.9-.1.59-.16 1.07-.16 1.44 0 .88.2 1.54.61 2.01.4.46.93.69 1.59.69.83 0 1.65-.32 2.47-.98z" fill="white"/><path d="M53.3 6.31l-1.71 8.02c-.37 1.82-.55 2.99-.55 3.49 0 .44.09.76.25.96.16.2.43.3.8.3.61 0 1.43-.64 2.46-1.92 1.03-1.28 2-2.83 2.92-4.64.92-1.81 1.55-3.45 1.87-4.92l.26-1.28h5.25l-2.69 12.64c-.61 2.96-1.31 5.2-2.1 6.73-.78 1.52-1.9 2.62-3.37 3.3-1.47.68-3.55 1.02-6.26 1.02h-6.85l.89-4.21h4.49c2.08 0 3.58-.13 4.51-.46.92-.33 1.6-.84 2.03-1.57.43-.73.82-1.98 1.19-3.73.09-.48.24-.93.44-1.35.21-.41.4-.78.59-1.1.18-.32.32-.54.39-.64.09-.17.13-.3.13-.36 0-.13-.08-.24-.23-.3-.05-.02-.1-.03-.16-.03-.17 0-.34.12-.52.36-1-1.87-2.14-3.54-3.64-4.86-1.5-1.3-3.08-1.95-4.73-1.95-1.22 0-2.1.29-2.63.87-.52.58-.78 1.39-.78 2.45 0 1.05.23 2.61.69 4.68l1.94 9.21h-5.25z" fill="white"/><path d="M72.14.11c.85.08 1.47.25 1.85.51.38.26.57.69.57 1.28 0 .48-.1 1.12-.3 1.9l-3.05 13.16c-.2.95-.3 1.51-.3 1.71 0 .35.11.58.34.69.23.09.7.13 1.39.13h1.18l-.89 4.21h-3.8c-1.4 0-2.39-.18-2.99-.56-.59-.37-.89-1.06-.89-2.07 0-.61.1-1.36.3-2.24l2.99-12.83c.15-.66.23-1.06.23-1.22 0-.27-.1-.42-.31-.48-.21-.06-.66-.09-1.37-.09l.89-4.21c1.9 0 3.28.04 4.13.11z" fill="white"/></g><defs><clipPath id="c"><rect width="80" height="30" fill="white"/></clipPath></defs></svg></a></span>';
        f.style.cssText = 'background:#000;color:#fff;padding:14px 24px;display:flex;justify-content:center;align-items:center;gap:8px;flex-wrap:wrap;font-family:system-ui,sans-serif;position:fixed;bottom:0;left:0;right:0;z-index:2147483647;box-shadow:0 -2px 10px rgba(0,0,0,0.3);';
        document.body.appendChild(f);
    }
    function addPadding() {
        document.body.style.paddingTop = '56px';
        document.body.style.paddingBottom = '56px';
    }
    function init() {
        createHeader();
        createFooter();
        addPadding();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    // Keep checking and re-adding if React removes them
    setInterval(function() {
        if (!document.getElementById('hg-header')) createHeader();
        if (!document.getElementById('hg-footer')) createFooter();
        addPadding();
    }, 500);
})();
</script>`;
            
            // Inject script before </body>
            html = html.replace(/<\/body>/i, injectionScript + '</body>');
            
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.send(html);
        } else {
            // Pass through all other content types unchanged
            if (ct) res.setHeader('Content-Type', ct);
            res.send(response.data);
        }
    } catch (err) {
        console.error('Proxy error:', err.message);
        res.status(500).send('Proxy error: ' + err.message);
    }
});

app.listen(PORT, () => console.log('Server running at http://localhost:' + PORT));
