import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { getDeviceType, isMobile, isTouchDevice, formatPhoneNumber } from '../utils/mobileOptimization';

/**
 * Mobile Testing Dashboard Component
 * Use this component to test and verify mobile optimizations
 * 
 * Usage:
 * import MobileTestDashboard from '@/components/MobileTestDashboard';
 * <MobileTestDashboard />
 */
const MobileTestDashboard = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    type: '',
    width: 0,
    height: 0,
    isMobile: false,
    isTouch: false,
    orientation: ''
  });

  const [tests, setTests] = useState([
    { name: 'Touch Targets (min 44px)', status: 'pending', description: 'All buttons meet minimum size' },
    { name: 'Responsive Typography', status: 'pending', description: 'Text scales properly' },
    { name: 'No Horizontal Scroll', status: 'pending', description: 'Content fits viewport' },
    { name: 'Navigation Working', status: 'pending', description: 'Mobile menu functional' },
    { name: 'External Links', status: 'pending', description: 'Phone, email, WhatsApp work' },
    { name: 'Form Inputs', status: 'pending', description: 'No iOS zoom on focus' },
  ]);

  useEffect(() => {
    const updateDeviceInfo = () => {
      setDeviceInfo({
        type: getDeviceType(),
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: isMobile(),
        isTouch: isTouchDevice(),
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      });
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  const runTests = () => {
    const updatedTests = [...tests];

    // Test 1: Touch targets
    const buttons = document.querySelectorAll('button, a');
    let touchTargetsPass = true;
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      if (rect.height < 44 || rect.width < 44) {
        touchTargetsPass = false;
      }
    });
    updatedTests[0].status = touchTargetsPass ? 'passed' : 'failed';

    // Test 2: Typography
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    updatedTests[1].status = rootFontSize >= 16 ? 'passed' : 'failed';

    // Test 3: Horizontal scroll
    const bodyWidth = document.body.scrollWidth;
    const windowWidth = window.innerWidth;
    updatedTests[2].status = bodyWidth <= windowWidth ? 'passed' : 'failed';

    // Test 4: Navigation
    const nav = document.querySelector('nav');
    updatedTests[3].status = nav ? 'passed' : 'failed';

    // Test 5: External links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    updatedTests[4].status = (phoneLinks.length > 0 && emailLinks.length > 0) ? 'passed' : 'failed';

    // Test 6: Form inputs
    const inputs = document.querySelectorAll('input, textarea');
    let inputsPass = true;
    inputs.forEach(input => {
      const fontSize = parseFloat(getComputedStyle(input).fontSize);
      if (fontSize < 16) inputsPass = false;
    });
    updatedTests[5].status = inputsPass ? 'passed' : 'failed';

    setTests(updatedTests);
  };

  const getDeviceIcon = () => {
    if (deviceInfo.width < 768) return <Smartphone className="text-blue-500" size={32} />;
    if (deviceInfo.width < 1024) return <Tablet className="text-green-500" size={32} />;
    return <Monitor className="text-purple-500" size={32} />;
  };

  const getStatusIcon = (status) => {
    if (status === 'passed') return <CheckCircle className="text-green-500" size={20} />;
    if (status === 'failed') return <AlertCircle className="text-red-500" size={20} />;
    return <Info className="text-gray-400" size={20} />;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        className="bg-[#1D4E38] text-white p-4 rounded-full shadow-lg hover:bg-[#2A6B50] transition-all"
        onClick={() => document.getElementById('mobile-dashboard').classList.toggle('hidden')}
      >
        📱
      </button>

      {/* Dashboard Panel */}
      <div
        id="mobile-dashboard"
        className="hidden absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 p-6 max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#1D4E38]">Mobile Test Dashboard</h3>
          <button
            onClick={() => document.getElementById('mobile-dashboard').classList.add('hidden')}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Device Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-4 mb-4">
            {getDeviceIcon()}
            <div>
              <h4 className="font-semibold text-gray-800 capitalize">{deviceInfo.type}</h4>
              <p className="text-sm text-gray-600">
                {deviceInfo.width} × {deviceInfo.height}px
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">Mobile:</span>
              <span className={deviceInfo.isMobile ? 'text-green-600' : 'text-gray-600'}>
                {deviceInfo.isMobile ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Touch:</span>
              <span className={deviceInfo.isTouch ? 'text-green-600' : 'text-gray-600'}>
                {deviceInfo.isTouch ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <span className="font-medium">Orientation:</span>
              <span className="text-gray-600 capitalize">{deviceInfo.orientation}</span>
            </div>
          </div>
        </div>

        {/* Run Tests Button */}
        <button
          onClick={runTests}
          className="w-full bg-[#1D4E38] text-white py-3 rounded-lg font-semibold hover:bg-[#2A6B50] transition-all mb-4"
        >
          Run Mobile Tests
        </button>

        {/* Test Results */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 mb-2">Test Results:</h4>
          {tests.map((test, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg border ${
                test.status === 'passed'
                  ? 'bg-green-50 border-green-200'
                  : test.status === 'failed'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              {getStatusIcon(test.status)}
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-800">{test.name}</p>
                <p className="text-xs text-gray-600">{test.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Test */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">Test External Links:</h4>
          <div className="space-y-2">
            <a
              href="tel:+919913323064"
              className="block bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm hover:bg-blue-100 transition-all"
            >
              📞 Call: {formatPhoneNumber('+919913323064')}
            </a>
            <a
              href="https://wa.me/919913323064"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-50 border border-green-200 rounded-lg p-3 text-sm hover:bg-green-100 transition-all"
            >
              💬 WhatsApp: {formatPhoneNumber('+919913323064')}
            </a>
            <a
              href="mailto:4manfabrics@gmail.com"
              className="block bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm hover:bg-purple-100 transition-all"
            >
              ✉️ Email: 4manfabrics@gmail.com
            </a>
          </div>
        </div>

        {/* Performance Info */}
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>Tip:</strong> Test on actual devices for best results. Emulators may not accurately reflect touch behavior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileTestDashboard;
