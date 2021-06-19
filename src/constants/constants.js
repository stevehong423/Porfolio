export const projects = [
  {
    title: 'Recoilize',
    description: "Recoilize is a Chrome extension that helps debug Recoil applications by memorizing the state of components with every render.  Recoil itself is a state management library for React.  My team and I worked in a SCRUM environment and integrated type inference from TypeScript and slicing functionality of Redux Toolkit to reduce boilerplate and run-time errors.",
      image: '/images/Recoilize.png',
      tags: ['React', 'Redux Toolkit', 'TypeScript', 'Jest'],
    source: 'https://www.recoilize.io/',
    visit: 'https://github.com/open-source-labs/Recoilize',
    id: 0,
  },
  {
    title: 'CodeSocial',
    description:"CodeSocial is a full stack JavaScript social media application designed specifically for developers. The application utilizes a React/Redux front-end architecture following the Flux paradigm with a Node.js/Express backend with BCrypt encryption and JWT implementation for user authentication and security.",
    image: '/images/CodeSocial.png',
    tags: ['React', 'Redux', 'MongoDB', 'Node.js', 'Express'],
    source: 'https://github.com/stevehong423/CodeSocial/tree/master',
    visit: 'https://github.com/stevehong423/CodeSocial/tree/master',
    id: 1,
  },
  {
    title: 'Curio',
    description: "Curio is a full stack JavaScript app designed to give a virtual experience of The Metropolitan Museum of Art. The team and I implemented GraphQL to streamline our database queries through one endpoint and to adjust for scalability.",
      image: '/images/Curio.jpg',
      tags: ['React', 'PostGreSQL', 'GraphQL', 'Express', 'Node.js'],
    source: 'https://github.com/teamcurio/Curio',
    visit: 'https://github.com/teamcurio/Curio',
    id: 2,
  },
  // {
  //   title: 'Unichat',
  //   description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: '/images/4.jpg',
  //   tags: ['React', 'ChatEngine', 'Firebase'],
  //   source: 'https://google.com',
  //   visit: 'https://google.com',
  //   id: 3,
  // },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];