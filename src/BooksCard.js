import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';


class BooksCard extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.book.title}</Card.Title>
                            <Card.Text>
                                {this.props.book.description}
                            </Card.Text>
                            <Card.Text>
                                {this.props.book.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}



export default BooksCard;