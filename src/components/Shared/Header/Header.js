import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hook/useAuth";
import bannerLogo from "../../../images/Tourde-logos_transparent.png";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <>
        <Navbar
          style={{ backgroundColor: "#529E8A" }}
          sticky='top'
          collapseOnSelect
          expand='lg'
        >
          <Container>
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
              {user?.email && (
                <Nav.Link className='text-white' as={HashLink} to='/order'>
                  My Order
                </Nav.Link>
              )}
              {user?.email ? (
                <Nav.Link onClick={logOut} className='text-black'>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={HashLink} className='text-black' to='/login'>
                  Login
                </Nav.Link>
              )}

              {user?.photoURL && (
                <Navbar.Brand className='text-warning'>
                  <img
                    className='img-thumbnail'
                    src={user?.photoURL}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    alt=''
                  />
                </Navbar.Brand>
              )}
              <Navbar.Text> {user?.displayName}</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
