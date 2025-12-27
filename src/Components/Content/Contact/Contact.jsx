import "./Contact.css";
import SectionTitle from "../../Common/SectionTitle";
import DiscordStatus from "./DiscordStatus";
import GitHubStats from "./GitHubStats";
import EmailContact from "./EmailContact";

function Contact() {
  return (
    <div id="ContactMe" className="scroll-animate">
      <div id="ContactSection">
        <SectionTitle highlightText="Me">Contact Me</SectionTitle>
        <div id="ContactWidgets">
          <DiscordStatus />
          <GitHubStats />
          <EmailContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
