import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import './App.css'; // Custom styles

const App = () => {
  return (
    <div  className='all'>
      <Navbar bg="dark" variant="dark" expand="lg"  >
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: '30px' }}>DA Gupta & Co.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ fontSize: '20px' }}>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni7ffy5J9MSeg0dnUU2Uv_avEhjUBOw2mUA&s"/> */}
              <h1 style={{ fontSize: '60px' }} > DA GUPTA & CO. </h1>
              <p style={{ fontSize: '20px' }}>Professional Accounting Services Tailored for You</p>
            </Col>
          </Row>
        </Container>
      </header>

      <section id="about" className="py-5">
        <Container>
          <Row>
            <Col>
              <h2> Who We Are</h2>
              <p style={{ fontSize: '23px' }}>Since 1995, we at DA Gupta & Co. we are dedicated to providing exceptional accounting and financial services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of Chartered Accountants brings a wealth of knowledge and a commitment to excellence in every aspect of our work.</p>
            </Col>
            <Col md={6}>
              <img src="https://t4.ftcdn.net/jpg/01/36/64/11/360_F_136641191_fYmeLwzvxYIprfMzZERKWew3cMjamdQH.jpg" alt="About Us" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="services" className="bg-light py-5">
        <Container>
          <h2 className="text-center">Our Services</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/tax-return-financial-form-concept_53876-132735.jpg" />
                <Card.Body>
                
                  <p style={{ fontSize: '20px' }}> we understand that tax season can be stressful and confusing. Our comprehensive tax return services are designed to simplify the process and ensure that you maximize your tax benefits. With our expert guidance and user-friendly platform, you can confidently navigate your tax return, knowing that your financial information is in safe hands.</p>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2024/3/399562136/YM/IX/VQ/47080813/auditing-services.jpg" />
                <Card.Body>
                  
                  <p style={{ fontSize: '20px' }}>
                  We offer various types of audits, including internal, external, compliance, and forensic audits, each tailored to address specific needs. Our audit process involves careful planning, thorough examination of records and controls, detailed reporting, and follow-up discussions to implement. We highlight our expertise, methodology, and positive client testimonials to reassure potential clients of our capabilities.</p>
                
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3EL7nABQtqhxgeQmAty9q6fKmO6oPnhpQ&s" />
                <Card.Body>
                 
                  <p style={{ fontSize: '20px' }}>
                  We offer comprehensive risk management services designed to safeguard your assets, operations, and reputation. Our process begins with a thorough risk assessment to pinpoint vulnerabilities and threats. We then develop and implement customized risk mitigation strategies, including internal controls, compliance measures, and contingency planning. By leveraging our expertise and industry knowledge, we help you navigate complex risk landscapes and enhance your organizational resilience. </p>
             
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="contact" >
        <Container>
          <h2 style={{ fontSize: '40px' }} className="text-center">Contact Us</h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <form>
                <div className="form-group">
                  <label style={{ fontSize: '30px' }} htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div style={{ fontSize: '30px' }} className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '30px' }}  htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="contact py-5">
  <Container>
    <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Contact Us</h2>
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <form>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1.25rem' }} htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1.25rem' }} htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1.25rem' }} htmlFor="phone">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1.25rem' }} htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </Col>
    </Row>
  </Container>
</section>

      <section>
      <footer  className="bg-dark text-light py-3 text-center">
        <Container>
          <p>&copy; 2024 CA Firm. All Rights Reserved.</p>
        </Container>
      </footer>
      </section>
    </div>
  );
};

export default App;
