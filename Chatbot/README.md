# Project Setup - Get Ready
## Prerequisite 
### Technologies
 Assumption - development environment will be windows
1. Node - [install node.js](https://nodejs.org/en/download/package-manager) - to install node.js need to follow the below steps - 
``` 
installs fnm (Fast Node Manager) - downlaod fnm package using winget command - 
PS C:\> winget install Schniz.fnm

download and install Node.js using fnm package, command will be- 
PS C:\> fnm use --install-if-missing 20

verifies the right Node.js version is in the environment, this will print latest nodejs version
PS C:\> node -v 

verifies the right NPM version is in the environment
PS C:\> npm -v 


```

2. Install postgresql to hold user details.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Convert React js to Android
This section is giving insight to convert react js application into Android native application using ionic and capacitor package. Need to follow the below steps - 

## About required package
This set of packages give the mobile experiences web applications.
### Ionic
Ionic provides a set of tools for building native iOS and Adnroid applications and mobile-ready Progressive Web Apps, using familiar web libraries, frameworks and languages. For more details about Ionic visit the link below - [Ionic](https://ionic.io/resources/articles/what-is-ionic) 

### Ionic Capasitor 
Ionic Capasitor is a cross-platform native bridge that allows to turn any web project into a native iOS or Android mobile application. Capacitor enables easy access to common device features, using basic JavaScript, with complete access to the native operating system when you need it.

### Ionic Framework 
Ionic Framework extends  Capacitor by providing a rich library of mobile-optimized UI components—plus mobile routing, navigation, gestures, and animations. Ionic Framework works with specific JavaScript frameworks, including React, Angular, and Vue. If you’re familiar with any of these JS frameworks, you’ll feel right at home.

### Ionic Portals
Ionic Portals supports the creation of [**mobile micro frontends**](https://ionic.io/resources/articles/micro-frontends-for-mobile-with-ionic-portals) that can be deployed to any existing native mobile applications, including apps built with Swift, Kotlin, React Native, and more. Portals is primarily used by enterprises to scale development by allowing multiple teams to build, test, and ship in parallel, or to deploy a single micro app across multiple applications.

## Steps to perform
test