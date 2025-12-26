Equipment Management System

A full-stack Equipment Management System built using React (Vite) for the frontend and Node.js + Express for the backend.
This application allows users to add, view, update, and delete equipment records using a clean and simple interface.

🚀 Features

Add new equipment
View all equipment
Update equipment details
Delete equipment
RESTful API architecture
File-based data storage (JSON)
Fully responsive UI
Clean project structure

🛠 Tech Stack
Frontend
React.js (Vite)
JavaScript
Tailwind CSS

Backend
Node.js
Express.js
JSON file as database

📁 Project Structure
equipment-tracker/
│
├── backend/
│   ├── controllers/
│   │   └── equipmentController.js
│   ├── routes/
│   │   └── equipmentRoutes.js
│   ├── data/
│   │   └── equipment.json
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/equipment-tracker.git
cd equipment-tracker

2️⃣ Install Backend Dependencies
cd backend
npm install

3️⃣ Start Backend Server
npm run dev


Backend will run at:

http://localhost:5000

4️⃣ Install Frontend Dependencies
cd ../frontend
npm install

5️⃣ Start Frontend
npm run dev


Frontend will run at:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/equipment	Fetch all equipment
POST	/api/equipment	Add new equipment
PUT	/api/equipment/:id	Update equipment
DELETE	/api/equipment/:id	Delete equipment

🧠 How It Works
User interacts with frontend UI
React sends HTTP request to backend
Express handles request and updates JSON file
Response sent back to frontend
UI updates automatically

📦 Sample Equipment Object
{
  "id": "12345",
  "name": "Hydraulic Pump",
  "type": "Machine",
  "status": "Active",
  "lastCleaned": "2024-01-10"
}

🧪 Testing
I can test API using:
Browser
Postman
Curl commands

Example:

curl http://localhost:5000/api/equipment
