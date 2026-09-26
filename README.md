<div align="center">
  <h3 align="center">Shreyansh Jain - Software QA Engineer & SDET Portfolio</h3>

  <p align="center">
    A high-fidelity, production-grade portfolio application showcasing professional QA experience, automation competencies, and engineering standards.
    <br />
    <a href="https://github.com/ShreyanshJain105/Portfolioo"><strong>Explore the repository »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ShreyanshJain105/Portfolioo/issues">Report Bug</a>
    ·
    <a href="https://github.com/ShreyanshJain105/Portfolioo/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## 📝 About The Project

This repository contains the source code for a modern, responsive, and performance-optimized personal portfolio tailored specifically for a Software Quality Assurance Engineer and SDET. 

The application is built to communicate testing expertise across multiple domains including Web, Mobile, REST APIs, AI Voice Agents, Chatbots, CRM Platforms, E-commerce, and Recruitment Portals. It utilizes a robust, premium tech stack to deliver a stunning user experience with advanced 3D interactions and flawless dark/light mode integration.

### ✨ Features
* **Multi-Page Architecture:** Dedicated routes for Expertise, Domains, Experience, Case Studies, Services, and Contact.
* **Premium UI/UX:** Advanced 3D hover effects, scroll-reveals, and gradient meshes powered by Framer Motion.
* **Theme System:** Fully integrated CSS variable-based Dark and Light mode toggle with system preference detection and local storage persistence.
* **QA-Centric Design:** Custom components like Defect Lifecycles, QA Dashboards, and Interactive Bug Showcases.
* **Modern Tooling:** Built on React 19, Vite, Tailwind CSS v4, and React Router v7.

### 🛠 Built With

* **Framework:** React.js 19 + Vite
* **Routing:** React Router v7
* **Styling:** Tailwind CSS v4 (with custom CSS variables for theming)
* **Animation:** Framer Motion
* **Icons:** Lucide React & React Icons
* **Code Quality:** ESLint

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Local Development

1. Clone the repo
   ```sh
   git clone https://github.com/ShreyanshJain105/Portfolioo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
4. Access the application at `http://localhost:5173`

### Docker Setup

To run the application in an isolated container environment using the production multi-stage build:

1. Build the Docker image
   ```sh
   docker build -t portfolio-app .
   ```
2. Run the container
   ```sh
   docker run -d -p 8080:80 --name portfolio-container portfolio-app
   ```
3. Access the application at `http://localhost:8080`

---

## 🏗 Project Structure

```text
├── public/              # Static assets (images, resumes)
├── src/                 # Source code
│   ├── components/      # Reusable React components (Navbar, Footer, UI elements)
│   ├── pages/           # Route-level components (Home, Case Studies, etc.)
│   ├── hooks/           # Custom React hooks (useTheme, useScrollSpy)
│   ├── index.css        # Global styles & theme variables
│   └── main.jsx         # Application entry point
├── Dockerfile           # Multi-stage Docker build config
├── Jenkinsfile          # Jenkins CI pipeline
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

---

## 📫 Contact

Shreyansh Jain - shreyanshjainwork12@gmail.com

Project Link: [https://github.com/ShreyanshJain105/Portfolioo](https://github.com/ShreyanshJain105/Portfolioo)

<p align="center">
  <i>Developed with a focus on code quality, scalability, and performance.</i>
</p>
