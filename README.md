# Full Stack Developer Assignment - Pet Store

## Getting Started

Download the source code on your machine either using `git clone` or the `Download ZIP` functionality of Github.

### Prerequisites
* [Java](https://www.oracle.com/java/technologies/downloads/) version 11 or later.
* [NodeJS](https://nodejs.org/en/) version 14.15.x or later.
* (Optional) [Maven](https://maven.apache.org/download.cgi) version 3.6.3 or later, or use the provided [Maven wrapper](https://maven.apache.org/wrapper/) scripts.

## Usage

### Server

The project is a Spring Boot implementation of the Pet services defined by the Swagger documentation from [http://petstore.swagger.io/](http://petstore.swagger.io/). 

* Open a terminal in **petstore-api** folder.
* Run the application by running `mvn spring-boot:run` (or `mvnw spring-boot:run` if using the Maven wrapper).
* Run the unit and integration tests with `mvn verify` (or `mvnw verify` if using the Maven wrapper).
* After all spring initializations are done the application should be running in port __9000__. 
* To test application health you can use the following address in your preferable web-browser, [http://localhost:9000/api/pet](http://localhost:9000/api/pet).

### Client

The project is a simplistic Angular implementation consuming the REST services defined by the server.

* Open a terminal in **petstore-client** folder.
* Install the node modules by typing `npm install`
* Run the application by running `npm run start`
* Run the tests with `npm run test`
* Run the end-to-end tests with `npm run e2e`
* To experience the application visit [http://localhost:4200](http://localhost:4200).
