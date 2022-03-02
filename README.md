# Social Media Sample Project


## Project Structure

### Backend (Server)
```
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

### Frontend (Client Side Code)

```shell
src/public
├── app                                     # frontend js code
│  
├── components                              # html snippets
│   
├── css                                     # contains css libraries used
│   
├── fonts                                   # fonts that are used
│   
├── index.html                              # first / home page
└── js                                      # js libraries being used
    

```

## API Documentation 

### `users` 
```
1. `POST /users` 

Creates a new user with random username and an user id

2. `GET /users/{userid}`

Get an user with a given user id

3. `GET /users/{username}`

Get an user with a given username
```

### `posts` 
```
1. `GET /posts` 

Get all posts by everyone 

2. `GET /posts/:id`

Gets the post by user id 

3. `POST /posts` 

Create a new post. 
Required fields - 
    userId=
    title=
    body=
```

### `comments` 
```
1. `GET /comments` 

Get all posts by everyone 

2. `GET /comments/:id`

Gets comments by post id 

3. `POST /comments` 

Create a new comment. 
Required fields - 
    userId=
    postId=
    body=
```



`The screenshots showcasing the working of the project are present within the screenshots folder`