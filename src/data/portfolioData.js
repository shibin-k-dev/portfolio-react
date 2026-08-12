import { title } from 'framer-motion/client';
import { view } from 'framer-motion/m';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiPostman, SiVercel, SiNetlify } from 'react-icons/si';

export const skills = {
  frontend: [
    { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white' },
    { name: 'VS Code', icon: FaReact, color: 'text-blue-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
    { name: 'Vercel', icon: SiVercel, color: 'text-white' },
    { name: 'Netlify', icon: SiNetlify, color: 'text-cyan-600' },
  ]
};

export const projects = [
  
  {
    title: 'ResurchHub',
    description: 'A MERN Stack-based research management platform that helps administrators, research guides, students, and reviewers manage research projects in one place. It provides secure role-based access, project collaboration, document management, progress tracking, and an easy-to-use dashboard for efficient research management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: [ 'https://github.com/shibin-k-dev/ResearchHub-Frontend.git',
             
          'https://github.com/shibin-k-dev/ResearchHub-Backend.git'],
          demo:'https://www.linkedin.com/posts/muhammed-shibin-dev_webdevelopment-frontend-backend-activity-7488208990095581184-U5XA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER2S3wB8WnyYLgnyL81CFrxjaaISfFbXp8',
    
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  
  
  {
    title: 'Simple Calculator Web App',
    description: 'A basic calculator application that performs arithmetic operations such as addition, subtraction, multiplication, and division. Users can input numbers using the keypad, select an operation, and view the result.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/shibin-k-dev/simple-calculator.git',
    demo: 'https://www.linkedin.com/posts/muhammed-shibin-dev_html-css-javascript-activity-7387710327142060032-pEnN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER2S3wB8WnyYLgnyL81CFrxjaaISfFbXp8',
    image: 'https://images.unsplash.com/photo-1648201637025-1c77b9be3013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const experience = [
  {
    title: 'MERN Stack Internship',
    company: 'softroniics',
    period: 'Jan 2026 - Present',
    description: 'Developed and maintained full-stack web applications using MongoDB, Express, React, and Node.js. Collaborated with a team to build scalable architectures.'
  }
];

export const education = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Al  Jamia Arts & Science College( Calicut University),Poopalam,Perinthalmanna',
    period: '2022 - 2025',
    subjects: ['Data Structures', 'DBMS', 'Software Engineering', 'Networking'],
    score: 'CGPA-6.67'
  },
  {
    degree: 'Higher Secondary — Science Stream',
    institution: 'Higher Secondary Examination, Kerala',
    period: '2020 - 2022',
    subjects: ['Physics', 'Chemistry', 'Computer Science', 'Mathematics'],
    score: '789 / 1200'
  }
];

export const services = [
  {
    title: 'Frontend Development',

    
    description: 'Building responsive, performant, and beautiful user interfaces using React and modern CSS frameworks.',
    icon: FaReact
  },
  {
    title: 'Backend Development',
    description: 'Creating robust, scalable RESTful APIs and server-side logic using Node.js and Express.',
    icon: FaNodeJs
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development seamlessly integrating frontend, backend, and databases.',
    icon: FaGithub 
  },
  {
    title: 'Responsive Web Design',
    description: 'Ensuring your website looks flawless and functions perfectly on all devices and screen sizes.',
    icon: FaHtml5
  }
];
