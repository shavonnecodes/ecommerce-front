import React from 'react';
import { ProductsList } from './ProductsList';
import { ProductRepository } from "../api/ProductRepository";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ProductsPage extends React.Component {

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

                <Row>
                    <Col>
                        <div className="comm-header-logo">
                            This will be where the logo will go!
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <Link to="/">OUR STORY</Link>
                    </Col>
                    <Col>
                        <NavDropdown title="CAKES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">PRODUCTS</NavDropdown.Item>
                            <NavDropdown.Item href="#">FLAVORS</NavDropdown.Item>
                            <NavDropdown.Item href="#">CARE INSTRUCTIONS</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col>
                        <NavDropdown title="OCCASIONS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">ALL OCCASIONS</NavDropdown.Item>
                            <NavDropdown.Item href="#">BIRTHDAYS</NavDropdown.Item>
                            <NavDropdown.Item href="#">WEDDINGS</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col>
                        <Link to="#">FRANCHISING</Link>
                    </Col>
                    <Col>
                        <Form inline>
                            <FormControl type="text" placeholder="FIND A BAKERY" className="mr-sm-2" />
                        </Form>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-page-banner-msg">
                            ENJOY ALL OF OUR BUNDT CAKE PRODUCTS
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-page-blurb-msg">
                            OUR PROCESS
                            <br></br>
                            At Nothing Bundt Cakes our goal is to create a cake that not only reminds you of home, but also opens you to a new world.
                            <br></br>
                            And while that's no easy request, the handcrafted recipes of our founders, Dena Tripp and Debbie Shwetz, are more than up
                            <br></br>
                            to the task. Each recipe only uses the finest ingredients; real eggs, butter and cream cheese, all to bring you Bundt Cake
                            <br></br>
                            perfection. Enjoy!
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-order-button">
                            <Button variant="info">Order Online</Button>{' '}
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-products-title">
                            WHAT WE OFFER
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="comm-products-list">
                            <ProductsList products={this.state.products} />
                        </div>
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