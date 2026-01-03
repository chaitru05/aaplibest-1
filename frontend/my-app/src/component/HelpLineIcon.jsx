import React, { useState } from "react";
import "../style/HelplineIcon.css";
import { Phone } from "lucide-react"; // Optional: for icon (npm install lucide-react)

const HelpLineIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="helpline-container">
      <div className="helpline-icon" onClick={() => setOpen(!open)}>
        <Phone size={24} />
      </div>

      {open && (
        <div className="helpline-modal">
          <p className="helpline-title">Helpline Number</p>
          <p className="helpline-number">📞 1800-227-550</p>
          <p className="helpline-subtext">(Toll Free)</p>
        </div>
      )}
    </div>
  );
};

export default HelpLineIcon;
