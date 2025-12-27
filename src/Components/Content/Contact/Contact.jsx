import "./Contact.css";
import { contactData } from "./ContactData";
import SectionTitle from "../../Common/SectionTitle";
import { FaDiscord, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

// Map icon names to actual icon components
const iconMap = {
  FaDiscord: FaDiscord,
  FaGithub: FaGithub,
  FaEnvelope: FaEnvelope,
  FaTwitter: FaTwitter,
};

function Contact() {
  return (
    <div id="contact-section" className="scroll-animate">
      <div id="contact-container">
        <SectionTitle highlightText="Me">Contact Me</SectionTitle>
        <p className="contact-description">
          Feel free to reach out to me through any of the following platforms!
        </p>
        <div id="contact-grid">
          {contactData.map((contact, index) => {
            const IconComponent = iconMap[contact.icon];
            const colorClass = `contact-card-${contact.name.toLowerCase()}`;
            return (
              <a
                key={index}
                href={contact.link}
                className={`contact-card ${colorClass} cursor-target`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">
                  <IconComponent size={40} />
                </div>
                <div className="contact-info">
                  <h3 className="contact-name">{contact.name}</h3>
                  <p className="contact-value">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
