# 💼 Portfolio Backend

This backend is a critical component of my **full-stack portfolio project**, which integrates a dynamic frontend and a robust server-side architecture. The frontend, built with HTML, CSS, and JavaScript, collects user input through a contact form and sends it via API requests to this backend server. The backend, developed using Node.js and Express.js, checks that the required fields are present before storing the submission in a cloud-hosted MongoDB Atlas database through Mongoose schemas. Deployed on Render, this backend enables real-time, production-ready communication between the user interface and persistent storage, showcasing my ability to design and deploy complete end-to-end web solutions.

- 🔗 **Frontend GitHub Repo**: [Portfolio-frontend](https://github.com/Jabed1234/Portfolio-frontend)
- 🌐 **Live Website**: https://jabed1234.github.io/Portfolio-frontend/

---

## 🧠 Project Purpose

This backend handles:

✅ Receiving form submissions from my portfolio’s contact page  
✅ Parsing and validating the form data  
✅ Saving messages securely to **MongoDB Atlas**  
✅ Returning success confirmation to the frontend  
✅ Logging each submission in real time

---

## 👨‍💻 What I Did

I **built and deployed this backend from scratch** as part of a full-stack personal website project.  
Here’s what I implemented:

- ✅ Designed an Express-based API to receive POST requests
- ✅ Integrated Mongoose to define and validate data models
- ✅ Configured secure environment variables using `dotenv`
- ✅ Connected to **MongoDB Atlas** and verified successful insertions
- ✅ Deployed backend using **Render**
- ✅ Connected it with the frontend hosted on **GitHub Pages**
- ✅ Tested full-stack integration to ensure everything works flawlessly

---
# Architecture
```
Frontend (GitHub Pages)
        |
        v
API Request (Fetch)
        |
        v
Backend Server (Express.js on Render)
        |
        v
MongoDB Atlas (Cloud Database)
```
---

## 🧰 Technologies & Tools Used

| Type               | Stack / Tool                                |
|--------------------|---------------------------------------------|
| **Language**       | JavaScript (Node.js)                        |
| **Framework**      | Express.js, CORS                                  |
| **Database**       | MongoDB Atlas                               |
| **ODM**            | Mongoose                                    |
| **Hosting (Backend)** | Render                                  |
| **Hosting (Frontend)** | GitHub Pages                          |
| **Deployment**     | Git, GitHub, Render CI                      |
| **Security**       | dotenv (.env config)                        |
| **Version Control**| Git, GitHub                                 |
| **Frontend API**   | JSON API consumed by client                 |

---
# 🚀 Features
✔️ REST API Endpoint
Handles POST /submit-form requests from the frontend.

✔️ Input Validation
Ensures required fields (name, email, message) are provided.

✔️ Database Integration
Saves contact data into MongoDB Atlas using Mongoose schemas.

✔️ CORS Support
Configured to allow cross-origin requests from the frontend.

✔️ Environment Variables
Keeps sensitive data like DB URIs secure.

✔️ Error Handling
Robust error reporting with HTTP status codes and JSON responses.

✔️ Live Deployment
Hosted on Render for public access.



---
## 📡 Render Deployment Example

![image](https://github.com/user-attachments/assets/bb958d4b-c6af-4463-bf10-3d7daeb154c2)

---

## 🗃️ MongoDB Atlas Example

![image](https://github.com/user-attachments/assets/845a1d35-ffa7-41b6-8fe1-7a17d379d6f3)


---

## 📡 API Endpoint

### `POST /submit-form`

This endpoint is triggered when a user submits the contact form on my portfolio.

#### 📥 Request Body:

```json
{
  "name": "Jabed Miah",
  "email": "jmiah5@fordham.edu",
  "message": "Hi there, this is a test message!",
  "phoneNumber": "5555550100",
  "subject": "First Contact"
}
```
📤 Response:
json
```json
{
  "status": "success",
  "message": "Form data saved successfully!"
}
```
🔗 Frontend Integration
🌍 Live Site: https://jabed1234.github.io/Portfolio-frontend/

# 💾 Frontend Code: GitHub Frontend Repo`

🔁 Workflow
User fills out and submits the contact form

Frontend sends data via POST /submit-form

Backend parses and validates it

Data is stored in MongoDB

Success response is returned to the frontend

---
# 🛠 How to Run Locally
## Clone this repository
git clone https://github.com/Jabed1234/Portfolio-backend.git
cd Portfolio-backend

## Install dependencies
npm install

## Create a .env file with your MongoDB URI
echo "MONGO_URI=your_mongodb_atlas_connection_string" > .env

## 🚀 Running the Server

```bash
==> Running 'node server.js'
[dotenv@17.0.0] injecting env (0) from .env – 🔐 encrypt with dotenvx: https://dotenvx.com
[dotenv@17.0.0] injecting env (0) from .env – 🔐 encrypt with dotenvx: https://dotenvx.com
[dotenv@17.0.0] injecting env (0) from .env – 🔐 encrypt with dotenvx: https://dotenvx.com
connected to the DB successfully
Server running on 10000
```
-------------------------------------------------------------------------------------------------------------------------------------------------
📈 Future Improvements:
1. ⛑️ Add backend-level input validation (e.g., using Joi)

2. 📬 Integrate Nodemailer to send emails from form submissions

3. 🔐 Implement rate limiting & reCAPTCHA to prevent spam

4. 🛡️ Build an admin dashboard to view/manage form entries

-------------------------------------------------------------------------------------------------------------------------------------------------

📧 Email: jmiah5@fordham.edu

🌐 Portfolio: https://jabed1234.github.io/Portfolio-frontend/

-------------------------------------------------------------------------------------------------------------------------------------------------

📄 License
MIT License © 2025 Jabed Miah

text Permission is hereby granted, free of charge, to any person obtaining the code to modify and run locally. The right to distribution is reserved and can only be given if requested.
