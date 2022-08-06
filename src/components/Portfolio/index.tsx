import manga from "../../images/projects/mangaCoffe.png";
import food from "../../images/projects/healthyFood.png";
import github from "../../images/logos/github-icon-1.svg";
import youtube from "../../images/logos/youtube_black_logo.svg";
import deploy from "../../images/logos/deploy_icon_3.svg";
import "../../css/Portfolio.css";
const Portfolio = () => {
  return (
    <div>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cum
              ipsa atque necessitatibus error eaque dignissimos modi natus,
              pariatur numquam molestiae ducimus quia voluptate voluptatibus
              magni dolorum? Reprehenderit, sed illum!
            </p>
            <img
              src={github}
              alt="github_icon"
              className="github_icon_detail"
            />
            <img
              src={youtube}
              alt="github_youtube"
              className="github_icon_detail"
            />
            <img
              src={deploy}
              alt="github_youtube"
              className="github_icon_detail"
            />
          </div>
        </div>
        <div className="portfolio_proyect">
          <div>
            <img src={food} alt="healthy_food" className="img_portfolio" />
          </div>
          <div className="portfolio_proyect_description">
            <h2>Healthy Eating</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              architecto ratione similique? Quisquam maxime voluptatibus porro
              doloremque exercitationem, quia fugiat ipsum, repellat
              consequuntur, labore aperiam. Nam aperiam dolorem temporibus qui!
            </p>
            <img
              src={github}
              alt="github_icon"
              className="github_icon_detail"
            />
            <img
              src={youtube}
              alt="github_youtube"
              className="github_icon_detail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
