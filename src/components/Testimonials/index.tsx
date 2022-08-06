import persons, { Persons } from "./info";
import "../../css/Testimonials.css";
import Comends from "./Coments";
import Smooth from "../Smooth";

const Testimonials = () => {
  return (
    <section id="sec5">
      <div className="App-header">
        <h2>TESTIMONIALS</h2>
        <p>People I've worked with have said some nice things...</p>
        <section className="avatars">
          {persons.map((e: Persons, i: number) => {
            return <img src={e.img_person} alt={`id_img_${i}`} />;
          })}
        </section>
        <Comends pag={0} />
        <div className="smooth_sec">
          <Smooth id={5} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
