# Cloudcomputing Course Work to develop Piazza post SSAS application

#Piazza is a SaaS based cloud application that allows authenticated users to post their thoughts for other users authorised to the software. 
#The users like and comment on each other’s posts which builds a community altogether. This report concentrates on implementation, development and testing of a Piazza application.


#Functionalities offered by Piazza are as listed below:
1. oAuth v2.0 protocol authorises the users 
2. Authorised users can share their thoughts via text.
3. All posts are available to read to the valid users
4. Users can comment, like, dislike on the posts
5. The Post owner can set expiry time after which the post cannot be liked, disliked or commented.
6.The posts can be retrieved by a particular topic


File Details
1.app.js file: This is the entry point to the application where middleware is created, API endpoints are mapped, connection to MongoDB is established and finally the server is set on port 3000. 
2. models folder: Includes the files to create the model to define each database structure 
a. Post.js: A schema to define the posts database table and export the model. 
	Post_title – String – given by user
	Post_topic – Enum and holds four values ‘Politics’ , ‘Sport’, ‘Health’ and ‘Tech’
	Likes_count – Every time a post is liked, the counter is increased.
	Dislikes_count - Every time a post is disliked, the counter is increased.
	Comments – creates an array of comments when input by the user.
	Post_date – created by the system for every post
	Post_time – expiry date time set for each post. 
	Post_owner_id – created from the login authentication token to identify post owner.
	Post_status – Enum can hold ‘live’ and ‘expired’ calculated by the system. Defaults live and sets it to expired if current date > post_time.
a.	User.js: A schema to define the user’s database table and export the model. 
	Username – String and needs to be minimum 3 char and max 256, mandatory
	Email – email address and min 6 characters, mandatory
	password – string, min 6 characters, mandatory.

3. routes folder: Files to create the routes to the api endpoints 
a. posts.js: Imports the Post schema model and do the following operations with user authentication. 
i. post- for posting a new post, 
ii. get - to get all the posts and get posts by id, to get posts by topic, to get posts by topic and status.
iii. post-to like a post by incrementing the likes_count
iv. Post – to dislike a post by incrementing the dislikes_count
v. post-to comment a particular post

b. user-auth.js: Imports the User schema model and do the validations from validation.js file and after successful login give the auth-token to the user. 
4.validations folder: a. validation.js: This file contains all the validations for user registration and login.
5. verifyToken.js file: This file contains the code for Token verification once it is provided by the user for CRUD operations after login 
6. env file: This file contains the path DB_CONNECTOR to connect the application to the MongoDB and TOKEN_SECRET to generate token for authentication.
