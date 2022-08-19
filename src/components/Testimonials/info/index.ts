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
      "https://media-exp1.licdn.com/dms/image/C5603AQFHEl85YALsJw/profile-displayphoto-shrink_400_400/0/1652916282057?e=1665014400&v=beta&t=nAH0Nee7sucosHB7VxJxn_yJZpwys0nvbW6LYRLFGg8",
    description:
      "I had the great opportunity to work with him, in the final project of Henry's Bootcamp, where we worked many hours as a team giving me the possibility to know all the capabilities he has.He is an organized, innovative, creative, curious, and very sociable person; you will get a great professional.",
  },

  {
    name: "Zaid Raed",
    occupation: "Full Stack Developer",
    img_person:
      "https://media-exp1.licdn.com/dms/image/D4D35AQGxqQWQEZNw_Q/profile-framedphoto-shrink_200_200/0/1659456945183?e=1661482800&v=beta&t=E8XfCwINbjxMi1Kvf0ZSwc177ot1SFuxb77IwmYnCMQ",
    description:
      "I shared with Ronaldo the development of the MangaCoffe project, for the Henry Students bootcamp, he is an excellent professional, able to face any challenge, research and learn very fast, excellent teamwork and teamwork. You will become a great professional.",
  },

  {
    name: "Andrea Carvajal Osorio",
    occupation: "Front End Developer",
    img_person:
      "https://media-exp1.licdn.com/dms/image/D4D35AQHQ4KYQpvu8qQ/profile-framedphoto-shrink_200_200/0/1659466053851?e=1661482800&v=beta&t=YO0sYNZybADvB-aO6aK-PMT0a0VgLWymCdV9WZqmT3k",
    description:
      "I had the opportunity to work with Ronaldo in the Manga Coffee project, he is a very self-taught person who always seeks to increase his knowledge, works very well in a team and is always willing to help and support his colleagues in any way he can. He is a great professional who will bring great growth to the team he is working with.",
  },
];

export default persons