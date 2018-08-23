# Employee SkillSet

Design a tool to capture the skills for 10K software developers. The skills can be for a specific software coding language or functional skills like: project management, scrum master, DBA, etc. Provide a way for UI for enter data and searching the data using various filter / search criteria.

## Architecture 

[click here](https://www.dropbox.com/s/y8uz3y7dtol9iie/Screen%20Shot%202018-08-13%20at%205.53.22%20AM.png?dl=0)

## Back-End

NodeJS. I have a node back-end that will serve the message board Web API. This API will allow users to post new messages. These messages will get stored in memory on the server in order to persist. The API will also allow us to serve all of the messages that have been added by any user
  
## Front-End

Angular 6. With Angular, I can make requests to the back-end to post a new message using the custom new message component.

# How to set up the app

#### Install Node 
#### Install NPM
#### Install Angular Cli: 
  npm install -g @angular/cli

#### Install Angular Materials framework:
	npm install --save @angular/material @angular/cdk @angular/animations
  
#### Install Node Express package: 
  npm install express --save
  
#### Run Node server: 
  node ./server.js
  
#### Install nodemon: 
  npm install  -g nodemon

#### Install body parser: 
  npm install --save body-parser
  
#### Install jsontoken: 
 npm install jsonwebtoken--save
