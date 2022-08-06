import programming from "../../images/svg/programming.svg";
import "../../css/AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about_me">
      <img src={programming} className="about_me_img" alt="programming_time"/>
      <article className="about_me_msg">
        <h2>Hi,</h2>
        <h2>
          I'm <span className="about_me_name">Ronaldo,</span>{" "}
        </h2>
        <h2>Nice to meet you</h2>
        <p className="about_me_description">
          Since I started my journey as a wed developer, I have been amazed with
          the IT world, I have met and collaborated with so many talented people
          to create high quality digital products. I am a quiet person, curious
          by nature, and I am always working to improve my skills, my philosophy
          : <span className="about_me_philosophy">"one problem at a time"</span>.
        </p>
      </article>
    </div>
  );
};

export default AboutMe;
