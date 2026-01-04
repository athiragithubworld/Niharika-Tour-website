import React from "react";

const DefenceNotification = () => {
  const notificationText = `Special Discount for Defence Personnel (Army, Navy, Air Force, Coast Guard, Police, BSF, CRPF & Security Forces) on all Services & Tour Packages – Contact us via WhatsApp or Call +91 81291 37502`;

  return (
    <div className="defence-notification">
      <div className="defence-notification-content">
        <span>
          {notificationText.split("WhatsApp")[0]}
          WhatsApp
          <img
            src="/whatsapp1.png"
            alt="WhatsApp"
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              margin: "0 3px",
            }}
          />
          {notificationText.split("WhatsApp")[1]}
        </span>
        <span>
          {notificationText.split("WhatsApp")[0]}
          WhatsApp
          <img
            src="/whatsapp1.png"
            alt="WhatsApp"
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              margin: "0 3px",
            }}
          />
          {notificationText.split("WhatsApp")[1]}
        </span>
        <span>
          {notificationText.split("WhatsApp")[0]}
          WhatsApp
          <img
            src="/whatsapp1.png"
            alt="WhatsApp"
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              margin: "0 3px",
            }}
          />
          {notificationText.split("WhatsApp")[1]}
        </span>
      </div>
    </div>
  );
};

export default DefenceNotification;
