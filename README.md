# Task Manager Web Application

A simple and efficient Task Manager web application built using React.  
This application allows users to manage their daily tasks by adding, updating, deleting, and tracking their progress.

---

## Features

- Add new tasks
- Edit / update existing tasks
- Delete tasks
- Mark tasks as completed
- Search tasks
- Filter tasks (All / Completed / Pending)
- Persistent storage using LocalStorage
- Clean and responsive user interface

---

## Tech Stack

Frontend:
- React.js
- JavaScript
- HTML
- CSS

Storage:
- Browser LocalStorage

---

## Project Structure

task-manager

public  
│   index.html  

src  
│   App.js  
│   App.css  
│   index.js  

components  
│   TaskForm.js  
│   TaskList.js  
│   TaskItem.js  
│   Filter.js  

---

## Installation and Setup

1. Clone the repository

git clone 

2. Navigate to the project directory

cd task-manager

3. Install dependencies

npm install

4. Start the development server

npm start

The application will run on:

http://localhost:3000

---

## How the Application Works

1. Users can enter a task in the input field and click **Add Task**.
2. The task will be displayed in the task list.
3. Users can:
   - Edit the task
   - Delete the task
   - Mark it as completed
4. Tasks are stored in **LocalStorage**, so they remain even after refreshing the page.
5. Users can search tasks or filter them by their status.

---

## Future Improvements

- Task deadline feature
- Task priority levels (High / Medium / Low)
- Dark mode
- Backend integration with database
- User authentication

---

## Author

Developed as a project to practice frontend development and task management system implementation using React.
