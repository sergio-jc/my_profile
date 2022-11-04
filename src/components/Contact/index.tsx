import "../../css/Contact.css";
import linkedin from "../../images/logos/linkedin.svg";
import github from "../../images/logos/github-icon-1.svg";
import twitter from "../../images/logos/twitter-b.svg";
import gmail from "../../images/logos/mail_icon.svg";
import wsp from "../../images/logos/wps_icon.svg";
import pair_programming from "../../images/svg/pair_programming.svg";

const Contact = () => {
  return (
    <section id="sec6">
      <div className="pair_programming">
        <img
          src={pair_programming}
          className="about_me_img"
          alt="programming_time"
        />
        <div>
          <div className="contact_q_msg">
            <h2>Interested in working together?</h2>
            <p>
              We should make an appointment to chat. You can connect with me
              through
            </p>
          </div>
          <div className="contain_contact_icons">
            
            <a href="https://github.com/sergio-jc" target={"_blank"}>
              <img
                src={github}
                alt="github_icon"
                className="github_icon_detail"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ronaldo-jara/"
              target={"_blank"}
            >
              <img
                src={linkedin}
                alt="linkedin_icon"
                className="github_icon_detail"
              />
            </a>
            <a href="mailto:sergiojara0609@gmail.com" target={"_blank"}>
              <img
                src={gmail}
                alt="gmail_icon"
                className="github_icon_detail"
              />
            </a>
            <a href="https://wa.me/51924879118" target={"_blank"}>
              <img src={wsp} alt="wsp_icon" className="github_icon_detail" />
            </a>
          </div>
          <div className="contact_q_msg bluee">
            <p>Coffee is on me 💙</p>
            <p>Handmade and lovingly made by me 💙 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
