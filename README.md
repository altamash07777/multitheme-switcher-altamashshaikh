# 🎨 Multi-Theme Switcher (React + TypeScript)

This is a responsive multi-theme switcher web application built using **React** and **TypeScript**. It allows users to toggle between **three visually distinct themes**, each with its own layout, fonts, spacing, and structure. The app supports routing, API data loading, smooth animations, and persistent theming using `localStorage`.

---

## 📌 Features

- 🎨 **3 Unique Themes**  
  Each theme has its own layout (header/sidebar/content), font styles, spacing, and card design.

- 🌐 **Routing**  
  Three pages: Home, About, and Contact – each with structured content (title, text, button, and cards).

- 🧠 **Context API**  
  Used to manage and switch the current theme globally.

- 💾 **Theme Persistence**  
  User’s selected theme is saved in `localStorage` and applied on reload.

- 📦 **API Integration**  
  Product data is fetched from [Fake Store API](https://fakestoreapi.com/) and displayed on all pages.

- 🎯 **Responsive Design + Animations**  
  Works on desktop, tablet, and mobile with subtle hover/fade animations.

- 🧹 **Clean Folder Structure**  
  Organized code with separation of concerns and comments where needed.

---

## 🛠 Tech Stack

- React + TypeScript  
- React Router  
- Context API  
- Styled Components  
- CSS Modules  
- Google Fonts  
- Fetch API  
- LocalStorage

---

## 📁 Folder Structure

multitheme-switcher/
├── public/
├── src/
│ ├── components/ // Reusable components like Header
│ ├── context/ // ThemeContext.tsx
│ ├── pages/ // Home, About, Contact (with module CSS)
│ ├── styles/ // theme1.module.css, theme2.module.css, theme3.module.css
│ ├── App.tsx
│ └── index.tsx
├── package.json
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/altamash07777/multitheme-switcher-altamashshaikh
cd multitheme-switcher

# Install dependencies
npm install
# or
yarn install

# Start the server
npm start
# or
yarn start
App will run at http://localhost:3000

🔗 Live Demo 
👉 Live Link - https://altamashshaikh-multitheme-switcher.netlify.app/

📋 Submission Info
Name: Altamash Shaikh

Role: React Developer /Full stack Developer

Repo Name: altamashshaikh-multitheme-switcher

Format: GitHub public repository with proper structure, README, and optional live link.

📞 Contact
If you need any clarification, feel free to reach out via email.
