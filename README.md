# A Taste of Hope

<br>

# Quick Compo

<br>

## Description

This is an app to connect people who want to help those in need by donating food and people who need help using markets as intermediaries.

## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Sign up:** As an anonymous user I can sign up on the platform so that I can start helping others or be helped.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating baskets or choose which basket I want.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Home:** As a logged in user I want to access the home page.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of baskets I have created or used depending on my profile (donor vs needful).
-  **Edit Profile:** As a logged in user I can access the edit profile page so that I can edit the information about my account.
-  **Delete Profile:** As a logged in user I want to be able to delete my account.
-  **Create Baskets:** As a logged in user (donor) I can access the create basket page so that I can create a basket or used a predefined one.
-  **Choose Baskets:** As a logged in user (needful) I can access the choose basket/ unitary product page so that I can choose a basket or a product that I need.
-  **Select Market:** As a logged in user (needful) I can access the choose Market page so that I can choose where I can pick up the supplies that I need.



# Client / Frontend

## React Router Routes (React App)

| Path                         | Pages            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | HomePage             | public `<Route>`           | Home  page.                                                |
| `/home`                          | UserHomePage             | user only `<PrivateRoute>`           | Home page depending on the type of profile.                                                |
| `/profile`              | Profile          | user only `<PrivateRoute>` | User (donor or needful) profile for the current user.             |
| `/profile/edit`         | EditProfile      | user only `<PrivateRoute>` | Edit user profile form.                                   |
| `/basket/create`           | CreateBasket | user only `<PrivateRoute>` | Create new basket form.                               |
| `/basket/add`               | AddBasket   | user only `<PrivateRoute>` | Add new predefined basket form.                                         |
| `/basket/choose` | ChooseBasket | user only `<PrivateRoute>` | Choose new basket form. |
| `/basket/unit`    | ChooseUnit    | user only `<PrivateRoute>` | Choose new unit form.                                    |




## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- UserHomePage

- Profile

- EditProfile

- CreateBasket

- AddBasket

- ChooseBasket

- ChooseUnit

  

Components:

- PlayerCard
- TournamentCard
- Navbar






## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Tournament Service**

  - `tournamentService` :
    - `.addTournament(tournamentData)`
    - `.getTournaments()`
    - `.getOneTournament(id)`
    - `.deleteTournament(id)`

- **Player Service**

  - `playerService` :
    - `.createPlayer(id)`
    - `.getPlayerDetails(id)`

  



<br>


# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
	playerProfile: { type: Schema.Types.ObjectId, ref:'Player' },
  createdTournaments: [ { type: Schema.Types.ObjectId, ref:'Tournament' } ]
}
```



**Tournament model**

```javascript
 {
   name: { type: String, required: true },
   img: { type: String },
   players: [ { type: Schema.Types.ObjectId, ref:'Player' } ],
   games: [],
   rankings: []
 }
```



**Player model**

```javascript
{
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profileImage: { type: String },
  scores: []
}
```




<br>


## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `    | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                            |
| GET         | `/api/tournaments`     |                              |                | 400          | Show all tournaments                                         |
| GET         | `/api/tournaments/:id` |                              |                |              | Show specific tournament                                     |
| POST        | `/api/tournaments`     | { name, img, players }       | 201            | 400          | Create and save a new tournament                             |
| PUT         | `/api/tournaments/:id` | { name, img, players }       | 200            | 400          | edit tournament                                              |
| DELETE      | `/api/tournaments/:id` |                              | 201            | 400          | delete tournament                                            |
| GET         | `/api/players/:id`     |                              |                |              | show specific player                                         |
| POST        | `/api/players`         | { name, img, tournamentId }  | 200            | 404          | add player                                                   |
| PUT         | `/api/players/:id`     | { name, img }                | 201            | 400          | edit player                                                  |
| DELETE      | `/api/players/:id`     |                              | 200            | 400          | delete player                                                |
| GET         | `/api/games`           |                              | 201            | 400          | show games                                                   |
| GET         | `/api/games/:id`       |                              |                |              | show specific game                                           |
| POST        | `/api/games`           | {player1,player2,winner,img} |                |              | add game                                                     |
| PUT         | `/api/games/:id`       | {winner,score}               |                |              | edit game                                                    |


<br>

## API's

<br>

## Packages

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your *public* presentation slides

### Contributors

FirstName LastName - <github-username> - <linkedin-profile-link>

FirstName LastName - <github-username> - <linkedin-profile-link>