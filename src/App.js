import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProductCard from './productCard';
import { supabase } from './supabaseClient';

// IEVMMvL3YM3zbOu4

// Create the user interface (Navbar, Form to create products, product card)
// Setup supabase, create a table for our products
// Implement the CRUD logic for the products

function App() {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ products, setProducts] = useState([]);

  console.log(name);
  console.log(description);

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10)
      if (error) throw error;
      if (data != null) {
        setProducts(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          name: name,
          description: description
        })
        .single()
        
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(products);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by Cooper Codes</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Product For Supabase Database</h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button onClick={() => createProduct()}>Create Product in Supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {products.map((product) => (
            <Col>
              <ProductCard product={product} /> {/* product={product} */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
