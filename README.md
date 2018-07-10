# Full Stack Developer Assignment - Pet Store

Download the source code on your machine either using `git clone` or the `Download ZIP` functionality of Github

#### Initial setup
* Install mvn from [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)
* Install npm from [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
* Install Angular CLI from [https://cli.angular.io/](https://cli.angular.io/)

#### Server

The project is a Spring Boot 2 implementation of the Pet services defined by the Swagger documentation from [http://petstore.swagger.io/](http://petstore.swagger.io/). 

* Open a terminal in **petstore-api** folder
* Run the application by running `mvn spring-boot:run`
* After all spring initializations are done the application should be running in port __9000__. 
* To test application health you can use the following address in your preferable web-browser, [http://localhost:9000/api/pet](http://localhost:9000/api/pet). 

#### Client

The project is a simplistic Angular.IO implementation consuming the REST services defined by the server.

* Open a terminal in **petstore-client** folder
* Install the node modules by typing `npm install`
* Run the application by running `ng serve`
* To experience the application visit [http://localhost:4200](http://localhost:4200)
