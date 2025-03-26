# Taskly

### **Description:**
*Date to be saved on the server:* For our update plan, we decided to introduce a new feature where users can create an account to gain access to special privileges on our website. When they open the link to our site, they will be directed to the login page, which asks for their email address and password. There will also be a button on the same page to create a new account, which gets the user's profile picture, name, username, email address, and password.

Once the user has filled up all the needed information from the login page, they can finally access the website itself. A small icon of their profile picture will appear on the right side of the navigation bar. If they click this icon, they will be able to edit their profile or add a new account. Additionally, when the user is creating a new task, their input will now be sent to the   databas wherein it can be stored, retrieved, or edited all throughout the website.

*How the data will be used:* We plan to ask some personal information to retrieve the users tasking page upon login. Similarly, we decided to refine the way we retrieved their task data by using the POST method.

**_Home page_**
1. Type of data: User account login data \
purpose: for logging it to the site or for creating a new account \
structure in JSON format: \
	account { \
 		profile: file, \
   		first-name: text-string, \
     		last-name: text-string, \
       		username: text-string, \
	 	email address: email formatted text-string, \
   		password: text-string \
 	} \

**_Tasking page:_**
1. Type of data: user account data \
purpose: for editing the user information \
structure in JSON format: \
        acc access { \
    		first-name: text-string, \
    		last-name: text-string, \
    		username: text-string, \
		email address: email formatted text-string, \
		change password: text-string \
	} 

3. Type of data: task data \
purpose: for creating new tasks/editing the data of existing tasks \
structure in JSON format: \
	new task/edit task { \
		task name: text-string, \
		date added: date, \
		date to be accomplished: date, \
		priority: text-string, \
		notes: text-string, \
		status: checkbox \
  	}


### **Wireframe**

**_Updated Home Page:_**

![Taskly_Updated Home Page](https://github.com/user-attachments/assets/698e2a9e-ed31-4158-95c7-f9fa5aaccf38)

![Taskly_Updated Home Page_login](https://github.com/user-attachments/assets/bf672413-cf54-42d7-96c7-9b67501f0b7e)

**_Updated Task Page:_**

![Taskly_Updated Task Page](https://github.com/user-attachments/assets/1ed70a0a-e338-4674-ba9e-0d3a6d441dfa)

![Taskly_Updated Task Page_sample Acc Editing](https://github.com/user-attachments/assets/97a82669-b75a-4094-95ea-3a2aa6fe954b)
