
---

## 📁 `backend/README.md`

```md
# SniperThink Backend

This is the **backend API** for the SniperThink SaaS landing page built with **Node.js** and **Express**. It serves dynamic data to the frontend and accepts contact form submissions.

---

## 🌐 API Endpoints

| Method | Endpoint          | Description                            |
|--------|-------------------|----------------------------------------|
| GET    | `/api/slides`     | Returns hero carousel data             |
| GET    | `/api/features`   | Returns feature list                   |
| GET    | `/api/pricing`    | Returns pricing tiers                  |
| POST   | `/api/contact`    | Accepts contact form data              |

---

## 📦 Dummy Data

Data is served from static JSON or in-memory objects:

- `/data/slides.json`
- `/data/features.json`
- `/data/pricing.json`

---

## 🧪 Contact Data (MongoDB)

Submitted contact form data is stored in **MongoDB Atlas**.

### Contact Schema:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Excited to try SniperThink!",
  "createdAt": "2025-07-09T18:00:00Z"
}
```
Known Issues:
- MongoDB access must have IP whitelisted in Atlas

- Live backend URL must be used in frontend for API calls
