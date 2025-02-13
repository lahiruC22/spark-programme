# To-Do List App (Spring Boot)

## Overview
This is a simple To-Do List application built using Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend. The app allows users to manage their tasks efficiently.

## Features
- Add a task
- Mark a task as completed
- Delete a task
- View the list of tasks

## Technologies Used
- **Backend**: Spring Boot (Java, Spring MVC, Spring Data MongoDB)
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB (MongoDB Atlas Cluster)
- **Build Tool**: Maven

## Installation and Setup
### Prerequisites
- Java 17 or later
- Maven
- Any IDE (IntelliJ IDEA, Eclipse, VS Code, etc.)

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/lahiruC22/spark-programme
   cd todo-list-spring-boot
   ```
2. Configure MongoDB connection in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todoDB
   ```
3. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```
4. The application will start on `http://localhost:8080/`

## Project Structure
```
📂 src
 ├── 📂 main
 │   ├── 📂 java/com/example/todo
 │   │   ├── 📜 TodoApplication.java
 │   │   ├── 📜 controller/TodoController.java
 │   │   ├── 📜 model/Task.java
 │   │   ├── 📜 repository/TaskRepository.java
 │   │   ├── 📜 service/TaskService.java
 │   ├── 📂 resources
 │   │   ├── 📂 static (Frontend files)
 │   │   │   ├── 📜 index.html
 │   │   │   ├── 📜 styles.css
 │   │   │   ├── 📜 script.js
 │   │   ├── 📜 application.properties
```

## API Endpoints
| Method | Endpoint         | Description            |
|--------|----------------|------------------------|
| GET    | `/tasks`        | Get all tasks          |
| POST   | `/tasks`        | Add a new task         |
| PUT    | `/tasks/{id}`   | Mark a task completed  |
| DELETE | `/tasks/{id}`   | Delete a task          |

## Frontend Files (Static Resources)
- **`index.html`**: Displays the task list and form for adding tasks.
- **`styles.css`**: Contains styling for the UI.
- **`script.js`**: Handles client-side functionality like adding, deleting, and marking tasks as completed using fetch API requests.

## Future Enhancements
- User authentication and task persistence per user.
- Improve UI with frameworks like Bootstrap or React.

## License
This project is open-source and available under the MIT License.

---