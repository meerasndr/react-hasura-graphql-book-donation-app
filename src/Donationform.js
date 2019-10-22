import React from 'react';
class Donationform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookTitle: "",
            authorName: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name] : value
        })
    }
    handleSubmit = event => {
        this.props.addBook(this.state.bookTitle, this.state.authorName);
        this.setState({bookTitle:'', authorName:''});
        alert("Your book "+this.state.bookTitle+" has been donated. Thank you for your contribution to the library!");
    }

    render(){

        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center mb-4">Acme Public Library</h2>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card rounded-0 shadow-lg">
                                
                                <div className="card-header bg-light">
                                    <h3 className="mb-0">Donate Books</h3>
                                </div>
                                
                                <div className="card-body">
                                    <form className="form">

                                        <div className="form-group">
                                            <label htmlFor="idbooktitle">
                                            Book Title:  
                                            </label> 
                                            <input
                                                name = "bookTitle"
                                                id = "idbooktitle"
                                                type = "text"
                                                className = "form-control form-control-lg rounded-0"
                                                onChange = {this.handleInputChange}
                                                value = {this.state.bookTitle} 
                                                />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="idauthorname">
                                                Author:
                                            </label>
                                            <input
                                                name = "authorName"
                                                id = "idauthorname"
                                                type = "text"
                                                className = "form-control form-control-lg rounded-0"
                                                onChange = {this.handleInputChange}
                                                value = {this.state.authorName} 
                                                />
                                        </div>

                                        <button
                                            type = "button"
                                            className = "btn btn-success btn-lg float-right"
                                            onClick = {this.handleSubmit}
                                            disabled={!(this.state.authorName && this.state.bookTitle)}>
                                            Donate
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
    }
}
export default Donationform;