# [Devlink🚀](https://devlink-hrushiborhade.vercel.app/)



##  <p align="center"> [Devlink](https://devlink-hrushiborhade.vercel.app/) is a platform for programmers & developers <br/> aimed at unifying the global developer community. </p>

<img width="1418" alt="devlink" src="https://github.com/HrushiBorhade/DevLink/assets/89704093/f365dbb7-b49a-44e1-b371-92e6300a2795">




<p align="center"> <img width="200" alt="devlink" src="https://github.com/HrushiBorhade/DevLink/assets/89704093/63e3f8d1-9cfe-47ec-a081-142c2a7ecfb5"> </p>

### <p align="center">Devlink provides a platform for developers to connect, socialize, ask questions, showcase their work, and collaborate with like-minded individuals.</p>
### <p align="center"> [Project Documention/Report](https://docs.google.com/document/d/1PxJPQMqqPmf2F87dJ3VWZtDqzq9vJIA17PpPZBY-XwA/edit?usp=sharing)</p>



## Tech stack
![Screenshot 2023-07-07 at 11 20 26 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/e85c7467-c753-403c-9738-d10b23c17d57)

## Instructions

To get started with this project, run

```bash
  git clone https://github.com/HrushiBorhade/DevLink.git
```
Install all the packages

```
npm install
```
create .env file with these variables:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```



Run the app
```
 `npm run dev`
```

## Features and Interfaces


 
 1.  Login Page (Authentication)  <a id="auth"> </a>


     - Fast and secure authentication with NextAuth and Google Provider
   
       
![Screenshot 2023-07-07 at 10 48 21 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/376024e5-3a78-44c1-b4a0-b893cb6af717)

       
  - All states and errors are handled and for better user experience toast notifications are used.


![Screenshot 2023-07-07 at 10 43 20 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/b713b426-2871-48c6-8f9c-46b331174e7b)
![Screenshot 2023-07-07 at 10 42 22 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/ff6ce14d-69b0-4bd9-90fa-03cd53cd6bbd)






2. Home/Feed Page   <a id="home"> </a>
    - For a logged in user , posts from the communities followed by the users are being rendered on the main feed page. 

    - For a non logged in user , recent posts are rendered.
  
      
  ![Screenshot 2023-07-07 at 10 38 06 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/9c081c54-8e6e-482d-b6a2-f6ab84717c1c)
  

3.  Community Page   <a id="community"> </a>


    - Most recent Posts from users in that community are shown on the community page

    
  ![Screenshot 2023-07-07 at 10 38 55 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/27ca359e-3824-4da8-8148-300f82f12a2d)

4.  Post Page   <a id="post"> </a>


    -  Advanced caching using redis is used for fast speeds with no loading time, enabling users to seamlessly browse and engage with the platform.
    -  Users could comment on a post, upvote/downvote the post,each comment , reply to comment etc which increases the engagement.


    ![Screenshot 2023-07-07 at 10 40 02 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/126c9f4c-56bb-4f1b-88b3-af0656b8a5f6)



4.  Create Post Page   <a id="create-post"> </a>


    -  Users can post text with markdwn features, image, code,link etc
<img width="150" alt="devlink" src="https://github.com/HrushiBorhade/DevLink/assets/89704093/8ccd7595-82af-4a03-951c-6ac55c84cd0d">
<img width="800" alt="devlink" src="https://github.com/HrushiBorhade/DevLink/assets/89704093/b365fd78-f228-4299-8e35-0c5299880b56">


5.  Create Community Page   <a id="create-community"> </a>


    -  User can create new communities.
  
      
![Screenshot 2023-07-07 at 10 41 03 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/6832e636-f909-4f45-bc1c-16a67d05b816)


6.  Settings Page   <a id="create-community"> </a>


    -  User can change their username.
  
      ![Screenshot 2023-07-07 at 10 41 36 PM](https://github.com/HrushiBorhade/DevLink/assets/89704093/81c8ba6c-666e-4997-87b5-2ad828596731)








  
