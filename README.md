# cloud-based-API
A cloud based API that manipulates data in a MongoDB non-relational database

A class project for Cloud/Mobile Software Development course. I reasearched and learned how to set up a MongoDB non-relational database
on my DigitalOcean VPS and built a simple RESTful API that supports GET, POST, PUT and DELETE requests. 

To run the project: 

Clone this repository, place in a new directory and install nodejs, npm, exress generator and httpie.

In your project's root directory, create and start your MongoDB by installing MongoDB and mongoose and start your database by typing 
sudo mongod. 

Run the program by opening another window and starting the server: type npm start. Your database will be created on the first run. Check 
if the database exists by opening a new window and typing mongo (this will give you all the mongo information and command explanations) 
then type show dbs to see the database. 

You can test the project with httpie. Simply follow the instructions in my testing file, URL-test.pdf. 
