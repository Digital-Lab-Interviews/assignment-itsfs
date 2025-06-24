# Full Stack Developer Assignment - Pet Store

## Getting Started

Download the source code on your machine either using `git clone` or the `Download ZIP` functionality of Github.

### Prerequisites

- Your IDE of choice.
- [Java](https://www.oracle.com/java/technologies/downloads/) version 11 or higher.
- [NodeJS](https://nodejs.org/en/) version 14.15.x or higher.
- (Optional) [Maven](https://maven.apache.org/download.cgi) version 3 or higher, or use the provided [Maven wrapper](https://maven.apache.org/wrapper/) scripts.

## Usage

### Server (JAVA)

The project is a Spring Boot implementation of the Pet store

- Open a terminal in **petstore-api** folder.
- Run the application by running `mvn spring-boot:run` (or `mvnw spring-boot:run` if using the Maven wrapper).
- Run the unit and integration tests with `mvn verify` (or `mvnw verify` if using the Maven wrapper).
- After all spring initializations are done the application should be running in port **9000**.
- To test application health you can use the following address in your preferable web-browser, [http://localhost:9000/api/pet](http://localhost:9000/api/pet).

### Server (Node JS)

The project is an express implementation of the Pet store.

- Open a terminal in **petstore-express-api** folder.
- Run the application by running `npm run dev`.
- Run the unit and integration tests with `mvn verify` (or `mvnw verify` if using the Maven wrapper).
- After successful build, the application should be running in port **9000**.
- To test application health you can use the following address in your preferable web-browser, [http://localhost:9000/health.html](http://localhost:9000/health.html).

### Client

The project is a simplistic Angular implementation consuming the REST services defined by the server.

- Open a terminal in **petstore-client** folder.
- Install the node modules by typing `npm install`
- Run the application by running `npm run start`
- Run the tests with `npm run test`
- Run the end-to-end tests with `npm run e2e`
- To experience the application visit [http://localhost:4200](http://localhost:4200).
