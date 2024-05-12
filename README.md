# CollabText

-------------------------------
Collab Text is a collaborative text editing tool similar to Google Docs that allows multiple users to edit documents simultaneously. This project leverages React, Node.js, Socket.IO, and MongoDB to provide real-time editing capabilities.

# Features
Real-time text editing and collaboration.

Automatic new document creation with unique URLs.

Document changes are saved every 2 seconds.

Persistent storage of documents in MongoDB.

-------------------------------

# Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js (v14.0 or higher recommended)

MongoDB (Local or remote instance)

Yarn or npm installed

-------------------------------


# Installation

Clone the repository to your local machine:
#######

bash Copy code

git clone https://your-repository-url.git
cd collab-text


Backend Setup

Navigate to the backend directory and install the dependencies:
#######

bash Copy code

cd backend
npm install

Start the backend server:
#######

bash Copy code

npm start

Frontend Setup

Navigate to the frontend directory from the root of the project and install the dependencies:
#######

bash Copy code

cd frontend
npm install

Start the frontend application:
#######

bash Copy code

npm start

This will run the application on http://localhost:3000.

-------------------------------


# Usage

Once the application is running, navigate to http://localhost:3000 in your web browser. A new document will be created with a unique URL to share with others for real-time collaboration.

-------------------------------


# How It Works

Frontend: The frontend is built with React and uses Quill.js as the rich text editor. Changes made to the document are sent to the backend via Socket.IO in real time.
Backend: The backend is built with Node.js and Express, handling WebSocket connections from the front end through Socket.IO. It also interacts with MongoDB to store and retrieve documents.
