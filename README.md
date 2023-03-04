# LAB 26, 27 - Component Based UI

RESTy Phase 1, 03/01/23: Begin work on the RESTy API testing application.

Phase 1 Requirements:

This is the first of a four-phase buildout of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

Initial goals are as follows:

- Convert all child components of ```javascript <App />``` from classes to functions.

- Use .scss files to style each component.

- Core application functionality should remain unchanged.

To run application:

```javascript
npm start
```

--------------

RESTy Phase 2, 03/04/23: Retrieve user input and manage state.

Phase 2 Requirements:

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the ```javascript useState()``` hook in our functional components. In order to properly manage state with the useState hook, we will now convert ```javascript<App />``` to a functional component.

![Phase 2 UML](./Resty%20phase%202%20UML.png)

Technical Requirements:

- Refactor any components using this.setState() to implement the useState() react API hook.

- Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

Notes:

- Installed Node.js library for OpenAI to test CRUD operations.

```javascript
npm install openai
```
