# Simple App based on Hasura's GraphQL Engine

### What are we building?
Acme Public Library needs to stock up on books, and they are looking for book donors. We are building a single-page app where book donors can enter details of the book and add it to Acme's database.

### Technical overview
We will be using GraphQL to send book data from a form to the server+database. If you are new to GraphQL, we suggest that you acquaint yourself with some basic terminology [here](https://learn.hasura.io/graphql/react/intro-to-graphql)

### Breaking down the App
Let us divide the app into three broad sections:

    1. User facing form (collects book data and sends out a GraphQL Mutation)
    2. Server that can handle GraphQL requests
    3. Database to store book data
    
We will use Hasura mounted on Heroku to take care of #2 and #3, with minimal setup and almost no code. *This comes bundled with a Postgres database as well!*

For the front-end form, we will use React. The [create-react-app](https://github.com/facebook/create-react-app) toolchain comes with a ton of boilerplate and minimal setup.

### Setting up the back-end
First off, let us get the Hasura GraphQL engine and Postgres running on Heroku(free tier). This is an easy guide to follow: https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html 

Once deployment is done, open up the app to see the console. 
Notice that the GraphQL endpoint is already ready for us. We will be using *GraphiQL* to test out our queries.

### Data Modeling (Schema)
The Data tab on the top of the console is where we setup our database tables, columns, types, primary keys and relationships.

Our database is pretty straightforward. These are the tables and fields we need:

    1. donatedbooks (id, book_title, author_id)
    2. authors (id, name)

Easy guide: https://docs.hasura.io/1.0/graphql/manual/getting-started/first-graphql-query.html

We have setup 'id' in both the tables to be Integer(auto-increment)
'donatedbooks.book_title' and 'authors.name' are of type String.

#### Relationships in the schema

'donatedbooks.author_id' is a foreign key that points to 'authors.id'.

Let us set that up based on this: https://docs.hasura.io/1.0/graphql/manual/schema/relationships/index.html

Queries and Mutations can be tested out from the GraphiQL console.

Once we are sure that all of this works well from GraphiQL, let's move on to our front-end.

### Setting up the Front-end

We assume that you have a basic understanding of Node, React, ReactDOM and HTTP requests. Otherwise, it is highly recommended that you familiarize yourself with these topics.

You should already have [Node](https://nodejs.org/en/) installed on your computer.

We will start by setting up the create-react-app boilerplate. And, then installing the necessary packages. In Terminal or Command Prompt, we use these commands:
```
npx create-react-app [app_name]
cd [app_name]
npm install axios bootstrap
```

The preferred method to connect our front-end to the GraphQL server is by using the Apollo Client in our app. But, to keep things simple, we will use a simple HTTP request using Axios.

*Note that Apollo Client has several advantages over HTTP when it comes to abstraction and authentication. Feel free to try it out:* 
https://learn.hasura.io/graphql/react/apollo-client

We will use the bootstrap library just to keep page styling simple and elegant.




