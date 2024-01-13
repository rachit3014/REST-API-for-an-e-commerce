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


### Endpoints

#### 1. Create a Product (POST)
create a post by using http://localhost:8000/create
 Request Body:{
        "name": "",
        "description": "",
        "price": 
}
![Screenshot (230)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/e1d15d32-7619-46ce-ae59-31ecb9da06ee)

### 2. Create a Product variant (POST)
create a post by using http://localhost:8000/variant/:id
## we have to provide product id 
Request Body:  {
        "variantname": "",
        "sku": "",
        "additionalcost": ,
        "stockcount":
}

![Screenshot (238)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/cae9e294-f2f4-40e2-89fa-673cce9dbd98)


#### 3. Get All Products (GET)
GET http://localhost:8000/all
![Screenshot (229)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/45a158de-5710-457f-8cf1-83d94ce6e9e5)

#### 4. Get  Products details (GET)
GET http://localhost:8000/product/:id
## we have to provide product id 

![Screenshot (235)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/8f5a0baf-e7c9-4df8-8538-2bca25f675c5)


#### 5.Update a Product by ID (PUT)
PUT http://localhost:8000/update/:id'
 Request Body:{
        "name": "",
        "description": "",
        "price": 
}
### we have to provide product id

![Screenshot (231)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/da8be934-3cde-404e-bde5-4ad2a69dcfff)



#### 6. Update a Product variant by ID (PUT)
 PUT http://localhost:8000/variantupdate/?productid=&varaintid=
#### we have to provide product id and variant id to url
Request Body:  {
        "variantname": "",
        "sku": "",
        "additionalcost": ,
        "stockcount":
}

 

![Screenshot (237)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/6724d97d-d6a4-4e25-9c4f-18c578923bf2)




#### 7. Delete a Product by ID (DELETE)

DELETE http://localhost:8000/delete/:id'
#### we have to provide product id in url to delete the product
 ![Screenshot (233)](https://github.com/rachit3014/REST-API-for-an-e-commerce/assets/84663169/bc41bb1e-60c9-441c-bb77-c9b3ff622513)

 #### 8. Search for Products (GET)
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


