# Real Estate Web Application
## Project Description
This is a full-stack real estate web application that aims to be used by: Homebuyers, Property renters,  system administrator(s), and (real-state) brokers.
A real estate web application is a digital platform designed to facilitate the buying, selling, and renting, of real estate properties. 
### Homebuyer requirements
1.	Search for a property: The homebuyer can search for properties based on specific criteria such as location, price range, number of bedrooms, and amenities.
2.	Save favorites: Homebuyers can save properties they are interested in, creating a list of favorites for easy access and comparison.
3.	Request a visit to a property: Once interested in a property, the homebuyer can request a viewing appointment through the system.
4.	Search for brokers.
5.	Mortgage Calculator.

### Renters requirements
Similar to homebuyers exceot for mortgage calculators.

### Broker
1.	Submit Offers: Brokers can submit offers for buying properties on behalf of their clients, and track the status of their offers.
2.	Request a visit to a property on behalf of their clients.
3.	CRUD operations on property listings.
4.	Matching Properties: Brokers can use the system to match properties with potential buyers based on their preferences and requirements.
5.	Offer Management: Brokers can review and manage offers submitted by homebuyers for properties they represent.
6.	Manage visits ((re)Schedule, cancel).

### System administrator
1. CRUD operations on brokers
   
## Team members and Roles
Frontend Developers: ReactJs, JavaScript
1. Zineb Alaoui Aziz
2. Hawa-Afnane Said
3. Haifaa Janoudi

Backend Developers: Java, Spring Boot, MongoDB
1. Jainam Shah
2. Khanh Huy Nguyen (Will help with Frontend knowledge-transfer)
3. Kaothar Reda

## Project Approach
- This project is expected to be completed after 4 sprints, with each sprint lasting 2 weeks each.
- There are a total of 6 members and we decided to split up into two smaller groups (frontend and backend).

### Frontend Approach


### Backend Approach
The CRUD operations required by the frontend will be implemented in the backend and the data will be sent through REST API endpoints. 
* The backend team decided to use Java Spring Boot. This is because everyone on the team is familar with Java. Furthermore, Java is object-oriented which allows us to create modular programs and reusabled code. Not only that Java is robust and enforces type safety this will decrease the chances of bugs in our code.
* Spring Boot will be faster and easier to set up compared to Spring. A concern with Spring is that it is very complicated to configure and slow to get started, Spring Boot will help us with these concerns.
* We also decided to go with MongoDB for our database because it is easier to work with compared to MySQL since there is no need to define schemas beforehand. None of the team members have any experience with database schemas.

### Instructions for back-end developers:
The Spring Boot application is under server/real_estate where all files are stored. To get started you will first need to clone it in your local system from GitHub and start working on the application using VS Code or IntelliJ.
* There is a folder called src where the main Java application is present. This is mainly where you will start coding in Java. To start with development, you will need to learn the development of web applications using Spring Boot.
* After that you will be able to develop controllers and components from here, so here's a starting point: https://spring.io/guides/gs/spring-boot/
* Also, you will need to connect with MongoDB where it will be essential to learn the basics of Spring and Spring Boot after which it would be simpler to build the entire server-side infrastructure and provide information to the front-end.
* The required dependencies are added for MongoDB which makes it easier for you to start with the next step.
