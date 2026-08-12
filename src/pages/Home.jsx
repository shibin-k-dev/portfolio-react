import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaLaptopCode, FaLightbulb, FaExternalLinkAlt } from 'react-icons/fa';
import { skills, projects, education } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    // Simple mailto link - requires no API keys!
    const mailtoLink = `mailto:shibinkshibi21@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitStatus('success');
    form.current.reset();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative pt-24 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 flex-grow pb-24">

          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col items-start pt-12 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-primary"></div>
              <span className="text-white font-medium text-lg">I'm <span className="text-primary">MUHAMMED SHIBIN K</span></span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase tracking-wide"
            >
              MERN Stack
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-tight mb-8 md:mb-10 uppercase tracking-wide"
            >
              Developer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/resume.pdf" download="Muhammed_Shibin_Resume.pdf" className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-80 transition-opacity shadow-lg shadow-primary/20">
                Resume <FaDownload size={14} />
              </a>
              <a href="https://github.com/shibin-k-dev" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex-shrink-0 bg-[#1F2937] border border-white/5 flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-shibin-dev" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1F2937] border border-white/5 flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:shibinkshibi21@gmail.com" className="w-12 h-12 rounded-full bg-[#1F2937] border border-white/5 flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaEnvelope size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[3px] border-primary p-2 overflow-hidden shadow-[0_0_50px_var(--color-primary)] relative z-10 bg-[#1A2232] opacity-90">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-primary/20 rounded-full pointer-events-none"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 w-full bg-primary py-4 overflow-hidden flex whitespace-nowrap z-20">
          <div className="animate-marquee shrink-0 inline-block text-white font-bold text-xl tracking-[0.2em] uppercase">
            NODE.JS • REACT • GIT • GITHUB • MONGODB • EXPRESS • HTML5 • CSS3 • JAVASCRIPT • NODE.JS • REACT • GIT • GITHUB • MONGODB • EXPRESS • HTML5 • CSS3 • JAVASCRIPT •&nbsp;
          </div>
          <div className="animate-marquee shrink-0 inline-block text-white font-bold text-xl tracking-[0.2em] uppercase">
            NODE.JS • REACT • GIT • GITHUB • MONGODB • EXPRESS • HTML5 • CSS3 • JAVASCRIPT • NODE.JS • REACT • GIT • GITHUB • MONGODB • EXPRESS • HTML5 • CSS3 • JAVASCRIPT •&nbsp;
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#111620]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3 relative">
            <div className="w-64 h-64 sm:w-[300px] sm:h-[300px] rounded-full border-[2px] border-primary p-2 overflow-hidden mx-auto">
              <img src={profileImg} alt="About Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center md:text-left">I'm <span className="text-primary">MUHAMMED SHIBIN K</span></h2>
            <p className="text-secondary text-lg mb-4 leading-relaxed">
              I am a passionate <strong className="text-white">Full Stack Developer</strong> with a strong background. I build modern and responsive web applications using the MERN stack — React.js, Node.js, Express.js and MongoDB.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              I enjoy solving real-world problems, crafting user-friendly interfaces, and continuously learning new technologies to sharpen my development craft.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-[#1A2232] border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors">
                <FaCode className="text-primary text-xl" />
                <span className="text-white font-medium">Web Application Development</span>
              </div>
              <div className="bg-[#1A2232] border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors">
                <FaLaptopCode className="text-primary text-xl" />
                <span className="text-white font-medium">Responsive Web Development</span>
              </div>
              <div className="bg-[#1A2232] border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors">
                <FaLightbulb className="text-primary text-xl" />
                <span className="text-white font-medium">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#0a0f18]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white uppercase tracking-wider">
            Tech <span className="text-primary">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...skills.frontend, ...skills.backend, ...skills.database, ...skills.tools].slice(0, 8).map((skill, i) => (
              <div key={i} className="bg-[#1A2232] border border-white/5 rounded-2xl p-6 flex items-center justify-between hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <skill.icon className={`text-3xl ${skill.color}`} />
                  <span className="text-white font-bold text-lg">{skill.name}</span>
                </div>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map(dot => (
                    <div key={dot} className={`w-3 h-3 rounded-full ${dot <= 4 ? 'bg-primary' : 'bg-gray-700'}`}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#111620]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white uppercase tracking-wider">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <div key={i} className="bg-[#1A2232] rounded-3xl overflow-hidden border border-white/5 group hover:border-primary/30 transition-colors">
                <div className="h-64 overflow-hidden bg-[#2a3441]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase bg-[#111620] text-primary px-4 py-2 rounded-full border border-primary/20">
                      {project.tech.slice(0, 2).join(' • ')}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-secondary text-lg leading-relaxed mb-8 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-4 sm:gap-6 mt-auto pt-4 border-t border-white/5">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider group/link">
                      <FaGithub size={18} className="group-hover/link:scale-110 transition-transform" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider group/link">
                      <FaExternalLinkAlt size={16} className="group-hover/link:scale-110 transition-transform" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-[#0a0f18] relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm mb-2">The journey so far — every milestone shaped the developer I am today.</p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-10 md:pl-16">
                {/* Timeline Node */}
                <div className="absolute -left-6 top-6 bg-[#1A2232] border border-[#06B6D4] text-[#06B6D4] w-12 h-12 rounded-xl flex items-center justify-center font-bold font-mono">
                  0{i + 1}
                </div>

                <div className="bg-[#1A2232] border border-white/5 rounded-3xl p-8 hover:border-[#06B6D4]/30 transition-colors relative overflow-hidden group">
                  <div className="hidden sm:block absolute right-[-20px] bottom-[-40px] text-8xl font-black text-white/5 font-mono group-hover:text-[#06B6D4]/5 transition-colors">
                    0{i + 1}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <span className="bg-[#111620] border border-white/10 text-[#06B6D4] text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-secondary mb-6">— {edu.institution}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {edu.subjects.map((sub, idx) => (
                      <span key={idx} className="bg-[#111620] border border-white/10 text-secondary text-sm px-4 py-1.5 rounded-full hover:border-[#06B6D4]/50 transition-colors">
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="text-[#06B6D4] font-bold text-xl">{edu.score}</p>
                    <p className="text-secondary text-xs uppercase tracking-widest mt-1">Score</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#111620] relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <div className="inline-block mb-8">
            <span className="text-sm font-bold tracking-widest uppercase bg-[#1A2232] text-primary px-6 py-2 rounded-full border border-primary/20">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-wide mb-2">
            Let's Work
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-tight uppercase tracking-wide mb-8">
            Together
          </h2>

          <p className="text-secondary text-lg mb-12 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. Send me a message and I'll get back to you soon.
          </p>

          <div className="bg-[#1A2232] border border-white/5 p-8 md:p-10 rounded-3xl text-left shadow-2xl">
            <form action="https://formsubmit.co/shibinkshibi21@gmail.com" method="POST" className="flex flex-col gap-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-secondary uppercase">Your Name</label>
                  <input type="text" name="name" required className="bg-[#111620] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-secondary uppercase">Email Address</label>
                  <input type="email" name="email" required className="bg-[#111620] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest text-secondary uppercase">Message</label>
                <textarea name="message" required rows="5" className="bg-[#111620] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="bg-primary hover:bg-[#d9441a] text-white font-bold tracking-widest uppercase py-4 rounded-xl transition-colors mt-2 w-full flex justify-center items-center gap-2">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16 flex-wrap">
            <a href="mailto:shibinkshibi21@gmail.com" className="flex items-center gap-3 bg-[#1A2232] border border-white/5 rounded-full px-6 py-3 hover:border-primary/30 transition-colors text-secondary hover:text-white group">
              <FaEnvelope className="text-secondary group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">shibinkshibi21@gmail.com</span>
            </a>
            <a href="https://github.com/shibin-k-dev" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#1A2232] border border-white/5 rounded-full px-6 py-3 hover:border-primary/30 transition-colors text-secondary hover:text-white group">
              <FaGithub className="text-secondary group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">github.com/shibin-k-dev</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammed-shibin-dev" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#1A2232] border border-white/5 rounded-full px-6 py-3 hover:border-primary/30 transition-colors text-secondary hover:text-white group">
              <FaLinkedin className="text-secondary group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">linkedin.com/in/muhammed-shibin-dev</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
