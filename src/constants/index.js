import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cplusplus,
    html,
    css,
    reactjs,
    python,
    java,
    nodejs,
    matlab,
    git,
    tensorflow,
    pytorch,
    R,
    firebase,
    icpc,
    nsf,
    purdue,
    anvil,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Development",
      icon: web,
    },
    {
      title: "Data Science",
      icon: mobile,
    },
    {
      title: "Algorithm Design",
      icon: backend,
    },
    {
      title: "Mathematical Economics",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cplusplus
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    }
  ];
  
  const experiences = [
    {
      title: "Research Fellow",
      company_name: "National Science Foundation",
      icon: nsf,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Benchmarking data retrieval efficiency on 20TB of high-resolution micro-meteorological data.",
        "Utilised Dask, Spark, THREDDS, OpenDAP for Parallel Computing & Data Manipulation.",
        "Developed expertise in Raster Data Processing and Cloud-Optimised data formats.",
      ],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "Purdue University",
      icon: purdue,
      iconBg: "#E6DEDD",
      date: "August 2023 - December 2023",
      points: [
        "Guided a large class of 900+ freshmen, introducing essential tools used in Computer Science.",
        "Provided assistance in using Git, Linux and LaTeX by holding Office Hours for 100+ students.",
      ],
    },
    {
      title: "AI Engineer",
      company_name: "Anvil Startups",
      icon: anvil,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developed Co-Founder Matching Platform which accelerated on-campus startup formations.",
        "Implemented state-of-the-art clustering algorithms to analyse 250K+ data points.",
      ],
    },
    {
      title: "Organising Executive",
      company_name: "Competitive Programming's Union",
      icon: icpc,
      iconBg: "#E6DEDD",
      date: "October 2022 - Present",
      points: [
        "Empowered 500+ students with cutting-edge algorithms and competitive programming training.",
        "Achieved increased club engagement along with exceptional competition success in ICPC.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };