const cpgOne = require("../assests/images/color-palette-generator/one1.jpg");
const cpgTwo = require("../assests/images/color-palette-generator/two.png");
const cpgThree = require("../assests/images/color-palette-generator/three.png");
const cpgFour = require("../assests/images/color-palette-generator/four.gif");
const ycOne = require("../assests/images/yelp-camp/one1.jpg");
const ycTwo = require("../assests/images/yelp-camp/two.png");
const ycThree = require("../assests/images/yelp-camp/three.png");
const ycFour = require("../assests/images/yelp-camp/four.png");
const jgOne = require("../assests/images/jokes-generator/one1.jpg");
const jgTwo = require("../assests/images/jokes-generator/two.gif");
const loOne = require("../assests/images/lights-out/one1.jpg");
const loTwo = require("../assests/images/lights-out/two.gif");

export const projects = {
  personalProjects: [
    {
      id: "color-palette-generator",
      name: "Color Palette Generator",
      description: {
        introduction:
          "Based off Flat UI Colors and Material UI Colors. Users can generate palettes with various shades of colors and copy colors to their clipboard in various formats.",
        ending:
          "Learned how to use class components,manage state, integrate JSS styles and react-router in React.",
      },
      summary: "An app that lets users generate color palettes.",
      webLink: "https://anushkabahuguna.github.io/react-colors-app/",
      gitHubLink: "https://github.com/anushkabahuguna/react-colors-app",
      startDate: "01/07/2021",
      endDate: "26/07/2021",
      // array of images or one image or gifs
      images: [cpgOne, cpgTwo, cpgFour, cpgThree],
      tags: ["React", "JSS", "React Router", "Material-UI"],
    },
    {
      id: "yelp-camp",
      name: "Yelp Camp",
      description: {
        introduction:
          "This project was done under the 'Web Developer Bootcamp' online course by Colt Steele. Users can create,delete, review capgrounds.",
        ending:
          "Learned how to implement CRUD, authentication. Used MongoDB on backend to save data to the database",
      },
      summary: "An app where users can create and review campgrounds.",
      webLink: "https://secure-savannah-90575.herokuapp.com/",
      gitHubLink: "https://github.com/anushkabahuguna/YelpCamp",
      startDate: "05/07/2020",
      endDate: "03/09/2020",
      // array of images or one image or gifs
      images: [ycOne, ycTwo, ycThree, ycFour],
      tags: ["Frontend", "Node/Express", "CRUD", "MongoDB", "MapBox API"],
    },
    {
      id: "jokes-generator",
      name: "Jokes Generator",
      description: {
        introduction:
          "Users can fetch new jokes and vote on jokes.The reviews and jokes gets saved to Local Storage. ",
        ending:
          "Learned how to handle API calls in React. Got a better understanding with React State handling.",
      },
      summary: "An app where users can review jokes because why not?",
      webLink: "https://anushkabahuguna.github.io/dad-jokes-app/",
      gitHubLink: "https://github.com/anushkabahuguna/dad-jokes-app",
      startDate: "01/07/2021",
      endDate: "04/07/2021",
      // array of images or one image or gifs
      images: [jgOne, jgTwo],
      tags: ["React", "Jokes API"],
    },
    {
      id: "lights-out",
      name: "Lights Out",
      description: {
        introduction:
          "The goal of this game is to switch of all the lights by cliking any number of cells. Modified to add any number of rows/columns.",
        ending:
          "Apart from implementing the logic of the game, I learned how to handle events in React.",
      },
      summary: "Clone of the 'Lights Out' game",
      webLink: "https://anushkabahuguna.github.io/lights-out/",
      gitHubLink: "https://github.com/anushkabahuguna/lights-out",
      startDate: "09/06/2021",
      endDate: "14/06/2021",
      // array of images or one image or gifs
      images: [loOne, loTwo],
      tags: ["HTML/CSS", "React"],
    },
    {
      id: "lights-out",
      name: "Lights Out",
      description: {
        introduction:
          "The goal of this game is to switch of all the lights by cliking any number of cells. Modified to add any number of rows/columns.",
        ending:
          "Apart from implementing the logic of the game, I learned how to handle events in React.",
      },
      summary: "Clone of the 'Lights Out' game",
      webLink: "https://anushkabahuguna.github.io/lights-out/",
      gitHubLink: "https://github.com/anushkabahuguna/lights-out",
      startDate: "09/06/2021",
      endDate: "14/06/2021",
      // array of images or one image or gifs
      images: [loOne, loTwo],
      tags: ["HTML/CSS", "React"],
    },
    {
      id: "lights-out",
      name: "Lights Out",
      description: {
        introduction:
          "The goal of this game is to switch of all the lights by cliking any number of cells. Modified to add any number of rows/columns.",
        ending:
          "Apart from implementing the logic of the game, I learned how to handle events in React.",
      },
      summary: "Clone of the 'Lights Out' game",
      webLink: "https://anushkabahuguna.github.io/lights-out/",
      gitHubLink: "https://github.com/anushkabahuguna/lights-out",
      startDate: "09/06/2021",
      endDate: "14/06/2021",
      // array of images or one image or gifs
      images: [loOne, loTwo],
      tags: ["HTML/CSS", "React"],
    },
    {
      id: "lights-out",
      name: "Lights Out",
      description: {
        introduction:
          "The goal of this game is to switch of all the lights by cliking any number of cells. Modified to add any number of rows/columns.",
        ending:
          "Apart from implementing the logic of the game, I learned how to handle events in React.",
      },
      summary: "Clone of the 'Lights Out' game",
      webLink: "https://anushkabahuguna.github.io/lights-out/",
      gitHubLink: "https://github.com/anushkabahuguna/lights-out",
      startDate: "09/06/2021",
      endDate: "14/06/2021",
      // array of images or one image or gifs
      images: [loOne, loTwo],
      tags: ["HTML/CSS", "React"],
    },
    {
      id: "lights-out",
      name: "Lights Out",
      description: {
        introduction:
          "The goal of this game is to switch of all the lights by cliking any number of cells. Modified to add any number of rows/columns.",
        ending:
          "Apart from implementing the logic of the game, I learned how to handle events in React.",
      },
      summary: "Clone of the 'Lights Out' game",
      webLink: "https://anushkabahuguna.github.io/lights-out/",
      gitHubLink: "https://github.com/anushkabahuguna/lights-out",
      startDate: "09/06/2021",
      endDate: "14/06/2021",
      // array of images or one image or gifs
      images: [loOne, loTwo],
      tags: ["HTML/CSS", "React"],
    },
  ],
};
