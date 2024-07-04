# Online Quiz Maker

An online platform that allows users to create, share, and take quizzes. Built using the MERN (MongoDB, Express, React, Node.js) stack.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Create, edit, and delete quizzes
- Take quizzes and view results
- Leaderboard to track top scores
- Responsive design for mobile and desktop

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quiz-app-backend.git
    cd quiz-app-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quiz-app-frontend.git
    cd quiz-app-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Navigate to the frontend application in your browser.
2. Register a new account or log in with an existing account.
3. Create new quizzes, take quizzes, and view your scores.

## Technologies

- **Frontend**: React, Redux, Bootstrap
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

