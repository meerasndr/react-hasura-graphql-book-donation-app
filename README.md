# Simple App based on Hasura's GraphQL Engine

### What are we building?
Acme Public Library needs to stock up on books, and they are looking for book donors. We are building a single-page app where book donors can enter details of the book and add it to Acme's database.

### Technical overview
We will be using [GraphQL](https://learn.hasura.io/graphql/react/intro-to-graphql) to send book data entered by the donor to the server and database. If you are new to GraphQL, we suggest that you acquaint yourself with some basic terminology from the above link.

### Breaking down the App
Let us divide the app into three broad sections:

    1. User facing form (collects book data and sends out a GraphQL Mutation)
    2. Server that can handle GraphQL requests
    3. Database to store book data
    
We will use Hasura mounted on Heroku to take care of #2 and #3, with minimal setup and almost no code. 

For the front-end form, we will use React. The [create-react-app](https://github.com/facebook/create-react-app) toolchain comes with a ton of boilerplate and minimal setup.