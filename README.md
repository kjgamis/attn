# ATTN

Send a message with a click of a button. Create a message that can be sent quickly without having to type the same message again.

Applicable  uses:
- send a message to a contact in case of an emergency (such as date going south)
- tell your partner you need alone time without having to type the same message over and over again


The API is built with Express.js and and the front-end with build React .Native

# Features
## Create Message
<img src='assets/create.gif' alt='Create Message GIF' width='200px'>

## Edit Message
<img src='assets/edit.gif' alt='Edit Message GIF' width='200px'>

## Delete Message
<img src='assets/delete.gif' alt='Delete Message GIF' width='200px'>

## Send Message
<img src='assets/send.gif' alt='Send Message GIF' width='200px'>

# Scripts

## Download dependencies

Dependencies for the API and the Front-End must be installed separately.

### API

```
cd server
npm install
```

### React Native

```
cd mobile
npm install
```

## Run the project locally

### API

```
cd server
npm start
```

### React Native

```
cd mobile
npm start

npm start --ios
npm start --android
```

## Deploy API to GCP
```
cd server/
gcloud app deploy
# Service name (server):  attn-api-66161465043
```


## Resources

### [Express](https://expressjs.com/)
- [API Problem](https://www.npmjs.com/package/api-problem)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [JWT](https://medium.com/@joenjenga/securing-your-apis-node-js-using-jwt-46c5d5d99ccd)
- [HTTPS](https://timonweb.com/javascript/running-expressjs-server-over-https/)

### [React Native](https://reactnative.dev/)
- [React Native Tutorial](https://youtu.be/VozPNrt-LfE)
- [React Native and Node](https://www.asapdevelopers.com/build-a-react-native-login-app-with-node-js-backend/)
### MongoDB
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Memory Server](https://nodkz.github.io/mongodb-memory-server/)
  - https://dev.to/remrkabledev/testing-with-mongodb-memory-server-4ja2
- [Unit testing](https://www.makeuseof.com/express-apis-jest-test/)
- [Testing Express and Mongoose](https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/ )

### GCP
- [Deploy NodeJS](https://cloud.google.com/nodejs/getting-started)
- [Deploy Sample](https://billmartin.io/blog/how-to-build-and-deploy-a-nodejs-api-on-google-cloud)