<h1>Post on the Wall - Backend (Node)
<img align="center" alt="JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
<img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
</h1>
> This is a backend part of a Full Stack application.

<br />

Link to application frontend:
- Frontnd with `React`: [post-on-the-wall/frontend/react](https://github.com/marcelo-mls/post-on-the-wall-frontend/tree/main)

<br />

Link to another backend option to this application:
- Backend with `Django Rest Framework`: [post-on-the-wall/backend/django](https://github.com/marcelo-mls/post-on-the-wall-backend-drf/tree/main)
> one option excludes the other


## Description

This is an application that allows users to register, login and write a post on a wall.

Anonymous users can see all wall posts.

To write a post on the wall, the user needs to login.

<details>
  <summary>
  
  ### Built With
  </summary>
  
  For the development of this API was chosen [`Node.js v16`](https://nodejs.org/en), [`Express`](https://expressjs.com/) and [`MongoDB v6`](https://www.mongodb.com/). Together, these technologies provide a powerful and flexible stack for building APIs in the backend of web applications. They allow you to write scalable, efficient, and easy-to-maintain code. Additionally, the fact that they are all written in JavaScript means that you can use the same language and tools for both the frontend and backend of your application, which can help streamline development and improve code consistency.
  
  <img height="60" align="left" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <p align="rigth">Node.js is a runtime environment for JavaScript that allows you to write server-side code in the same language as the client-side code. It's fast, efficient, and event-driven</p>

  <img height="60" align="left" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">
  <p align="rigth">Express is a minimalist and flexible framework that is built on top of Node.js. It provides a robust set of features for web applications, including routing, middleware, and HTTP utility methods.</p>

  <img height="45" align="left" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg">
  <p align="rigth">MongoDB is a document-based NoSQL database that stores data in JSON-like documents. MongoDB is also highly scalable, and it allows you to handle large volumes of data and transactions easily.</p>
  
  
</details>

## How to Install

These instructions will provide you a complete copy of the project up and running on your local machine for development purposes.

:warning: You must have an active `MongoDB` (version 6) instance running on port `27017` on your local machine.

<details>
  
  > If you use [`docker`](https://www.docker.com/) on your machine here is a command to quickly create a container with mongo v6
  ```sh
  docker run --name mongodb -p 27017:27017 -d mongo:6
  ```
</details>

<br />

1. Clone the repository:
```sh
git clone git@github.com:marcelo-mls/post-on-the-wall-backend.git
```

2. Enter the repository folder you just cloned:
```sh
cd post-on-the-wall-backend
```

3. Install the dependencies and start the project:
```sh
npm install
npm run dev
```

4. (optional) To quickly populate the collections with some dummy data, run:
```sh
npm run db:seed
```

<details>
  <summary>
  
  ## Routes
</summary>

  You can test the API with softwares like [`Insomnia`](https://insomnia.rest/download), [`Postman`](https://www.postman.com/) or [`Thunder Client`](https://www.thunderclient.com/)

  #### Users:
  - GET: `'/user'` lists all users.
  - POST: `'/auth/user'` get a user by email. Auth token required.
  - POST: `'/user'` create a new user.
  - DELETE: `'/user/:id'` delete a user.

  #### Posts:
  - GET: `'/posts'` lists all posts.
  - POST: `'/posts'` create a new post. Auth token required.
  - DELETE: `'/posts/:id'` delete a user. Auth token required.
</details>

<details>
  <summary>
  
  ## Demonstration
  </summary>

  :warning: To have this view it is necessary to install and run the [frontend](https://github.com/marcelo-mls/post-on-the-wall-frontend/tree/main)
  
  - #### Guest view
  ![Guest view](https://user-images.githubusercontent.com/102492818/226949985-6ce05fd8-0dc7-494a-97c9-21d841132d40.png)

  - #### Login/Signup
  https://user-images.githubusercontent.com/102492818/226954914-a61bbcb8-246a-40d8-b18f-c26d79b9c572.mp4

  - #### Authed user view
  https://user-images.githubusercontent.com/102492818/226956434-7454fd2b-f9fc-46ee-9fc7-611a54b9b314.mp4
</details>

---

<br />

Developed by [Marcelo Marques](https://www.linkedin.com/in/marcelo-mls/), © 2023.

<div>
  <a href = "https://www.linkedin.com/in/marcelo-mls/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" />
  </a>
  <a href="mailto:marcelo-mls@hotmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Hotmail-0077B5?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>



