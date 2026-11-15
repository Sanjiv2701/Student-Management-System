# Student Management System

A web-based Student Management System developed using Java and Spring Boot. The application helps manage student records efficiently through a simple and user-friendly interface.

## Features

- **Add Students:** Register new students with their details.
- **View Students:** Display all registered students.
- **Update Students:** Edit existing student information.
- **Delete Students:** Remove student records.
- **Search Students:** Find student records easily.
- **Database Integration:** Store and manage student information in a database.

## Technologies Used

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven

### Frontend
- HTML
- CSS
- JavaScript

### Database
- MySQL

### Tools
- Visual Studio Code
- Postman
- Git and GitHub

## Project Structure

```text
Student-Management-System/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/studentmanagement/
│   │   │       ├── StudentmanagementApplication.java
│   │   │       ├── Student.java
│   │   │       ├── StudentController.java
│   │   │       └── StudentRepository.java
│   │   │
│   │   └── resources/
│   │       └── application.properties
│   │
│   └── test/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── pom.xml
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project

Open the project folder in Visual Studio Code.

### 3. Configure the Database

Make sure your database server is running.

Update the database URL, username, and password in:

`src/main/resources/application.properties`

### 4. Run the Backend

Open the terminal in the project folder and execute:

```bash
mvn spring-boot:run
```

The Spring Boot application will start at:

```text
http://localhost:8080
```

### 5. Run the Frontend

Open `frontend/index.html` in your browser or use the Live Server extension in VS Code.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/{id}` | Update student details |
| DELETE | `/api/students/{id}` | Delete a student |

## How It Works

1. Users open the Student Management System.
2. They can add student details through the frontend.
3. The frontend communicates with the Spring Boot backend.
4. The backend processes requests using REST APIs.
5. Student records are stored and managed in the database.
6. Users can view, update, search, and delete student records.

## Future Improvements

- Student login and authentication.
- Attendance management.
- Student performance tracking.
- Admin dashboard.
- Export student records.

## Author

**Sanjiv Kumar**  
Computer Science and Engineering  
Chandigarh University

---

**Student Management System – Making Student Record Management Easier.**