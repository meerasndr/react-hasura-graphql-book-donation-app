import React from 'react';
import axios from 'axios';
import Donationform from './Donationform';

class App extends React.Component {

    addBook = (title,author) => {

    axios({
        url: 'https://book-donation-app.herokuapp.com/v1/graphql',
        method: 'post',
        data: { query:
        `mutation{
            insert_donatedbooks(objects:[
            {
                book_title: "${title}",
                myauthor:{
                data: {
                    name: "${author}"
                }
                }
            }
        ]){ affected_rows}
      }`
    }
      }).then((result) => {
        console.log(result.data)
      });
}

render(){
    return(
        <div>
           <Donationform addBook={this.addBook} />
        </div>
    )
    }
}
export default App;