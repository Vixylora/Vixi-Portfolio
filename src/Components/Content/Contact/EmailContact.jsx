import { useState } from 'react';
import { FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

function EmailContact() {
  const [copied, setCopied] = useState(false);
  const EMAIL = 'vixylora@proton.me';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="EmailContainer">
      <div id="DiscordCard" className="email-card">
        <div id="AvatarContainer" className="email-icon-wrapper">
          <FaEnvelope size={40} color="#ffc08a" />
        </div>
        <div id="Discordtext" className="email-content">
          <div id="TextContainer">
            <div id="Name">
              <h2 id="DisplayName">Email Me</h2>
            </div>
            <div className="discord-divider"></div>
            <p id="StatusText" className="email-address-text">
              {EMAIL}
            </p>
          </div>
          <div className="email-actions-row">
            <button onClick={handleCopyEmail} className="email-copy-btn">
              {copied ? <FaCheck /> : <FaCopy />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailContact;
