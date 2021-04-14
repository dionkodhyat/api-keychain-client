# Client

### Intro

I have created an interface where users can interact with the API. In order to get started, the user would need to make an account. However I have prepared an account for testing purposes for convenience should you wish to use it.

| Information  | Details  |
| ------------ | -------- |
| **Username** | testUser |
| **Password** | noise    |

I used the ReactJS library to create the front-end and used  incorporate many components from `react-bootstrap`. When the user logs in, they will be welcomed with a list of the keys that they have stored in the database. All of the key information (with the exception of the Secret Key as requested) are displayed. 

Keys can be generated, verified and refreshed all in the client which are all done through utilizing the API calls in the back end. When the user successfully generates a new key, they will be provided with a Secret Key that will <u>only be shown once.</u>

(**Note **it is very important for the server to be operating for the front end to be functional, see the documentation for the API on how to get that started)

### Steps 

Ensure  you are in the root folder of the file (where `package.json` is). To do this, traverse the file folder until you reached the noise-digital-

`npm i`

`npm start`
