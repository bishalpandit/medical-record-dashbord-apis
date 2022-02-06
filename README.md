<!-- GETTING STARTED -->

## Getting Started

To run this app locally on your PC, follow the instructions given below:

### Prerequisites

You must be having Node 14 or higher installed on your PC.



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bishalpandit/medical-record-dashbord.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file in root folder and write your Secret keys/tokens

   ```js
   KEY = "ENTER YOUR KEY"
   ```

   ### In our application, we need to have three items in .env

   - PORT(optional)
   - JWT_SECRET(for authorization)
   - MONGODB_URI(for querying and saving document in DB)

4. To run the application, write in terminal
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Usage

## User API

Using this API, users can register and login.

### USER REGISTER [api/users/register]

```js
localhost: 5000 / api / users / register;
```

Users can register by provding their basic details and
a jwt token will be generated and sent as a response for client side authorization.

### USER LOGIN [api/users/login]

```js
localhost: 5000 / api / users / login;
```

Users can login by provding email and passoword and
upon verifying with stored details, we will send the object with token in stringified format.

## Medical Records API

Using this API, users can create and view medical records.

### GET Medical Records [api/medical-records/]

```js
   localhost:5000/api/medical-records/
```

Authorized users(having jwt token in headers) can view
medical records stored in database.

### CREATE Medical Record [api/medical-records/create]

```js
   localhost:5000/api/medical-records/
```

Authorized users(having jwt token in headers) can create medical records to be stored in database.

<p align="right">(<a href="#top">back to top</a>)</p>
