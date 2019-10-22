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
    
We will use Hasura mounted on Heroku to take care of #2 and #3, with minimal setup and almost no code. This comes bundled with a Postgres database as well!

For the front-end form, we will use React. The [create-react-app](https://github.com/facebook/create-react-app) toolchain comes with a ton of boilerplate and minimal setup.

### Setting up the back-end
First off, let us get the Hasura GraphQL engine and Postgres running on Heroku(free tier). This is an easy guide to follow: https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html 

Once deployment is done, let us open the app. The app console shows up. Notice that the GraphQL endpoint is already ready for us. We will be using GraphiQL to test out our queries.

### Data Modeling (Schema)
The Data tab on the top of the console is where we setup our database tables, columns, types, primary keys and relationships.

Our database is pretty straightforward. These are the tables and fields we need:

1. donatedbooks (id, book_title, author_id)
2. authors (id, name)

Easy guide: https://docs.hasura.io/1.0/graphql/manual/getting-started/first-graphql-query.html

We have setup 'id' in both the tables to be Integer(auto-increment)
'donatedbooks.book_title' and 'authors.name' are of type String.

##### Relationships in the schema

'donatedbooks.author_id' is a foreign key that points to 'authors.id'.
Let us set that up following this: https://docs.hasura.io/1.0/graphql/manual/schema/relationships/index.html



