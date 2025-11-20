import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">BALAJI<span className="accent"> PALANI</span></div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div>
            <p className="tagline">Full Stack MERN Developer</p>
            <h1>Hi, I&apos;m Balaji</h1>
            <p className="hero-text">
              I build responsive web applications using React, Node.js,
              Express.js and MongoDB. I&apos;m looking for opportunities to work
              as a Full Stack Developer and help businesses go online.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn outline">Hire Me</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a MERN Stack Developer from Ranipet, Tamil Nadu with a B.E in
            Computer Science Engineering (2013, Ranipet Engineering College).
            I&apos;ve completed MERN Full Stack Developer training from NXT Wave
            and I&apos;m passionate about creating clean, simple and scalable
            web applications.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js, Express.js</p>
            </div>
            <div className="skill-card">
              <h3>Database</h3>
              <p>MongoDB</p>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, VS Code, Postman</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                Personal portfolio built with React to showcase my skills,
                projects and contact details.
              </p>
              <p className="tech-stack">React · CSS</p>
            </div>
            <div className="project-card">
              <h3>Task Manager (Coming Soon)</h3>
              <p>
                A full-stack task manager with JWT authentication and CRUD
                operations using MERN stack.
              </p>
              <p className="tech-stack">MongoDB · Express · React · Node.js</p>
            </div>
            <div className="project-card">
              <h3>E-commerce App (Coming Soon)</h3>
              <p>
                Simple e-commerce application with product listing, cart and
                order management.
              </p>
              <p className="tech-stack">MERN Stack</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            I&apos;m available for full-time roles (office or remote) and
            freelance projects.
          </p>
          <ul className="contact-list">
            <li><strong>Email:</strong> balaji.p067@gmail.com</li>
            <li><strong>Phone:</strong> 8667051229</li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/balaji-palani-52156a179" target="_blank" rel="noreferrer">
                balaji-palani-52156a179
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Balajip067" target="_blank" rel="noreferrer">
                Balajip067
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Balaji · Full Stack MERN Developer
      </footer>
    </div>
  );
}

export default App;
