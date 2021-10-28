import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import bannerLogo from "../../../images/Tourde-logos_transparent.png";
const Header = () => {
  return (
    <div>
      <>
        <Navbar
          style={{ backgroundColor: "#529E8A" }}
          sticky='top'
          collapseOnSelect
          expand='lg'
        >
          <Container >
            <Navbar.Brand className='text-warning' as={HashLink} to='/'>
              <img src={bannerLogo} style={{ width: "250px" }} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
              <Nav.Link className='text-white' as={HashLink} to='/home#home'>
                Home
              </Nav.Link>
              <Nav.Link
                className='text-white'
                as={HashLink}
                to='/home#services'
              >
                Services
              </Nav.Link>
              <Nav.Link className='text-white' as={HashLink} to='/about'>
                About
              </Nav.Link>
              <Nav.Link className='text-white' as={HashLink} to='/doctor'>
                Doctor
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
