<div align="center">
  <h3 align="center">Shreyansh Jain - Engineering Portfolio</h3>

  <p align="center">
    A high-fidelity, production-grade portfolio application showcasing professional experience, technical competencies, and engineering standards.
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
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#cicd-pipelines">CI/CD Pipelines</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## 📝 About The Project

This repository contains the source code for a modern, responsive, and performance-optimized personal portfolio. Built with scalable architecture in mind, it adheres to enterprise-level coding standards and utilizes a robust tech stack to deliver a premium user experience.

Key architectural highlights:
* **Component-Driven UI:** Modular React components for maximum reusability and maintainability.
* **Fluid Animations:** Complex, hardware-accelerated animations using Framer Motion.
* **Containerization:** Fully Dockerized for environment parity and seamless deployments.
* **Automated CI/CD:** Integrated pipelines (Jenkins & GitHub Actions) for automated testing, building, and deployment.

### 🛠 Built With

* **Framework:** React.js + Vite
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **Containerization:** Docker & Docker Compose
* **CI/CD:** Jenkins, GitHub Actions
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
* Docker (for containerized setup)

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

## ⚙️ CI/CD Pipelines

This project is configured with dual pipeline support for enterprise flexibility:

### 1. Jenkins Pipeline (`Jenkinsfile`)
Automates the build process:
* **Code Checkout:** Pulls the latest code.
* **Linting & Testing:** Enforces code quality via ESLint.
* **Docker Build:** Compiles the React app via multi-stage Dockerfile.
* **Image Push:** Securely publishes the artifact to Docker Hub.

### 2. GitHub Actions (`.github/workflows/deploy.yml`)
Provides a seamless serverless workflow:
* **Linting & Build:** Validates code integrity on every push to `main`.
* **Container Registry:** Builds and pushes Docker images automatically.
* **Vercel Deployment:** Automatically handles production hosting via Vercel integration.

---

## 🏗 Project Structure

```text
├── .github/workflows/   # GitHub Actions CI/CD configs
├── public/              # Static assets (images, icons)
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   ├── data/            # Static data structures (JSON/JS)
│   ├── hooks/           # Custom React hooks
│   └── index.css        # Global styles & design tokens
├── Dockerfile           # Multi-stage Docker build config
├── Jenkinsfile          # Jenkins CI pipeline
├── docker-compose.yml   # Local orchestration
└── vite.config.js       # Vite configuration
```

---

## 📫 Contact

Shreyansh Jain - shreyanshjainwork12@gmail.com

Project Link: [https://github.com/ShreyanshJain105/Portfolioo](https://github.com/ShreyanshJain105/Portfolioo)

<p align="center">
  <i>Developed with focus on code quality, scalability, and performance.</i>
</p>
