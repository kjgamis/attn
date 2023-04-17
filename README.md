# ATTN

An app to send an automated message from a click of a button.

Built with Express.js and React Native

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
= [HTTPS](https://timonweb.com/javascript/running-expressjs-server-over-https/)

### [React Native](https://reactnative.dev/)
- [React Native Tutorial](https://youtu.be/VozPNrt-LfE)
- [React Native and Node](https://www.asapdevelopers.com/build-a-react-native-login-app-with-node-js-backend/)
### MongoDB
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Memory Server](https://nodkz.github.io/mongodb-memory-server/)
  - https://dev.to/remrkabledev/testing-with-mongodb-memory-server-4ja2
- [Unit testing](https://www.makeuseof.com/express-apis-jest-test/)
- [Testing Express and Mongoose](https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/ )
