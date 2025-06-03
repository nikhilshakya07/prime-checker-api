# 🔢 Prime Checker API

This is a simple Node.js + Express API that checks if a given number is a prime number.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/prime-checker-api.git
cd prime-checker-api
```
### 2. Install dependencies

```
npm install
```

### 3. Run the Server
```
node index.js
```
Server will start on:

http://localhost:3000

## 📌 API Endpoint
GET /isprime?num=<number>

Query Parameters:
- num: Number to check (required)

Examples:
```
GET /isprime?num=7
```

Response:
```json
{
  "number": 7,
  "isPrime": true
}
```
## ⚠️ Error Handling
- If num is missing or not a valid number:
```json
{
  "error": "Please provide a valid number using the \"num\" query parameter."
}
```

📂 Folder Structure
```pgsql
prime-checker-api/
├── index.js           → Main app
├── utils/
│   └── isPrime.js     → Prime checking logic
├── package.json
└── README.md
```

### ✨ Author
**Nikhil Shakya**

- 🌐 GitHub - https://github.com/nikhilshakya07
- 📧 Mail - nikhilshakya1308@gmail.com
