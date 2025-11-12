// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getDatabase, ref, push, set, increment, serverTimestamp } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0m-3VboUe5qo52zGcJOXE9dapO-qgd3c",
  authDomain: "xallakanm.firebaseapp.com",
  databaseURL: "https://xallakanm-default-rtdb.firebaseio.com",
  projectId: "xallakanm",
  storageBucket: "xallakanm.firebasestorage.app",
  messagingSenderId: "542743527581",
  appId: "1:542743527581:web:edb1bbe46fd8ee7568d474",
  measurementId: "G-2F3ETFWFCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Helper function to get device info
const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  let deviceType = 'Desktop';
  let os = 'Unknown';
  let browser = 'Unknown';

  // Detect device type
  if (/mobile/i.test(ua)) {
    deviceType = 'Mobile';
  } else if (/tablet|ipad/i.test(ua)) {
    deviceType = 'Tablet';
  }

  // Detect OS
  if (/windows/i.test(ua)) {
    os = 'Windows';
  } else if (/mac/i.test(ua)) {
    os = 'MacOS';
  } else if (/linux/i.test(ua)) {
    os = 'Linux';
  } else if (/android/i.test(ua)) {
    os = 'Android';
  } else if (/iphone|ipad|ipod/i.test(ua)) {
    os = 'iOS';
  }

  // Detect browser
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) {
    browser = 'Chrome';
  } else if (/safari/i.test(ua) && !/chrome/i.test(ua)) {
    browser = 'Safari';
  } else if (/firefox/i.test(ua)) {
    browser = 'Firefox';
  } else if (/edg/i.test(ua)) {
    browser = 'Edge';
  }

  return {
    deviceType,
    os,
    browser,
    userAgent: ua,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language
  };
};

// Helper function to get location
const getLocationInfo = async () => {
  try {
    // Try to get IP-based location from a free API
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      ip: data.ip || 'Unknown',
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'Unknown',
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      timezone: data.timezone || 'Unknown'
    };
  } catch (error) {
    console.log('Location fetch error:', error.message);
    return {
      ip: 'Unknown',
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      countryCode: 'Unknown',
      latitude: null,
      longitude: null,
      timezone: 'Unknown'
    };
  }
};

// Track visitor with device and location
export const trackVisitor = async () => {
  try {
    const deviceInfo = getDeviceInfo();
    const locationInfo = await getLocationInfo();

    const visitorData = {
      ...deviceInfo,
      ...locationInfo,
      timestamp: serverTimestamp(),
      url: window.location.href,
      referrer: document.referrer || 'Direct'
    };

    // Save visitor data
    const visitorsRef = ref(database, 'analytics/visitors');
    push(visitorsRef, visitorData).catch(err => console.log('Visitor tracking failed:', err.message));

    // Update counters by country
    if (locationInfo.countryCode !== 'Unknown') {
      const countryRef = ref(database, `analytics/counters/visitors_by_country/${locationInfo.countryCode}`);
      set(countryRef, increment(1)).catch(err => console.log('Country counter failed:', err.message));
    }

    // Update counters by device
    const deviceRef = ref(database, `analytics/counters/visitors_by_device/${deviceInfo.deviceType}`);
    set(deviceRef, increment(1)).catch(err => console.log('Device counter failed:', err.message));

    // Update counters by OS
    const osRef = ref(database, `analytics/counters/visitors_by_os/${deviceInfo.os}`);
    set(osRef, increment(1)).catch(err => console.log('OS counter failed:', err.message));

  } catch (error) {
    console.log('Visitor tracking error:', error.message);
  }
};

// Analytics helper functions - now writes to both Analytics and Realtime Database
export const trackDownloadClick = (store) => {
  // Log to Analytics
  logEvent(analytics, 'download_button_click', {
    store_type: store
  });
  
  // Write to Realtime Database with error handling
  try {
    const downloadsRef = ref(database, 'analytics/downloads');
    push(downloadsRef, {
      store: store,
      timestamp: serverTimestamp()
    }).catch(err => console.log('Database write failed:', err.message));
    
    // Increment counter
    const counterRef = ref(database, `analytics/counters/downloads_${store.toLowerCase().replace(' ', '_')}`);
    set(counterRef, increment(1)).catch(err => console.log('Counter update failed:', err.message));
  } catch (error) {
    console.log('Tracking error:', error.message);
  }
};

export const trackPageView = (pageName) => {
  // Log to Analytics
  logEvent(analytics, 'page_view', {
    page_name: pageName
  });
  
  // Write to Realtime Database with error handling
  try {
    const pageViewsRef = ref(database, 'analytics/page_views');
    push(pageViewsRef, {
      page_name: pageName,
      timestamp: serverTimestamp()
    }).catch(err => console.log('Database write failed:', err.message));
    
    // Increment counter
    const counterRef = ref(database, 'analytics/counters/total_page_views');
    set(counterRef, increment(1)).catch(err => console.log('Counter update failed:', err.message));
  } catch (error) {
    console.log('Tracking error:', error.message);
  }
};

export const trackTimeOnPage = (seconds) => {
  // Log to Analytics
  logEvent(analytics, 'time_on_page', {
    duration_seconds: seconds
  });
  
  // Write to Realtime Database with error handling
  try {
    const timeRef = ref(database, 'analytics/time_on_page');
    push(timeRef, {
      duration_seconds: seconds,
      timestamp: serverTimestamp()
    }).catch(err => console.log('Database write failed:', err.message));
  } catch (error) {
    console.log('Tracking error:', error.message);
  }
};

export const trackExternalLink = (linkName, url) => {
  // Log to Analytics
  logEvent(analytics, 'external_link_click', {
    link_name: linkName,
    destination_url: url
  });
  
  // Write to Realtime Database with error handling
  try {
    const linksRef = ref(database, 'analytics/external_links');
    push(linksRef, {
      link_name: linkName,
      destination_url: url,
      timestamp: serverTimestamp()
    }).catch(err => console.log('Database write failed:', err.message));
    
    // Increment counter
    const counterRef = ref(database, `analytics/counters/link_${linkName.toLowerCase().replace(/\s+/g, '_')}`);
    set(counterRef, increment(1)).catch(err => console.log('Counter update failed:', err.message));
  } catch (error) {
    console.log('Tracking error:', error.message);
  }
};

export { analytics };
export { database };
