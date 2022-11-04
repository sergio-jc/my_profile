import { ReactNode } from "react";

export interface Persons {
  name: string;
  occupation: string;
  img_person: string;
  description: string;
}

 const persons: Array<Persons> = [
  {
    name: "Luis Gabriel Valencia Morales",
    occupation: "Back End Developer",
    img_person:
      "https://ca.slack-edge.com/TPRS7H4PN-U038AFM0Q3Y-d37fe52865c7-512",
    description:
      "I had the great opportunity to work with him, in the final project of Henry's Bootcamp, where we worked many hours as a team giving me the possibility to know all the capabilities he has.He is an organized, innovative, creative, curious, and very sociable person; you will get a great professional.",
  },

  {
    name: "Zaid Raed",
    occupation: "Full Stack Developer",
    img_person:
      "https://res.cloudinary.com/dbqlsilt2/image/upload/c_crop,h_990,w_990,x_55/v1658857472/a/a92f19f6-3b98-41d8-9c28-204c1aca2235_fgzldk.jpg",
    description:
      "I shared with Ronaldo the development of the MangaCoffe project, for the Henry Students bootcamp, he is an excellent professional, able to face any challenge, research and learn very fast, excellent teamwork and teamwork. You will become a great professional.",
  },

  {
    name: "Andrea Carvajal Osorio",
    occupation: "Front End Developer",
    img_person:
      "https://ca.slack-edge.com/TPRS7H4PN-U0368FERG85-6c67e2a7ec1b-512",
    description:
      "I had the opportunity to work with Ronaldo in the Manga Coffee project, he is a very self-taught person who always seeks to increase his knowledge, works very well in a team and is always willing to help and support his colleagues in any way he can. He is a great professional who will bring great growth to the team he is working with.",
  },
];

export default persons