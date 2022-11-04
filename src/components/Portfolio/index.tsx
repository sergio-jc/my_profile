import manga from "../../images/projects/mangaCoffe.png";
import food from "../../images/projects/healthyFood.png";
import github from "../../images/logos/github-icon-1.svg";
import youtube from "../../images/logos/youtube_black_logo.svg";
import deploy from "../../images/logos/deploy_icon_3.svg";
import "../../css/Portfolio.css";
import Smooth from "../Smooth";
const Portfolio = () => {
  return (
    <section id="sec4">
      <div className="contain_protfile">
        <div className="portfolio_contain">
          <h2 className="portfolio_contain">PORTFOLIO</h2>
        </div>
        <div className="portfolio_proyects_contain">
          <div className="portfolio_proyect">
            <div>
              <img src={manga} alt="manga-coffee" className="img_portfolio" />
            </div>
            <div className="portfolio_proyect_description">
              <h2>Manga Coffee</h2>
              <p>
              Dynamic project with multiple complex functionalities, and multiple details with which the application becomes easy and intuitive to use, catching the user and inviting him to enjoy and enjoy the application.
              </p>
              <p><strong>React - Typescript - Redux Toolkit - Sass - Firebase - NodeJs - Express - MongoDB </strong></p>
              <a
                href="https://github.com/NosliwKuns/MANGA-COFFEE"
                target={"_blank"}
              >
                <img
                  src={github}
                  alt="github_icon"
                  className="github_icon_detail"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=jSyNehYLQp0&t=2s"
                target={"_blank"}
              >
                <img
                  src={youtube}
                  alt="github_youtube"
                  className="github_icon_detail"
                />
              </a>
              <a href="https://manga-coffee.vercel.app/" target="_blank">
                <img
                  src={deploy}
                  alt="github_youtube"
                  className="github_icon_detail"
                />
              </a>
            </div>
          </div>
          <div className="portfolio_proyect">
            <div>
              <img src={food} alt="healthy_food" className="img_portfolio" />
            </div>
            <div className="portfolio_proyect_description">
              <h2>Healthy Eating</h2>
              <p>
              A proof of my evolution as a programmer, was my first full stack application, being a continuous learning challenge, where I was encouraged to try new technologies, overcoming my limits and improving my skills. 
              </p>
              <p><strong>React - Javascript - Redux - Sequelize - PostgresSQL - NodeJs - Express </strong></p>
              <a href="https://github.com/sergio-jc/PI-food" target={"_blank"}>
                <img
                  src={github}
                  alt="github_icon"
                  className="github_icon_detail"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=ocxIH90O5xA&t=19s"
                target={"_blank"}
              >
                <img
                  src={youtube}
                  alt="github_youtube"
                  className="github_icon_detail"
                />
              </a>
            </div>
          </div>
        </div>

<section className="container_img_portfolio_sec">
<article>
<img src={"https://raw.githubusercontent.com/sergio-jc/ecommerce-product-page-fm/main/design/desktop-preview.jpg"} alt="healthy_food" className="img_portfolio_sec" />
<h2 className="blue">E-commerce product page</h2>
<p className="text_c"> <strong>Html - Sass - Javascript</strong></p>

</article>
<article>
<img src={"https://raw.githubusercontent.com/sergio-jc/time-tracking-dashboard/main/design/desktop-preview.jpg"} alt="healthy_food" className="img_portfolio_sec" />
<h2 className="blue">Time tracking dashboard</h2>
<p className="text_c"> <strong>Html - Css - Javascript</strong></p>
</article>
<article>
<img src={"https://raw.githubusercontent.com/sergio-jc/expenses-chart-component-fm/main/design/desktop-preview.jpg"} alt="healthy_food" className="img_portfolio_sec" />
<h2 className="blue">Expenses chart component</h2>
<p className="text_c"> <strong>Html - Sass - Javascript</strong></p>
</article>

</section>



        <div className="portfolio_proyect_question">
          <div>
            <div className="portfolio_proyect_question">
              <h2>Interested in collaborating with me?</h2>
            </div>
            <p>
              I’m always open to discussing product design work or partnership
              opportunities.
            </p>
          </div>
        </div>
        <div className="smooth_sec">
          <Smooth id={5} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
