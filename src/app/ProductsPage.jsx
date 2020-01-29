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
import Image from 'react-bootstrap/Image';
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
                            <div className="bookmark"></div>
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-header-logo">
                            <a href="/"><Image src="https://i.imgur.com/RCAX4s4.png" /></a>
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col bsPrefix="comm-link">
                        <Link to="/" id="comm-href"><h5>OUR STORY</h5></Link>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <h5>
                        <NavDropdown title="CAKES" id="basic-nav-dropdown" id="comm-href">
                            <NavDropdown.Item href="/products" id="comm-href"><h5>PRODUCTS</h5></NavDropdown.Item>
                            <NavDropdown.Item href="#" id="comm-href"><h5>FLAVORS</h5></NavDropdown.Item>
                            <NavDropdown.Item href="#" id="comm-href"><h5>CARE INSTRUCTIONS</h5></NavDropdown.Item>
                        </NavDropdown>
                        </h5>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <h5>
                        <NavDropdown title="OCCASIONS" id="basic-nav-dropdown" id="comm-href">
                            <NavDropdown.Item href="/products" id="comm-href"><h5>ALL OCCASIONS</h5></NavDropdown.Item>
                            <NavDropdown.Item href="#" id="comm-href"><h5>BIRTHDAYS</h5></NavDropdown.Item>
                            <NavDropdown.Item href="#" id="comm-href"><h5>WEDDINGS</h5></NavDropdown.Item>
                        </NavDropdown>
                        </h5>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <Link to="#" id="comm-href"><h5>FRANCHISING</h5></Link>
                    </Col>
                    <Col bsPrefix="comm-link">
                        <Form inline>
                            <FormControl type="text" placeholder="FIND A BAKERY" className="mr-sm-2" id="comm-search-bar" />
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="comm-products-banner">
                            <h2 className="comm-products-bannertext">ENJOY ALL OF OUR BUNDT CAKE PRODUCTS</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="comm-empty-div"></div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="comm-products-blurb-msg">
                            <p className="comm-p-border"></p>
                            <h4>OUR PROCESS</h4>
                            <div className="comm-p-div">
                                <p id="comm-p-text">At Nothing Bundt Cakes our goal is to create a cake that not only reminds you of home, but also opens you to a new world.
                                And while that's no easy request, the handcrafted recipes of our founders, Dena Tripp and Debbie Shwetz, are more than up
                                to the task. Each recipe only uses the finest ingredients; real eggs, butter and cream cheese, all to bring you Bundt Cake
                            perfection. Enjoy!</p>
                            </div>
                            <p className="comm-p-border"></p>
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-order-div">
                            <Button bsPrefix="comm-order-button"><h5>ORDER ONLINE</h5></Button>{' '}
                        </div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div className="comm-products-title">
                            <h4>WHAT WE OFFER</h4>
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

                <Row>
                    <Col>
                        <div className="comm-empty-div-products"></div>
                    </Col>
                </Row>

                <Row bsPrefix="comm-row">
                    <Col>
                        <div>
                            <Image src="https://i.imgur.com/gkaYBQl.png" id="comm-gift-image"/>
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
                <div className="comm-footer-stripe"></div>
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