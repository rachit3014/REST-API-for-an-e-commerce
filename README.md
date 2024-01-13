#  E-commerce API
This is a RESTful API for an e-commerce system built using Node.js, Express, and MongoDB.
## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Postman

  ## Interacting with the API

To interact with the e-commerce API, you can use tools like [Postman](https://www.postman.com/) or any other API testing tool. Below are the details on how to perform various operations.

### Base URL

The base URL for the API is `http://localhost:8000/`.



#### 1. Create a Product (POST)
create a post by using http://localhost:8000/create url.
![Screenshot (230)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/e1d15d32-7619-46ce-ae59-31ecb9da06ee)

### Endpoints

#### 2. Get All Products (GET)
GET http://localhost:8000/all
![Screenshot (229)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/45a158de-5710-457f-8cf1-83d94ce6e9e5)

#### 4.Update a Product by ID (PUT)
### we have to provide productid
PUT http://localhost:8000/update/:id'
![Screenshot (231)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/da8be934-3cde-404e-bde5-4ad2a69dcfff)


Request Body:

{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 59.99
}
#### 5.Update a Product variant by ID (PUT)
 PUT http://localhost:8000/varaintupdate/?productid=&varaintid=
 ![Screenshot (232)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/ae457d14-f085-4fb0-83c9-e8396e25f1a2)

#### we have to provide productid and variant id to url
Request Body:

{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 59.99
}

Request Body:

{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 59.99
}

#### 6.Delete a Product by ID (DELETE)

DELETE http://localhost:8000/delete/:id'
#### we have to provide productid to delete the product
 ![Screenshot (233)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/bc41bb1e-60c9-441c-bb77-c9b3ff622513)

 #### 7. Search for Products (GET)
 GET http://localhost:8000/api/search?keyword=searchKeyword
 
![Screenshot (234)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/10a25dfa-023e-42d5-99e4-f751650f1ac7)


 Example Usage in Postman
Open Postman and create a new request.
Set the request type to "POST" or "GET" as needed.
Enter the appropriate URL (e.g., http://localhost:8000).
Set the request headers (if needed).
Enter the request body (for POST and PUT requests).
Click the "Send" button to make the request.


In this section, I've provided examples of various CRUD operations and a search functionality. Customize the examples based on your specific API endpoints and requirements. Users can use these instructions and examples to interact with your API efficiently.


