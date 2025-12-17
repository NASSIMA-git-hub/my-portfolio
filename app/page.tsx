"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Palette, Award, BookOpen, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Clinic App",
      description: "A comprehensive clinic management web application built with modern technologies. Features patient management, appointment scheduling, and administrative dashboard.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      image: "https://krishworkstech.com/wp-content/uploads/2024/03/Group-1000002450.jpg",
      github: "https://github.com/NASSIMA-git-hub?tab=repositories",
      live: "https://clinic-app-seven-lyart.vercel.app/",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills. Built with React and modern design principles.",
      tags: ["React", "Next.js", "Responsive Design"],
      image: "/img/Screenshot 2025-12-17 at 12-28-34 Create Next App.png",
      github: "https://github.com/NASSIMA-git-hub",
      live: "#",
      featured: true
    }
  ];

  const skills = [
    { name: "HTML & CSS", level: 80, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 70, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 50, color: "from-blue-500 to-blue-600" },
    { name: "React", level: 65, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", level: 60, color: "from-gray-700 to-gray-900" },
    { name: "Tailwind CSS", level: 75, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", level: 40, color: "from-green-500 to-green-600" },
    { name: "Git & GitHub", level: 60, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">{"<"}</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nassima</span>
              <span className="text-gray-900">{"/>"}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition font-medium">Projects</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition font-medium">Education</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-medium">
                Contact
              </a>
            </div>

            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#education" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-600 font-semibold mb-4 text-lg">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Nassima Daddou</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Web Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Beginner web developer passionate about creating modern and interactive web applications. Building the future, one line of code at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition flex items-center gap-2">
              Contact Me
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/NASSIMA-git-hub" target="_blank" rel="noopener noreferrer"
               className="bg-gray-900 text-white p-4 rounded-full hover:bg-gray-700 transition transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nassima-daddou-6b059636a/" target="_blank" rel="noopener noreferrer"
               className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nassmadaddou@gmail.com"
               className="bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">About Me</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold text-blue-600">Nassima Daddou</span>, a passionate beginner web developer dedicated to creating modern and interactive web applications. I find joy in learning new web technologies and constantly improving my coding skills through hands-on projects and continuous practice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in web development started with a curiosity about how websites work, and has evolved into a deep passion for building user-friendly interfaces and solving real-world problems through code. I believe in writing clean, maintainable code and following best practices in web development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-purple-600">My goal</span> is to become a professional full-stack developer and work on impactful projects that make a difference in people's lives. I'm excited about the endless possibilities in web development and look forward to contributing to innovative solutions that help communities thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-semibold text-gray-900">🎯 Goal-Oriented</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-semibold text-gray-900">📚 Fast Learner</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-semibold text-gray-900">💡 Problem Solver</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-semibold text-gray-900">🤝 Team Player</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Skills & Technologies</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Technologies I work with and continuously improving</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <Code className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Frontend Development</h3>
              <p className="text-gray-600">Building responsive and interactive user interfaces</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <Database className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Backend Basics</h3>
              <p className="text-gray-600">Learning server-side development with Node.js</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <Palette className="mx-auto mb-4 text-pink-600" size={40} />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Modern Design</h3>
              <p className="text-gray-600">Creating beautiful UIs with Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Some of my recent work and personal projects</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-100 group">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition font-medium">
                      <Github size={18} /> Code
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-blue-600 hover:text-purple-600 transition font-medium">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">Education & Certifications</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl">
                  <Award size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Beginner Web Development Certificate</h3>
                  <p className="text-gray-600 mb-3">Comprehensive web development fundamentals</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">HTML & CSS</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Web Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Self-Learning Journey</h3>
                  <p className="text-gray-600 mb-3">Continuous learning through online resources and practice</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      React & Next.js documentation and tutorials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Building real-world projects and applications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Contributing to open-source projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-xl">
                  <Briefcase size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Available for Opportunities</h3>
                  <p className="text-gray-600 mb-4">
                    Open to freelance projects, internships, and entry-level positions in web development
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition">
                    Get in Touch <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            I am currently available for freelance work and beginner web development projects. 
            Whether you need a website, a web application, or just want to collaborate, feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://github.com/NASSIMA-git-hub" target="_blank" rel="noopener noreferrer"
               className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nassima-daddou-6b059636a/" target="_blank" rel="noopener noreferrer"
               className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:nassmadaddou@gmail.com"
               className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
              <Mail size={20} /> Email Me
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Direct Contact</h3>
            <a href="mailto:nassmadaddou@gmail.com"
               className="inline-flex items-center gap-2 text-white text-xl font-semibold hover:text-blue-100 transition">
              <Mail size={24} /> nassmadaddou@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold mb-2">
              <span className="text-white">{"<"}</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nassima</span>
              <span className="text-white">{"/>"}</span>
            </div>
            <p className="text-gray-400">Building the web, one project at a time</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/NASSIMA-git-hub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nassima-daddou-6b059636a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nassmadaddou@gmail.com" className="text-gray-400 hover:text-white transition">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Nassima Daddou. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with React, Next.js & Tailwind CSS • Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  );
}