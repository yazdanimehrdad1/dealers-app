Notes:

Run Instruction:

1-  Input local variable in .env file as follows. The .env file is in server folder  
    - MONGODB_URL = mongodb+srv://username:mongodbpassword@cluster0.xjfvd.mongodb.net/?retryWrites=true&w=majority
    - DB_NAME= customer
    - PORT=8000
2-  Move to the server directory : cd server
3-  Run server : nmp start
4-  Move to the client directory: cd client
5-  Run react : expo start
6-  select the preferred  simulator (press i for ios)
7-  *Note the Customer detail and customer edit are only accecible from the links provided (not from bottom tabs)


The code is to fulfill the requirements of the assignment described below. 
Functional Requirements:
1-  Create a mobile application (preferred in react native) with 2 tab navigation.
    Add a new customer
    List the customers
2-  Create a local backend to have apis to:
	Add a new customer
	List the customers
3-	Create a local database to store the customers

The backend was designed using Node.js(v14.17.1), Express(4.18.1).
Based on the functional requirements, mongoDB and mongoose were used to setup the database for this project. 
React native was used to develop the frontend for an ios device. 

Items demonstrated:

1-	Multiple tabs for CRUD functionality :
    a.	Adding customers’ information
    b.	View the list of customers
    c.	View the detail information per individual customer
    d.	Update the individual customer’s information
    e.	Delete a customer from the list
2-	Verify the designed RESTful api server using postman
3-	Data validation and error handling for user’s input information

Potential improvements:

1-  Depending on the real-world application the data model could be much more complicated. Therefore, 
    defining and apollo server could be beneficial. In addition, API query languages such as graphQL could be used to manage 
    the api depending on the data models. RESTful api seemed to be fine for the scope of this project. 

2-  The api calls for this project was minimal, however serverless functions could be considered for enterprise level of the dealers app. 

3-  Please refer to the comments in the code for potential improvements to the frontend. The comments are primarily towards making the app scalable.

4-  It is prefred to use TypeScript for both front end and back end development to avoid runtime issues and type checking for an enterprise level 	     application. 

5-  Perform unit test case for api calls
