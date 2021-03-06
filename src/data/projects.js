import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

//use screen case for global vars
const PROJECTS = [
    {   
        id: 1,
        title: 'Legal Contract',
        description: 'DE > EN, 2000 words',
        link: 'https://www.imgur.com/deen1',
        image: project1
    },
    {   
      id: 2,
      title: 'Financial',
      description: 'DE > EN, 500 words',
      link: 'https://www.imgur.com/deen2',
      image: project1
  },

    {
      id: 3,
      title: 'My API',
      description: 'A REST API that I built from scratch with GET and POST requests!',
      link: 'https://github.com/15Dkatz/example',
      image: project2
    },
    {
      id: 4,
      title: 'Operating Systems Final Project',
      description: 'My unique final project for my university Operating Systems course.',
      link: 'https://github.com/15Dkatz/example',
      image: project3
    }

];

export default PROJECTS;