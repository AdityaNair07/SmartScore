# SmartScore (Quiz App)

A React JS application that utilizes the Open Trivia API to provide a comprehensive quiz experience.

## Features

### Configuration Options

* **Number of Questions**: Choose the number of questions to be displayed in the quiz.
* **Difficulty Level**: Select from three difficulty levels: Easy, Medium, and Hard.
* **Category**: Choose from a variety of categories, such as History, Science, Sports, and more.
* **Quiz Type**: Select from two quiz types: Multiple Choice and True or False.

### Quiz Functionality

* **Question Display**: Questions are displayed one at a time, with the option to navigate to the next question.
* **Answer Submission**: Users can submit their answers, which are then validated against the correct answer.
* **Score Tracking**: The app tracks the user's score, displaying the number of correct answers and the total score.
* **Quiz Completion**: The quiz concludes when all questions have been answered, displaying the final score and an option to restart.

### Technical Details

* **Frontend Framework**: Built using React JS, with Vite as the development server.
* **API Integration**: Utilizes the Open Trivia API to fetch questions and validate answers.
* **State Management**: Uses React Hooks for state management and context API for global state.
* **Styling**: Styled using CSS, with a focus on responsiveness and accessibility.

### Development Requirements

* **Node JS**: Version 14 or higher.
* **Yarn or npm**: Package manager for installing dependencies.
* **Vite**: Development server for React JS.
* **ESLint**: Linter for code quality and syntax checking.

### Plugins and Dependencies

* **@vitejs/plugin-react**: For React JS support in Vite.
* **@vitejs/plugin-react-swc**: For SWC support in Vite.
* **react**: The React JS library.
* **react-dom**: The React DOM library.
* **axios**: For making API requests to the Open Trivia API.

### Getting Started

1. Clone the repository: `git clone https://github.com/AdityaNair07/SmartScore.git`
2. Install dependencies: `yarn install` or `npm install`
3. Start the development server: `yarn dev` or `npm run dev`
4. Open the app in your browser: `http://localhost:3000`

### Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

### Acknowledgments

* Open Trivia API: For providing the quiz questions and API.
* Vite: For providing the development server and plugin ecosystem.
* React JS: For providing the frontend framework.