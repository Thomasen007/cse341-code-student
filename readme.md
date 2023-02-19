<<<<<<< HEAD
# CSE341 Lesson 7 Class Start
=======
# CSE341 Lesson 6 Class Activity
>>>>>>> 946c61a1ccb6529573e5114564a9f1e407c1a3cf

## Steps to complete activity

<<<<<<< HEAD
## Steps to complete activity
- Start here: https://auth0.com/docs/ and follow the docs for backend node.js api

### Detailed steps to complete activity
- npm init -y
- npm install express express-openid-connect dotenv
- create .env
- Sign up for free auth0 account
- Create application in auth0
    - Click Settings
        - "Allowed Callback URLS" http:localhost:3000/callback
        - "Allowed Logout URLS" http:localhost:3000
        - scroll to bottom and save
- Create server.js file in node project
- Create express app and listen on a port
- use dotenv to grab values from env file
    - ISSUER_BASE_URL - domain
    - CLIENT_ID - client id
    - BASE_URL - http://localhost:3000
    - SECRET - any string 32 characters or more
- Copy app.use auth() from docs
- Check localhost:3000/login - you should be able to login
- Create route for homepage "/"
- res.send(req.oidc.isAuthenticated() ? 'Logged in : 'Logged out')
- Add authRequired:false to auth({})
- Add auth0Logout:true to auth({})
- Create route for '/profile' to test middleware
## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L07-class-complete)
=======
There will be no code in this class activity. This activity is meant to help students understand the need to validate data and how to think through that process; as well as how to handle errors...and what errors to look out for.

- Open the [CSE 341 Class Activity 6 Template](https://docs.google.com/document/d/1iTkRr0A0Xk7Rt8mcevopuinQVUlH0j9EvQbFT0Dmj1M/edit?usp=sharing) document and work through the questions with a partner.
- Click File then Make Copy (You will not be able to edit the original)

>>>>>>> 946c61a1ccb6529573e5114564a9f1e407c1a3cf
