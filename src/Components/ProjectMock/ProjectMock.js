import img1 from "../../assets/myPics/chatify.png"
import img2 from "../../assets/myPics/couchWatch.png"
import img3 from "../../assets/myPics/flipGame.png"
import img4 from "../../assets/myPics/portfolio.png"
import img5 from "../../assets/myPics/todoApp.png"

const ProjectMock = [
  {
    id: 1,
    name: 'CHATIFY',
    technologies: ['ReactJS', 'Firebase', 'Redux', 'Sass', 'CSS'],
    description: `Chatify v1.0 is a messaging app that lets you connect with people from all around the world. Whether you're at home or on the go, Chatify allows you to chat with anyone, anytime, anywhere.`,
    imageUrl: img1,
    liveUrl: "https://chatify-front-end-ofmb.vercel.app/login",
    codeUrl:"https://github.com/jayanth920/Chatify"
  },
  {
    id: 2,
    name: 'CouchWatch',
    technologies: ['ReactJS', 'RestAPI'],
    description: "An app that lets you choose movies, and for the movies which are new it lets you go to the movie's official booking page. It also lets you go the official IMDB rating page.",
    imageUrl: img2,
    liveUrl:"https://couchwatch.vercel.app/",
    codeUrl:"https://github.com/jayanth920/CoutchWatch"
  },
    {
      id: 3,
      name: 'MEMORY CARD GAME',
      technologies: ['HTML', 'CSS', 'Javascript'],
      description: 'A traditional card flip memory game, where pictures must be matched. The max time alotted for each game is 60 seconds, combined with light(default) / dark modes. ',
      imageUrl: img3,
      liveUrl:"https://jayanth920.github.io/Memory-Match-Mania/",
      codeUrl:"https://github.com/jayanth920/Memory-Match-Mania"
    },
    {
      id: 4,
      name: 'PORTFOLIO',
      technologies: ['ReactJS', 'SASS'],
      description: 'A portfolio inspired from front-end designers completely made from scratch with different technology. Created with basic react states, draggable packages, with css roations along with SASS, keeping it aesthetic.',
      imageUrl: img4,
      liveUrl:"https://jayanth920.vercel.app/",
      codeUrl:"https://github.com/jayanth920/jayanth920.github.io"
    },
    {
      id: 5,
      name: 'ToDo App',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB', 'ReactJS'],
      description: 'A basic todo app made in collaboration with code-learners from across the states and around the world. One of my beginner projects made to clear our basic front end and backend concepts with React and Node-Express.',
      imageUrl: img5,
      liveUrl:"https://front-end-opal-iota.vercel.app/",
      codeUrl:"https://github.com/jayanth920/ToDoApp"
    },
  ];
  
  export default ProjectMock;
  