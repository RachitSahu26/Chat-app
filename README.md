# Chat App

## Description
The Chat App is a real-time messaging application that allows users to communicate with each other after completing a simple user authentication process. New users need to sign up first, and then log in. After logging in, all existing users are displayed, and users can send messages to each other.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

### Prerequisites
- Node.js
- npm
- MongoDB

### Installing
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/chat-app.git
    cd chat-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=4040
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:4040`.
2. Sign up with a new account.
3. Log in using your credentials.
4. You will see a list of existing users.
5. Select a user to start a chat and send messages.

### API Endpoints
- **Auth Routes**:
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in an existing user.
  - `GET /api/auth/logout`: Log out the current user.

- **User Routes**:
  - `GET /api/user/otherUser`: Get a list of other users (protected route).

- **Message Routes**:
  - `POST /api/message/send/:id`: Send a message to a user (protected route).
  - `GET /api/message/:id`: Get messages from a user (protected route).

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

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any queries, please contact [your-email@example.com].

## Acknowledgments
- Thank you to everyone who contributed.
