import persons, { Persons } from "./info";
import "../../css/Testimonials.css";
import Comends from "./Coments";

const Testimonials = () => {
  return (
    <div className="App-header">
      <h2>TESTIMONIALS</h2>
      <p>People I've worked with have said some nice things...</p>
      <section className="avatars">
        {persons.map((e: Persons, i: number) => {
          return <img src={e.img_person} alt={`id_img_${i}`} />;
        })}
      </section>
      <Comends pag={0}/>
    </div>
  );
};

export default Testimonials;
