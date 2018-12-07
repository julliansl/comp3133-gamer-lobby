COMP3123 Assignment 1 - Gamer Lobby (Friends List Ver.)
======
## Developers
#### 100801047 - Jacky Phung
#### 100998164 - Jullian Anthony Sy-Lucero
## Initial Setup Guide
### Proper Setup
In order to setup this project make sure to run these commands:
1. `cd` to the project's root folder in a terminal/command line
2. Run the `npm install` command in a terminal with directory pointed to the project folder
3. `cd` into these directories in separate terminals or command lines and run `npm install`
  * `backend`
  * `gamer-lobby`

### Alternative / Quick Setup Guide
1. `cd` to the project's root folder in a terminal/command line
2. Once in the project's root folder there are two command options:
  * Run `npm run setup` if all global dependencies are installed
  * Run `npm run setup:env` if @angular/cli, and nodemon aren't installed globally

## Running the Server
> Running the server is as easy as running `npm run start` in the root folder
>> If this method fails, I suggest running the servers manually. Here's how:
>> 1. nodemon ./backend/server.js
>> 2. `cd` into `gamer-lobby` then run `ng serve --open`
>> 
>> **Note:** Make sure to run these commands in a terminal/command line `cd`'d into the project's root folder

## Important Project Information
### Admin Credentials
### Username: admin
### Password: admin