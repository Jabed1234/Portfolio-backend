# 💼 Portfolio Backend – Jabed Miah

This repository contains the **backend server** for my personal portfolio website. It powers the contact form functionality, managing incoming data securely and efficiently.

- 🔗 **Frontend GitHub Repo**: [Portfolio-frontend](https://github.com/Jabed1234/Portfolio-frontend/tree/main)  
- 🌐 **Live Website**: [https://jabed1234.github.io/Portfolio-frontend/](https://jabed1234.github.io/Portfolio-frontend/)

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

## 🧰 Technologies & Tools Used

| Type               | Stack / Tool                                |
|--------------------|---------------------------------------------|
| **Language**       | JavaScript (Node.js)                        |
| **Framework**      | Express.js                                  |
| **Database**       | MongoDB Atlas                               |
| **ODM**            | Mongoose                                    |
| **Hosting (Backend)** | Render                                  |
| **Hosting (Frontend)** | GitHub Pages                          |
| **Deployment**     | Git, GitHub, Render CI                      |
| **Security**       | dotenv (.env config)                        |
| **Version Control**| Git, GitHub                                 |
| **Frontend API**   | JSON API consumed by client                 |

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
  "phoneNumber": "3472697248",
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

💾 Frontend Code: GitHub Frontend Repo

🔁 Workflow
User fills out and submits the contact form

Frontend sends data via POST /submit-form

Backend parses and validates it

Data is stored in MongoDB

Success response is returned to the frontend

🛠 How to Run Locally
# Clone this repository
git clone https://github.com/Jabed1234/Portfolio-backend.git
cd Portfolio-backend

# Install dependencies
npm install

# Create a .env file with your MongoDB URI
echo "MONGO_URI=your_mongodb_atlas_connection_string" > .env

# Start the server
node server.js
🔐 Environment Variables
Variable	Description
MONGO_URI	MongoDB Atlas connection string
PORT	Optional (default is 3000)

📈 Future Improvements
⛑ Add backend-level input validation (e.g. Joi)

📬 Integrate Nodemailer to send emails from submissions

🔐 Add rate limiting and reCAPTCHA to prevent spam

🛡 Build admin dashboard to view/manage form entries

📄 License
All rights reserved © Jabed Miah
This repository is proprietary. You may not copy, modify, or distribute without explicit permission.

📬 Contact Me
📧 Email: jmiah5@fordham.edu

🌐 Portfolio: https://jabed1234.github.io/Portfolio-frontend/
