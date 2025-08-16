# 𝔠 𝔯 𝔬 𝔫 𝔲́ 𝔰

Cronus is a collaborative real-time code editor built with **React**, **Vite**, **Socket.IO**, and **Express**.  
It allows multiple users to join a room, edit code together, see what others type, and switch between programming languages seamlessly.

---

## 🚀 Features

- Real-time Collaboration  
  Multiple users can join the same room and see live code updates.
  
- Room System  
  Users can create or join rooms using a unique room ID.
  
- User Tracking  
  Displays a list of users currently in the room.  
  Also indicates when someone is typing.
  
- Multi-language Support  
  Supported languages include:
  - JavaScript  
  - Python  
  - Java  
  - C++
  
- Code Synchronization  
  Code changes are broadcast in real-time to every participant in the room.
  
- Clipboard Support  
  Users can copy the room ID easily for quick sharing.
  
- Leave Room Handling  
  Ensures users are removed from room state when leaving or disconnecting.

---

## 🛠️ Tech Stack

- Frontend: React + Vite + Monaco Editor  
- Backend: Express + Socket.IO  
- Styling: CSS, Bootstrap classes  
- Communication: WebSocket via Socket.IO  

---

## 📂 Project Structure
```
cronus/
│
├── frontend/                 # React (Vite) app
│   ├── src/
│   │   ├── App.jsx           # Main app logic
│   │   ├── components/
│   │   │   ├── home.jsx      # Home page for room join/creation
│   │   │   ├── editorPage.jsx# Collaborative editor page
│   │   ├── assets/           # Images (logos, etc.)
│   │   ├── styles/           # CSS files
│   │   └── main.jsx
│   └── vite.config.js
│
├── backend/                  # Node.js server
│   ├── server.js             # Express + Socket.IO server
│
└── README                    # Documentation
```
---

## ⚙️ QUICK START (LOCAL)
- Clone the repo
```
git clone https://github.com/tars-06/Cronus.git
```
- From the project root:
```
cd cronus
```
- Build the project:
```
npm run build
```
- Start the dev server:
```
npm run dev
```
- Head to https://localhost:5000

<sub>Note: It's already deployed on https://cronus-se1h.onrender.com, you can directly head to this link.</sub>

## 🎮 Usage

1. Start the backend and frontend servers.
2. Open the frontend in a browser.
3. Enter a Room ID and Username to join/create a room.
4. Start coding together in real-time!
5. Use the "Copy Room ID" feature to share with others.
6. Change programming languages dynamically from the dropdown.

---

## 🧩 Key Components

- Home.jsx — Room joining screen with room ID & username input.
- EditorPage.jsx — Monaco editor interface, user list, typing indicator, language selector.
- App.jsx — Manages state, room life-cycle, socket listeners & emits.
- Backend (server.js) — Manages rooms, users, and synchronization of code, typing, and language changes.

---

## 📌 Future Enhancements

- Add code execution support.
- Syntax validation & linting.
- Authentication (Google/GitHub login).
- Persistent rooms with database integration.
- Multiple file/project support.

---

## 👨‍💻 Author

- Author: Aaditya Saraf (srfaadi@gmail.com)  
- GitHub: @tars-06  
- License: MIT