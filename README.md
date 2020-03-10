<p align="center">
  <img width="150" src="https://www.dropbox.com/s/w6b4fzuxw7i71b5/fww-readme-logo.jpg">
</p>

# Fit Women's Weekly Reset App

The Fit Women's Reset app is a collection of four short fitness programs.

Each program is designed to:

- Let women experience our intense style of workout design called MicroHITS
- Allow women to experiment with different workout lengths to fit their day
- Get women excited so they want to join our full app (which is not out just yet)

This app is built in React with Google's Firebase as the backend.

### The React App

I used Create React App as my starting point.

The app is currently written in Javascript but over the next year, it will be converted to Typescript.

The React app uses React's useContext and useReducer for global state management. This proved to work really well.

### The Backend

Firebase is great to work with.

The app uses Google's Firestore NoSQL database for persistence. But I use as much caching on the client to limit the number of times I have to talk to the database.

To keep the bundle size of the app small, I created an API using a Google Cloud Function. This means I don't use the entire Firebase SDK in the client... only the authorization part.

### Technologies Used

- React
- Greensock
- Firebase
- Google Cloud Functions
- Google Firebase Hosting
