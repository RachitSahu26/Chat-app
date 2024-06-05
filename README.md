
# Chat App

## Description
The Chat App is a real-time messaging application that allows users to communicate with each other after completing a simple user authentication process. New users need to sign up first, and then log in. After logging in, all existing users are displayed, and users can send messages to each other.

## Demo

[![Watch the Demo Video](https://github.com/RachitSahu26/Chat-app/blob/main/chat-%20demo-image.png)](https://www.youtube.com/watch?v=epQApJ8trf0&t=1s)

[![Watch the Demo Video](https://github.com/RachitSahu26/Chat-app/blob/main/chat-demo-image-2.png)](https://www.youtube.com/watch?v=epQApJ8trf0&t=1s)
Click on the image above to watch the demo video.

## Description
The Chat App is a real-time messaging application that allows users to communicate with each other after completing a simple user authentication process. New users need to sign up first, and then log in. After logging in, all existing users are displayed, and users can send messages to each other.

## Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Installing](#installing)
- [Running the Server](#running-the-server)
- [Frontend Setup](#frontend-setup)
- [Installing](#installing-1)
- [Running the Development Server](#running-the-development-server)
- [Features](#features)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Prerequisites
- Node.js
- npm
- MongoDB

## Backend Setup

### Installing
1. Clone the repository:
    ```bash
    git clone https://github.com/RachitSahu26/Chat-app.git
    cd Chat-app
    ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=4040
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Server
- Start the backend server:
    ```bash
    npm start
    ```

## Frontend Setup

### Installing
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the frontend directory and add the following variables:
    ```env
    REACT_APP_API_BASE_URL=http://localhost:4040/api  # Replace this with your backend API base URL
    ```

### Running the Development Server
- Start the frontend development server:
    ```bash
    npm run dev
    ```

- Open your browser and navigate to `http://localhost:3000` to view the frontend.

## Features
- User Authentication: Sign up and log in.
- Real-time Messaging: Send and receive messages instantly.
- User List: View all existing users to chat with.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.


## Contact
For any queries, please contact [curiousrachit.26@gmail.com].

## Acknowledgments
- Thank you to everyone who contributed.
