const questions = [
    {
      text: "What is React?",
      options: [
        { text: "A programming language", isCorrect: false },
        { text: "A front-end library", isCorrect: true },
        { text: "A database", isCorrect: false },
        { text: "A backend framework", isCorrect: false },
      ],
    },
    {
      text: "What does CSS stand for?",
      options: [
        { text: "Creative Style Sheets", isCorrect: false },
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Computer Style Sheets", isCorrect: false },
        { text: "Creative Styling System", isCorrect: false },
      ],
    },
    {
      text: "Which company maintains React?",
      options: [
        { text: "Google", isCorrect: false },
        { text: "Facebook", isCorrect: true },
        { text: "Microsoft", isCorrect: false },
        { text: "Amazon", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of JSX in React?",
      options: [
        { text: "To style components", isCorrect: false },
        { text: "To render HTML inside JavaScript", isCorrect: true },
        { text: "To manage state", isCorrect: false },
        { text: "To build APIs", isCorrect: false },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { text: "A permanent storage", isCorrect: false },
        { text: "A temporary data store for components", isCorrect: true },
        { text: "A CSS property", isCorrect: false },
        { text: "A server-side function", isCorrect: false },
      ],
    },
    {
      text: "Which method is used to create a new React app?",
      options: [
        { text: "create-react-app", isCorrect: true },
        { text: "new-react-app", isCorrect: false },
        { text: "start-react", isCorrect: false },
        { text: "react-init", isCorrect: false },
      ],
    },
    {
      text: "What is the virtual DOM?",
      options: [
        { text: "A lightweight copy of the real DOM", isCorrect: true },
        { text: "A database for storing components", isCorrect: false },
        { text: "A CSS property", isCorrect: false },
        { text: "An HTML element", isCorrect: false },
      ],
    },
    {
      text: "What is the default port for a React development server?",
      options: [
        { text: "8080", isCorrect: false },
        { text: "3000", isCorrect: true },
        { text: "5000", isCorrect: false },
        { text: "7000", isCorrect: false },
      ],
    },
    {
      text: "How do you pass data from a parent to a child component?",
      options: [
        { text: "Using states", isCorrect: false },
        { text: "Using props", isCorrect: true },
        { text: "Using hooks", isCorrect: false },
        { text: "Using context", isCorrect: false },
      ],
    },
    {
      text: "Which hook is used for managing side effects?",
      options: [
        { text: "useEffect", isCorrect: true },
        { text: "useState", isCorrect: false },
        { text: "useContext", isCorrect: false },
        { text: "useReducer", isCorrect: false },
      ],
    },
    {
      text: "What is the command to build a React app for production?",
      options: [
        { text: "npm start", isCorrect: false },
        { text: "npm build", isCorrect: true },
        { text: "npm run dev", isCorrect: false },
        { text: "npm install", isCorrect: false },
      ],
    },
    {
      text: "Which hook is used to manage state in a function component?",
      options: [
        { text: "useReducer", isCorrect: false },
        { text: "useEffect", isCorrect: false },
        { text: "useState", isCorrect: true },
        { text: "useContext", isCorrect: false },
      ],
    },
    {
      text: "What does the 'key' prop do in React?",
      options: [
        { text: "Identifies unique elements in a list", isCorrect: true },
        { text: "Passes state between components", isCorrect: false },
        { text: "Defines CSS styles", isCorrect: false },
        { text: "Sets event handlers", isCorrect: false },
      ],
    },
    {
      text: "What is the main purpose of React Router?",
      options: [
        { text: "To manage animations", isCorrect: false },
        { text: "To enable routing between pages", isCorrect: true },
        { text: "To manage states", isCorrect: false },
        { text: "To build APIs", isCorrect: false },
      ],
    },
    {
      text: "What is Redux used for in React?",
      options: [
        { text: "Routing", isCorrect: false },
        { text: "State management", isCorrect: true },
        { text: "Building components", isCorrect: false },
        { text: "Creating hooks", isCorrect: false },
      ],
    },
    {
      text: "What is the default behavior of useState?",
      options: [
        { text: "Immutable state updates", isCorrect: true },
        { text: "Automatic re-rendering", isCorrect: false },
        { text: "Global state sharing", isCorrect: false },
        { text: "Server-side execution", isCorrect: false },
      ],
    },
    {
      text: "What does 'npm install' do?",
      options: [
        { text: "Removes dependencies", isCorrect: false },
        { text: "Installs dependencies", isCorrect: true },
        { text: "Starts the app", isCorrect: false },
        { text: "Builds the app", isCorrect: false },
      ],
    },
    {
      text: "What does 'React.Fragment' do?",
      options: [
        { text: "Wraps components without adding an extra DOM node", isCorrect: true },
        { text: "Defines component styles", isCorrect: false },
        { text: "Handles state", isCorrect: false },
        { text: "Renders routes", isCorrect: false },
      ],
    },
    {
      text: "What does the 'map()' function do in JavaScript?",
      options: [
        { text: "Filters an array", isCorrect: false },
        { text: "Iterates and transforms an array", isCorrect: true },
        { text: "Finds a value in an array", isCorrect: false },
        { text: "Sorts an array", isCorrect: false },
      ],
    },
    {
      text: "What is a controlled component in React?",
      options: [
        { text: "A component that controls the backend", isCorrect: false },
        { text: "A component with controlled DOM values via state", isCorrect: true },
        { text: "A global component", isCorrect: false },
        { text: "A component that handles CSS", isCorrect: false },
      ],
    },
  ];
  
  export default questions;
  