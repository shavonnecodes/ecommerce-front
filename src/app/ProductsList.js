import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';


export const ProductsList = props => {

    return <>
        <CardDeck bsPrefix="comm-carddeck">
            {props.products.map(product =>
                <Card key={product.id} border="light" bsPrefix="comm-card">
                    <Image src={`${product.productImage}`} rounded id="comm-img"/>
                    <Card.Body>
                        <Card.Title id="comm-card-title"><h5>{product.productName}</h5></Card.Title>
                        <Card.Text>
                            <div className="comm-card-serving">{product.productServingSize}</div>
                            <br></br>
                            <div className="comm-card-description">{product.productDescription}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </CardDeck>
    </>
}

