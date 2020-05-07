import React, { Component } from "react"
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./BookStore.css";
import Book from "./Book";

class BookStore extends Component{

    constructor(props){
        super(props);
    }


    render(){
        const genreItems = this.props.sections.map((item,indx) => {
            return (<div className="genreItems" key={indx}>
                <Alert variant="danger">
                    <Alert.Heading><h2><b>{item}</b></h2></Alert.Heading>
                </Alert>
                <Book category={this.props.genre[indx]}/>
            </div>)
        } )
        


        return(           
            <div>
                <aside>
                    {genreItems}
                </aside>
            </div>  
        )
    }
}
export default BookStore;