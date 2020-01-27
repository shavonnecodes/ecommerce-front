import React from 'react';
import { ProductRepository } from "../api/ProductRepository";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Homepage extends React.Component {

    productRepository = new ProductRepository();

    state = {
        products: []
    };

    render() {
        return <>
            <Container fluid>
                <Row id="comm-header-banner">
                    <Col>
                        <div className="comm-social-header">
                            <FontAwesomeIcon icon={['fab', 'twitter']} id="comm-social-icon" />
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} id="comm-social-icon" />
                            <FontAwesomeIcon icon={['fab', 'pinterest-p']} id="comm-social-icon" />
                            <FontAwesomeIcon icon={['fab', 'instagram']} id="comm-social-icon" />
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-header-logo">
                            This will be where the logo will go!
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col bsPrefix="comm-link">
                        <Link to="/">OUR STORY</Link>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <NavDropdown title="CAKES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">PRODUCTS</NavDropdown.Item>
                            <NavDropdown.Item href="#">FLAVORS</NavDropdown.Item>
                            <NavDropdown.Item href="#">CARE INSTRUCTIONS</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <NavDropdown title="OCCASIONS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">ALL OCCASIONS</NavDropdown.Item>
                            <NavDropdown.Item href="#">BIRTHDAYS</NavDropdown.Item>
                            <NavDropdown.Item href="#">WEDDINGS</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <Link to="#">FRANCHISING</Link>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <Form inline>
                            <FormControl type="text" placeholder="FIND A BAKERY" className="mr-sm-2" />
                        </Form>
                    </Col>
                </Row>


                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-slideshow">
                            <Image src="https://placekitten.com/980/500" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="comm-home-banner">
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-image-row">
                    <Col bsPrefix="comm-image-col">
                        <a href="#"><Image src="https://placekitten.com/303/190" /></a>
                    </Col>
                    <Col bsPrefix="comm-image-col">
                        <a href="/products"><Image src="https://placekitten.com/303/190" /></a>
                    </Col>
                    <Col bsPrefix="comm-image-col">
                        <a href="#"><Image src="https://placekitten.com/303/190" /></a>
                    </Col>
                </Row>

                <Navbar expand="lg" sticky="bottom" id="comm-footer-background">
                    <Container id="comm-footer-links">
                        <Nav.Link>OUR STORY</Nav.Link> | <Nav.Link href="/products">CAKES</Nav.Link> | <Nav.Link>FLAVORS</Nav.Link> | <Nav.Link>OCCASIONS</Nav.Link> |
                        <Nav.Link>FRANCHISING</Nav.Link> | <Nav.Link>BAKERIES</Nav.Link> | <Nav.Link>PHOTOS</Nav.Link> | <Nav.Link>CAREERS</Nav.Link> |
                        <Nav.Link>GIFT CARD</Nav.Link> | <Nav.Link>CONTACT US</Nav.Link> | <Nav.Link>PROP 65 INFO</Nav.Link> | <Nav.Link>PRIVACY POLICY</Nav.Link>
                    </Container>
                </Navbar>

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