import React from 'react';
import { ProductsList } from './ProductsList';
import { ProductRepository } from "../api/ProductRepository";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ProductsPage extends React.Component {

    productRepository = new ProductRepository();

    state = {
        products: []
    };

    render() {
        return <>
            <Container fluid>
                <Row>
                    <Col>
                        This will be header info btdubs.
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ProductsList products={this.state.products} />
                    </Col>
                </Row>
            </Container>
        </>
    }

    componentDidMount() {
        this.productRepository.getAllProducts()
            .then(products =>
                this.setState({
                    products: products
                }));
    }
}