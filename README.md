# 🤖 csGPT

<div align="center">

![csGPT Banner](https://img.shields.io/badge/csGPT-AI%20Chat%20Assistant-blue?style=for-the-badge&logo=openai&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-csgpt.farhankhan.in-brightgreen?style=for-the-badge&logo=vercel)](https://csgpt.farhankhan.in)
[![Documentation](https://img.shields.io/badge/Technical%20Report-PDF-red?style=for-the-badge&logo=adobeacrobatreader)](https://github.com/farhan-khan11/csGPT/blob/main/docs/FarhanKhan_csgpt_Technical-Report.pdf)
[![Performance Metrics](https://img.shields.io/badge/Performance%20Metrics-Report-orange?style=for-the-badge&logo=chartdotjs)](https://github.com/farhan-khan11/csGPT/blob/main/docs/csgpt_performance_metrics_report.pdf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

**A full-stack AI chat application powered by a locally hosted LLM via Ollama — delivering real-time, intelligent responses through a modern web interface.**

</div>

---

## 📌 Project Overview

**csGPT** is a full-stack AI-powered chat application that integrates a **locally hosted large language model (LLM)** using [Ollama](https://ollama.com) into a real-world web application. It provides users with a seamless, real-time chat interface where they can ask questions and receive intelligent, context-aware responses — all without relying on external paid AI APIs.

The system is designed to demonstrate how open-source LLMs can be embedded into production-grade web applications, making AI accessible, private, and cost-effective.

> 🌐 **Live at:** [csgpt.farhankhan.in](https://csgpt.farhankhan.in)

---

## ✨ Features

- 💬 **Real-time AI Chat** — Ask any question and get instant AI-generated responses
- 🧠 **Locally Hosted LLM** — Powered by Ollama, no third-party AI API costs
- ⚡ **Streaming Responses** — Responses stream token-by-token for a smooth chat experience
- 🎨 **Modern UI** — Clean, responsive interface built with React.js and Tailwind CSS
- 🔒 **Privacy First** — All model inference runs locally on the server
- 📱 **Responsive Design** — Works seamlessly across desktop and mobile devices
- 🚀 **Fast Backend** — Node.js + Express.js API for low-latency communication

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **AI / LLM** | Ollama (locally hosted model) |
| **Communication** | REST API / Streaming |
| **Deployment** | [csgpt.farhankhan.in](https://csgpt.farhankhan.in) |

---

## 📁 Project Structure

```
csGPT/
├── client/                 # React.js frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # App pages
│   │   └── App.jsx         # Root component
│   └── package.json
├── backend/                # Node.js + Express backend
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   └── server.js           # Entry point
├── docs/                   # Technical reports
│   ├── FarhanKhan_csgpt_Technical-Report.pdf
│   └── csgpt_performance_metrics_report.pdf
└── README.md
```

---

## 🚀 Installation & Usage

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [Ollama](https://ollama.com/) (running locally)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/farhan-khan11/csGPT.git
cd csGPT
```

### 2. Install Dependencies

```bash

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../client && npm install
```

### 3. Setup Ollama (Local LLM)

```bash
# Pull a model (example: llama3)
ollama pull llama3.2

# Make sure Ollama is running
ollama serve
```

### 4. Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGODB_URL=mongodb+srv://{your database url here}
SEED_PASSWORD=give anything here
SALTROUNDS=12 (for hashing password)
JWT_SECRET=(give a secret what ever you like)
```

### 5. Run the Application

```bash
# Start the backend server
cd backend
npm run server

# In a new terminal, start the frontend
cd client
npm run dev
```

### 6. Open in Browser

```
http://localhost:5173
```

---

## 📊 Performance Metrics && 📄 Technical Report

csGPT has been benchmarked and evaluated for response quality, latency, and accuracy. 

📄 **[View Full Performance Metrics Report →](https://github.com/farhan-khan11/csGPT/blob/main/docs/csgpt_performance_metrics_report.pdf)**

Key highlights:
A detailed technical report covering the system architecture, model integration, design decisions, and evaluation methodology is available:
> Benchmarked across latency, accuracy, and streaming stability.
> Full results available in the **[Performance Metrics Report →](https://github.com/farhan-khan11/csGPT/blob/main/docs/csgpt_performance_metrics_report.pdf)**
> Full results available in the **[Technical Report →](https://github.com/farhan-khan11/csGPT/blob/main/docs/FarhanKhan_csgpt_Technical-Report.pdf)**



## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Farhan Khan**

- 🌐 Website: [csgpt.farhankhan.in](https://csgpt.farhankhan.in)
- 🐙 GitHub: [@farhan-khan11](https://github.com/farhan-khan11)
- 💼 LinkedIn: [Farhan Khan](https://www.linkedin.com/in/farhan-khan-276749345/)

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a **star ⭐** — it means a lot!

---
