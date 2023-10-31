import React, { useState } from 'react'

function Popup() {
    const [showPopup, setShowPopup] = useState(true);

    const closePopup = () => {
        setShowPopup(false);
    };

    return showPopup ? (
        <div className="popup">
          <div className="popup-content">
            <p>This website offeres products containing Nicotine and other substances that cause addiction. Be aware</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
    ) : null;
}

export default Popup