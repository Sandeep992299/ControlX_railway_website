# ControlX_railway_website

## Build Guide

This project uses a **client** folder for the React frontend and an **api** folder for the Node.js/Express backend.

---

### Prerequisites

- Node.js (v16+ recommended)
- npm
- PostgreSQL

---

### 1. Clone the Repository

```sh
git clone https://github.com/Sandeep992299/ControlX_railway_website.git
cd ControlX_railway_website
```

---

### 2. Install Dependencies

#### Frontend (client)

```sh
cd client
npm install
```

#### Backend (api)

```sh
cd ../api
npm install
```

---

### 3. Configure Environment Variables

In the `api` folder, create a `.env` file for your PostgreSQL credentials:

```
PGUSER=your_db_user
PGHOST=localhost
PGDATABASE=your_db_name
PGPASSWORD=your_db_password
PGPORT=5432
```

---

### 4. Run the Application

#### Start Backend

```sh
cd api
npm start
```

#### Start Frontend

Open a new terminal:

```sh
cd client
npm start
```

---

### 5. Access the App

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000) (or your configured port)

---

**Note:**  
Make sure PostgreSQL is running and your database is set up before starting the