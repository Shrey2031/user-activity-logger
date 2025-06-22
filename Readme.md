# 📝 User Activity Logger - Node.js Backend Project

This project is a backend-only RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. It allows user authentication and logs user activities such as logins, logouts, and page views. Designed for tracking and managing user behavior with flexible filters and secure access.

---

## 🚀 Features

- ✅ User Registration & Login with JWT Authentication
- ✅ Activity Logging (login, logout, page views)
  ✅ Avatar Upload using Cloudinary
- ✅ Filtering by Action Type, Date Range, and Pagination
- ✅ MongoDB Integration with Mongoose
- ✅ Input Validation & Centralized Error Handling
- ✅ Clean Folder Structure using MVC Pattern

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Cloudinary (for avatar upload)
- bcrypt for password hashing
- dotenv for environment management
- express-async-handler & express-validator

---

## 📁 Folder Structure

user-activity-logger/
│
├── config/ # DB connection setup
├── controllers/ # Business logic (auth & activity)
├── middleware/ # JWT auth, error handler
├── models/ # Mongoose models (User, Activity)
├── routes/ # API routes
├── utils/ # Input validation helpers
├── .env.example # Environment variable template
├── server.js # Entry point
└── README.md



---

## ⚙️ Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Shrey2031/user-activity-logger.git
cd user-activity-logger

2.Install Dependencies
npm install


3. **Create Environment File**
Make a `.env` file using `.env.example` as a reference:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret



4.Run the Server

npm start


### 🧾 Updated **User Model** Example (for README explanation):

```markdown
### 👤 User Schema Includes:
```js
{
  username: String,
  email: String,
  password: String,
  avatar: {
    public_id: String,
    
  }
}


### 🗂️ Optional New Section (if you want to show how avatar is uploaded):

```markdown
## 🖼️ Avatar Upload

When a user registers, they can upload a profile picture (avatar). This image is stored in **Cloudinary**, and the link is saved in the database:

- `public_id`: For managing or deleting the image later
- `url`: Direct image link for display

You must use `form-data` in Postman and include the image file when registering or updating profile.



📦 API Endpoints
🔐 Auth Routes
| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| POST   | `/api/v1/users/register` | Register user               |
| POST   | `/api/v1/users/login`    | Login and receive JWT token |
| POST   | `/api/v1/users/change-password`    | change password|
| PATCH   | `/api/v1/users/update-account`    | update account |
| PATCH  | `/api/v1/users/avatar`    | update avatar |


| Method | Endpoint            | Description                          |
| ------ | ------------------- | ------------------------------------ |
| POST   | `/api/v1/activity/log` | Log activity (login, logout, view)   |
| GET    | `/api/v1/activity/`     | Get logs with filters and pagination |


🧾 Example Activity Payload
POST /api/activity/log
{
  "action": "view",
  "page": "dashboard"
}


🔍 Query Filters for /api/activity
| Parameter   | Example      | Description                   |
| ----------- | ------------ | ----------------------------- |
| `action`    | `view`       | Filter by action type         |
| `startDate` | `2025-06-01` | Filter by start date          |
| `endDate`   | `2025-06-20` | Filter by end date            |
| `page`      | `1`          | Pagination - page number      |
| `limit`     | `10`         | Pagination - results per page |

Example:
/api/activity?action=view&startDate=2025-06-01&limit=5&page=1

📌 Author
Shreya Kumari
GitHub: https://github.com/account





