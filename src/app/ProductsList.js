import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


export const ProductsList = props => {

    return <>
        <CardDeck bsPrefix="comm-carddeck">
            {props.products.map(product =>
                <Card key={product.id} border="light" bsPrefix="comm-card">
                    <Image src={`${product.productImage}`} rounded id="comm-img"/>
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                            {product.productServingSize}
                            <br></br>
                            {product.productDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </CardDeck>
    </>
}

