import React, { useEffect } from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'grey',
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      };
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <footer style={{ display: 'block', backgroundColor: 'grey', position: 'fixed', bottom: 0, width: '100%', padding: '20px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div id="google_translate_element"></div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/facebook-logo.png" alt="Facebook" style={{ width: '30px', marginRight: '10px' }} />
            <img src="/instagram-logo.png" alt="Instagram" style={{ width: '30px', marginRight: '10px' }} />
            <img src="/twitter-logo.png" alt="Twitter" style={{ width: '30px' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
