import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
// import { Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BooksCard from './BooksCard';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      
    }
  }
  componentDidMount = async () => {
    const {user}= this.props.auth0;

    let BooksResult = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/books?email=${user.email}`)
    console.log(BooksResult.data)
    this.setState({
      booksData: BooksResult.data,
      
    })
  }
  render() {
    return (
      <div>

      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        
      </Jumbotron>
      {this.state.booksData.length > 0 && (this.state.booksData.map((book,i)=> <BooksCard book ={book} key={i} />
      ))}

      </div>
    )
  }
}


export default withAuth0 (MyFavoriteBooks);






