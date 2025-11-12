import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';
import './styles/data-dashboard.css';

export default function DataDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [counters, setCounters] = useState({});
  const [downloads, setDownloads] = useState([]);
  const [pageViews, setPageViews] = useState([]);
  const [externalLinks, setExternalLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {

    // Listen to visitors
    const visitorsRef = ref(database, 'analytics/visitors');
    const unsubVisitors = onValue(visitorsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const visitorsList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).reverse(); // Most recent first
        setVisitors(visitorsList);
      }
      setLoading(false);
    }, (error) => {
      console.error('Visitors error:', error);
      setError(error.message);
      setLoading(false);
    });

    // Listen to counters
    const countersRef = ref(database, 'analytics/counters');
    const unsubCounters = onValue(countersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCounters(data);
      }
    });

    // Listen to downloads
    const downloadsRef = ref(database, 'analytics/downloads');
    const unsubDownloads = onValue(downloadsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const downloadsList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).reverse();
        setDownloads(downloadsList);
      }
    });

    // Listen to page views
    const pageViewsRef = ref(database, 'analytics/page_views');
    const unsubPageViews = onValue(pageViewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const pageViewsList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).reverse();
        setPageViews(pageViewsList);
      }
    });

    // Listen to external links
    const linksRef = ref(database, 'analytics/external_links');
    const unsubLinks = onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const linksList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).reverse();
        setExternalLinks(linksList);
      }
    });

    return () => {
      unsubVisitors();
      unsubCounters();
      unsubDownloads();
      unsubPageViews();
      unsubLinks();
    };
    } catch (err) {
      console.error('Dashboard error:', err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading analytics data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-loading">
        <h2 style={{color: '#dc2626'}}>Error Loading Dashboard</h2>
        <p style={{color: '#92400e'}}>{error}</p>
        <p style={{color: '#b45309', marginTop: '1rem'}}>
          Make sure Firebase Realtime Database rules allow read access.
        </p>
        <a href="/" style={{color: '#d97706', marginTop: '1rem', display: 'inline-block'}}>
          ← Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <a href="/" className="back-button">← Back to Home</a>
        <h1>📊 Xallakanm Analytics Dashboard</h1>
        <p className="dashboard-subtitle">Real-time tracking data</p>
      </header>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <div className="summary-icon">👥</div>
          <div className="summary-content">
            <h3>Total Visitors</h3>
            <p className="summary-number">{visitors.length}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">📱</div>
          <div className="summary-content">
            <h3>Mobile Users</h3>
            <p className="summary-number">{counters.visitors_by_device?.Mobile || 0}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">💻</div>
          <div className="summary-content">
            <h3>Desktop Users</h3>
            <p className="summary-number">{counters.visitors_by_device?.Desktop || 0}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">⬇️</div>
          <div className="summary-content">
            <h3>App Store Clicks</h3>
            <p className="summary-number">{counters.downloads_app_store || 0}</p>
          </div>
        </div>
      </div>

      {/* Visitors by Country */}
      {counters.visitors_by_country && (
        <div className="data-section">
          <h2>🌍 Visitors by Country</h2>
          <div className="country-grid">
            {Object.entries(counters.visitors_by_country).map(([country, count]) => (
              <div key={country} className="country-item">
                <span className="country-code">{country}</span>
                <span className="country-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visitors by OS */}
      {counters.visitors_by_os && (
        <div className="data-section">
          <h2>💿 Visitors by Operating System</h2>
          <div className="os-grid">
            {Object.entries(counters.visitors_by_os).map(([os, count]) => (
              <div key={os} className="os-item">
                <span className="os-name">{os}</span>
                <div className="os-bar">
                  <div 
                    className="os-bar-fill" 
                    style={{width: `${(count / visitors.length) * 100}%`}}
                  ></div>
                </div>
                <span className="os-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Downloads */}
      <div className="data-section">
        <h2>⬇️ Recent Download Clicks ({downloads.length})</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Store</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {downloads.slice(0, 10).map((download) => (
                <tr key={download.id}>
                  <td><strong>{download.store}</strong></td>
                  <td>{formatTimestamp(download.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Visitors */}
      <div className="data-section">
        <h2>👥 Recent Visitors</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>OS</th>
                <th>Browser</th>
                <th>Location</th>
                <th>IP</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {visitors.slice(0, 20).map((visitor) => (
                <tr key={visitor.id}>
                  <td>{visitor.deviceType}</td>
                  <td>{visitor.os}</td>
                  <td>{visitor.browser}</td>
                  <td>{visitor.city}, {visitor.country}</td>
                  <td><code>{visitor.ip}</code></td>
                  <td>{formatTimestamp(visitor.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Page Views */}
      <div className="data-section">
        <h2>👁️ Page Views ({pageViews.length})</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {pageViews.slice(0, 10).map((view) => (
                <tr key={view.id}>
                  <td>{view.page_name}</td>
                  <td>{formatTimestamp(view.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* External Links */}
      <div className="data-section">
        <h2>🔗 External Link Clicks ({externalLinks.length})</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Link</th>
                <th>URL</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {externalLinks.slice(0, 10).map((link) => (
                <tr key={link.id}>
                  <td><strong>{link.link_name}</strong></td>
                  <td><code>{link.destination_url}</code></td>
                  <td>{formatTimestamp(link.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>🔄 Data updates in real-time • Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  );
}
