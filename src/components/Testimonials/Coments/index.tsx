import React from "react";
import testimonials, { Persons } from "../info";
import "../../../css/Testimonials.css"
interface PropsComends {
  pag: number;
}

const Comends = ({ pag }: PropsComends) => {
  return (
    <div className="container_comends">
      {testimonials.map((e: Persons, i: number) => {
        return (
          <div key={`comends_${i}`} className={"contain_comend"}>
            <h4>{e.name}</h4>
            <h6>{e.occupation}</h6>
            <p>{e.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comends;
