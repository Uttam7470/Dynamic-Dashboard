
# Dynamic Dashboard 

This is a React-based Dynamic Dashboard application where users can add, edit, and delete widgets in different categories. The application allows users to manage and customize their dashboard layout.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features
- View and manage a list of dashboard categories.
- Add new widgets to categories.
- Edit and delete existing widgets.
- View individual blog posts with details.
- Create new categories for widgets.

## Demo
A live demo of the application can be accessed at [https://dynamic-dashboard-sage.vercel.app/].

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- A code editor like Visual Studio Code.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Uttam7470/Dynamic-Dashboard.git
   ```
2. Navigate to the project directory:
   ```sh
   cd dynamic-dashboard
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Application
To start the application locally:
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.

## Folder Structure
```
dynamic-dashboard/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── CategoryList.js
│   │   ├── WidgetItem.js
│   │   └── AddWidgetForm.js
│   ├── context/
│   │   └── WidgetContext.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Available Scripts
In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **React Context** API: For managing global state across the application..
- **JavaScript (ES6+)**: The programming language used for the application's logic.
- **CSS**: Styling the application.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Open a pull request.
