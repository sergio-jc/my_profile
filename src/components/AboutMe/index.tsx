import programming from "../../images/svg/programming.svg";
import "../../css/AboutMe.css";
import Smooth from "../Smooth";
const AboutMe = () => {
  return (
    <>
      <section id="sec2">
        <div className="about_me">
          <img
            src={programming}
            className="about_me_img"
            alt="programming_time"
          />
          <article className="about_me_msg">
            <h2>Hi,</h2>
            <h2>
              I'm <span className="about_me_name">Ronaldo,</span>{" "}
            </h2>
            <h2>Nice to meet you</h2>
            <p className="about_me_description">
              Since I started my journey as a web developer, I have been amazed
              with the IT world, I have met and collaborated with so many
              talented people to create high quality digital products. I am a
              quiet person, curious by nature, and I am always working to
              improve my skills, my philosophy :{" "}
              <span className="about_me_philosophy">
                "one problem at a time"
              </span>
              .
            </p>
            <div className="container_btn_aboutme">
              <a href="https://drive.google.com/uc?export=download&id=1tuYCcptuvFRlWJSJKAgGOISqUMUN2JSm">
                <button>Download CV</button>
              </a>
            </div>
            <div className="smooth_sec">
              <Smooth id={3} />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
