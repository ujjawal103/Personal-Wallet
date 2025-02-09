<<<<<<< HEAD


# 💰 Expense Tracker - Node.js & Express  

This project is a **simple Expense Tracker** built with **Node.js, Express.js, and EJS**. It allows users to **track their income and expenses** dynamically, updating the total available balance. It follows a **RESTful API approach** with concepts similar to **threads**, handling data in an **in-memory array instead of a database**.  

## 🚀 Features  
- ✅ **Track Income & Expenses**  
- ✅ **Real-time Balance Updates**  
- ✅ **CRUD Operations (Create, Read, Update, Delete)**  
- ✅ **Express.js & EJS for Dynamic Views**  
- ✅ **Uses method-override for PATCH & DELETE requests**  
- ✅ **No Database - Stores Data in an Array**  

## 🛠️ Tech Stack  
- **Node.js**  
- **Express.js**  
- **EJS (Embedded JavaScript Templates)**  
- **UUID for Unique IDs**  
- **Method-Override for HTTP Methods**  

## 📌 API Endpoints  

| Method  | Endpoint                         | Description                  |
|---------|---------------------------------|------------------------------|
| GET     | `/`                             | Initial page (resets data)  |
| POST    | `/`                             | Set the total amount        |
| GET     | `/expenses`                     | View income & expenses      |
| GET     | `/expenses/expense`             | Render expense form         |
| POST    | `/expenses/expense`             | Add a new expense           |
| GET     | `/expenses/income`              | Render income form          |
| POST    | `/expenses/income`              | Add new income              |
| PATCH   | `/expenses/expense/:id/edit`    | Render edit form for expense |
| POST    | `/expenses/expense/:id/edit`    | Update an expense           |
| PATCH   | `/expenses/income/:id/edit`     | Render edit form for income |
| POST    | `/expenses/income/:id/edit`     | Update an income entry      |
| DELETE  | `/expenses/:id/delete`          | Delete an income/expense    |

## 🔧 Setup & Usage  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Run the server**  
```bash
node index.js
```
Your app will be running on **http://localhost:8080** 🚀 
demo :- (https://personal-wallet-l1tb.onrender.com/expenses) 

## 📌 Future Improvements  
- 🔹 Integrate a database (MongoDB, PostgreSQL, or MySQL)  
- 🔹 Add user authentication & login system  
- 🔹 Implement category-based tracking for expenses  
- 🔹 Add data visualization (charts for income vs. expenses)  

## 👨‍💻 Author  
**Ujjawal Kumar Jaiswal**  

---

