# Financial Control API

This is a REST API for a financial control application.

## Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone

# Go into the repository
$ cd

# Install dependencies
$ yarn install

# Install Docker Desktop
https://www.docker.com/products/docker-desktop/

$ docker run --name mongo_organizy -d -p 27017:27017 mongo:latest

$ docker start mongo_organizy

# Run the app
$ yarn dev:server

# Download the insomnia request collection: 
https://easyupload.io/pksnyk
```

## Routes

### User

- **POST** /user
- **GET** /users
- **GET** /user/:id
- **DELETE** /user/:id
- **PUT** /user/:id
- **POST** /user/login

### Financial Release

- **POST** /financial-release
- **GET** /financial-releases/:id
- **GET** /financial-release/user/:id
- **GET** /financial-release/despesa/:id
- **GET** /financial-release/receita/:id
- **DELETE** /financial-release/:id
- **PUT** /financial-release/:id
- **GET** /financial-release/monthly-balance/:id
- **GET** /financial-release/despesa/category/:id
