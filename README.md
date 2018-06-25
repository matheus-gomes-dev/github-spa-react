# GitHub Repository Search

React/Redux SPA library to search repositories by username hosted on GitHub.

![Alt Text](https://media.giphy.com/media/tJODTJEvMCYbqXuePk/giphy.gif)

# Instructions

Clone this repository, then inside the folder run:
```
npm install
npm run dev
```
That's it! The application will be running on *http://localhost:8080*. Additionally, you can also see it working on [AWS](http://github-spa-react.s3-website-sa-east-1.amazonaws.com/)!

# Development

All the React (jsx) and Javascript code has been written following [Airbnb's Style Guide](https://github.com/airbnb/javascript), with [ESLint's](https://eslint.org/) help. React component's CSS attributes are defined with [Styled Components](https://github.com/styled-components/styled-components), which helps to keep the app organized, maintainable and scalable. [Github.js](https://github.com/github-tools/github) made ingration with Github's API easy, and [Bootstrap 4](https://getbootstrap.com/) has been used to secure responsive behavior.

# Tests

[Mocha](https://mochajs.org/) has been used to test repository search filter function. You can check the tests running:
```
npm run test
```
