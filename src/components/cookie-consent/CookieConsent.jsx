import React, { useEffect, useState } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("opti_consent");
      if (stored) return;
    } catch (e) {
      // ignore localStorage errors
    }

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    alert("accept");
    if (typeof window.setOptiCookieConsent === "function") {
      window.setOptiCookieConsent({ statistics: true });
    } else {
      try {
        localStorage.setItem("opti_consent", JSON.stringify({ statistics: true }));
      } catch (e) {}
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cc-overlay">
      <div className="cc-modal">
        <p>
          We use cookies to improve your experience and analyze site traffic. By
          clicking Accept you consent to statistics cookies.
        </p>
        <div className="cc-actions">
          <button className="cc-accept" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
