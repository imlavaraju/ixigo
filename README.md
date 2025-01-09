#   News Reader Application

A dynamic and interactive application that fetches and displays the latest news related to any given topic from the past two weeks. Built with user-friendly features like dynamic topic selection, authentication, and article saving.

## Features

### Core Features:
- **Dynamic News Fetching**: Fetch the latest news for any topic using the NEWS API.
- **Flexible Input**: Users can enter any topic of their choice to search for relevant news articles.
- **Authentication and Authorization**:
  - Browse news without logging in.
  - Logged-in users can save articles as favorites for future reference.

### Additional Features:
- **Favorites Management**: Saved articles are stored in the database and accessible for logged-in users.
- **Secure Access**: Authentication ensures only authorized users can save articles.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (mongoose)
- **API**: [NEWS API](https://newsapi.org/) for fetching news articles
- **Authentication**: JSON Web Tokens (JWT) for secure authentication
- **Styling**: Tailwind CSS

## Screenshots

| Feature               | Screenshot                        |
|-----------------------|-----------------------------------|
| News Search Interface | ![News Search](https://github.com/imlavaraju/ixigo/blob/main/frontend/src/assets/Screenshot%20(21).png) |
| Login Page            | ![Login Page](https://github.com/imlavaraju/ixigo/blob/main/frontend/src/assets/Screenshot%20(22).png) 
| SignUp Page        | ![Sign Up](https://github.com/imlavaraju/ixigo/blob/main/frontend/src/assets/Screenshot%20(23).png) |
| Favourites            | ![Favourites](https://github.com/imlavaraju/ixigo/blob/main/frontend/src/assets/Screenshot%20(24).png) |

## How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/imlavaraju/ixigo.git
   cd ixigo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     NEWS_API_KEY=your_news_api_key
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   - Open `http://localhost:5173` in your browser.

## API Endpoints

### Public Routes
- `GET /api/articles/news`: Fetches news articles based on the given topic.

### Protected Routes
- `POST /api/articles/like`: Save an article to the favorites list (requires authentication).
- `GET /api/articles/liked`: Retrieve saved articles for a logged-in user.
