import React from 'react';
import axios from 'axios';
import Donationform from './Donationform';

class App extends React.Component {
    
    //below function passes book data(title, author) to the backend via GraphQL
    addBook = (title,author) => {

    axios({                                                        //HTTP request sent via Axios
        url: 'https://book-donation-app.herokuapp.com/v1/graphql', //GraphQL Endpoint created using Hasura, deployed on Heroku 
        method: 'post',                                            //Using UPSERT to avoid duplication of author names
        data: { query:
        `mutation upsert_donatedbooks {  
            insert_donatedbooks(objects:[
              {
                book_title: "${title}",
                myauthor:{
                  data: {
                    name: "${author}"
                  },
            on_conflict: {
                constraint: authors_name_key,
                update_columns: [name]
            }     
                }
              }
            ]
            )
            {affected_rows}
          }`
    }
      }).then((result) => {
        console.log(result.data)
      });
}



//Render and pass props
render(){
    return(
        <div>
           <Donationform addBook={this.addBook} />
        </div>
    )
    }
}
export default App;