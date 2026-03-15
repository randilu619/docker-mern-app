# Dockerized MERN Stack Application 🐳

This project is a full-stack MERN (MongoDB/JSON, Express, React, Node) application fully containerized using Docker and orchestrated with Docker Compose.

## 🚀 Getting Started
To run this project locally, you only need Docker installed.

1. Clone the repo: `git clone https://github.com/randilu619/docker-mern-app.git`
2. Run the containers: `docker-compose up --build`
3. Access the Frontend: `http://localhost:5175`
4. Access the Backend: `http://localhost:5000/api/users`

## 🛠 Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **Database:** Lowdb (JSON based)
- **Containerization:** Docker, Docker Compose

## 💡 Key Features
- **Volume Persistence:** Code changes on the host machine sync instantly with the container.
- **Microservices Networking:** Seamless communication between the client and API containers.
