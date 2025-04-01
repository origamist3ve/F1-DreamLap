# F1 DreamLap
# Project Proposal
- The website idea I went with is going to be a dream team creator for F1 drivers. The Full Men CRUD stack will include creating, editing, getting and deleting teams and drivers. The website will provide each unique user with a view of the teams they created. Additionally, showing the race track information and driver information

# Wireframe - Initial Landing (index)
![dummy](https://github.com/user-attachments/assets/330a9bbd-63fd-479f-95ec-837b68d9bee2)


# Wireframe - logged in dashboard
![dummy](https://github.com/user-attachments/assets/32731e2a-c2fa-4439-93bd-e7436abda774)


# Wireframe - Creating team
![dummy](https://github.com/user-attachments/assets/2d71f3a8-34f7-467c-94e7-6a4d4cf87e84)


# Wireframe - Separate team view with delete and edit
![dummy](https://github.com/user-attachments/assets/7b554ca8-c248-47d0-81f2-5d56480f7d86)



# Wireframe - Driver information page
![dummy](https://github.com/user-attachments/assets/025843c6-3447-4d68-8221-7ee2514a24b1)



# Wireframe - Race information page
![dummy](https://github.com/user-attachments/assets/4ba63d5d-b664-48c6-a7ad-5a0387c57f94)





# ERD
![dummy](https://github.com/user-attachments/assets/800f2571-2dcc-4306-911f-5b60a2df5ac4)



# User stories
## User Authentication & Authorization

- As a **user**, I want to **register an account** so that I can manage my own teams and drivers.
    
- As a **user**, I want to **log in securely** so that I can access my personalized dashboard.
    
- As a **user**, I want to **only manage my own teams and drivers**, so that others cannot modify my selections.
    

## Team Management (CRUD)

- As a **user**, I want to **create a new team** so that I can build my dream F1 lineup.
    
- As a **user**, I want to **edit my team’s details** so that I can update its name, colors, or other attributes.
    
- As a **user**, I want to **delete a team** if I no longer want it in my list.
    
- As a **user**, I want to **view all teams I have created** so that I can easily manage my selections.
    

## Driver Management (CRUD)

- As a **user**, I want to **add drivers to my team** so that I can complete my lineup.
    
- As a **user**, I want to **remove a driver from my team** if I change my selection.
    
- As a **user**, I want to **view all drivers in my teams** so that I can review my lineup.
    

## Race Management (CRUD)

- As a **user**, I want to **assign my teams to a race** so that I can see how they perform in different events.
    
- As a **user**, I want to **view all races** to see the upcoming and past events.
    
- As a **user**, I want to **remove a team from a race** if I decide they should not participate.
    

## Display & Retrieval

- As a **user**, I want to **view the landing page** so that I can learn about the website before logging in.
    
- As a **user**, I want to **access my dashboard after logging in** to manage my teams and drivers.
    
- As a **user**, I want to **view all my teams and their drivers** so that I can see my selections at a glance.
    
- As a **user**, I want to **click on a driver’s name to see more details** about them.
    
- As a **user**, I want to **click on a race’s name to see more details** about the event.
    

## Stretch Goals

- As a **user**, I want to **view all races and the teams participating in a card-style layout** for a more visually appealing experience.
    
- As a **user**, I want to **generate and display my team’s color automatically** so that I can easily identify them.
    
- As a **user**, I want to **see an image of the circuit for each race** so that I can visualize the track.
    
- As a **user**, I want to **delete and edit drivers and races separately from the team** to have more control over my selections.



# Trello view

[Trello](https://trello.com/invite/b/67eaa21f1e438a6c227d5c63/ATTI2d8ca3eeba982a9fd1b449972b00da72567155F3/driver-card-management)
# Pseudocode
```js
//1) Define structure
	// Folders for models, views, connections, css, and middleware
	//Define Schema structure and relations through references
//2) Create index page
	//Create routes for log in and sign up pages
	//define the authentication method for each user
//3) Create routes for team
	// Create form page where team creation and driver picking
	// render and redirect to page where the information is posted on a dashboard
//4) Delete and edit
	// retrieve team information
	// Route to delete and edit team

	

```

# Routes

| **Route**                       | **Method** | **Description**                   |
| ------------------------------- | ---------- | --------------------------------- |
| `/`                             | GET        | Show the landing page             |
| `/register`                     | GET        | Show user registration form       |
| `/register`                     | POST       | Register a new user               |
| `/login`                        | GET        | Show login form                   |
| `/login`                        | POST       | Authenticate user & start session |
| `/logout`                       | GET        | Log out and destroy session       |
| `/dashboard`                    | GET        | Show user’s teams                 |
| `/dashboard/teams/new`          | GET        | Show form to create a team        |
| `/dashboard/teams`              | POST       | Create a new team                 |
| `/dashboard/teams/:teamId`      | GET        | View team details                 |
| `/dashboard/teams/:teamId/edit` | GET        | Show edit form for team           |
| `/dashboard/teams/:teamId`      | PUT        | Update team details               |
| `/dashboard/teams/:teamId`      | DELETE     | Delete a team                     |
| `/dashboard/drivers/:driverId`  | GET        | View driver details (read-only)   |
| `/dashboard/races/:raceId`      | GET        | View race details (read-only)     |





# Timeline



| **Day**    | **Task**                                                      | **Blockers**                                                             | **Notes**                                                                                       |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Monday     | Create and Submit project proposal                            | Understanding the ERD design                                             |                                                                                                 |
| Tuesday    | Set up the general structure of the models, files and folders |                                                                          | Import all packages that will be used in project early on and set their imports on each js file |
| Wedenesday | Work on the CRUD routing functions and test them out          | Understanding how to post and retrieve data that has multiple references | Try and catch errors to find issues with logic of data retrieval                                |
| Thursday   | Finalize the functionality of the CRUD routes                 |                                                                          |                                                                                                 |
| Friday     | CSS Styling                                                   |                                                                          |                                                                                                 |
| Saturday   | Stretch goals / CSS Styling                                   |                                                                          |                                                                                                 |
| Sunday     | Stretch goals / Testing                                       |                                                                          |                                                                                                 |
