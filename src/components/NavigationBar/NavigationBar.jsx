import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import { SiFlightaware } from "react-icons/si";
import "./NavigationBar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFlights, setFlightDataNull } from '../../actions/fetchFlight';

function NavigationBar(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const { hero, onHeroChange } = props;

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setOpenNav(false);
  };

  const handleClickFlight = () => {
    onHeroChange(1);
    navigate("/")
  };

  const handleClickAirline = () => {
    onHeroChange(2);
    dispatch(setFlightDataNull());
    navigate("/")
  };

  const handleClickBrand = () => {
    navigate("/")
  };


  return (
    <MDBNavbar expand='lg' light className='navigator rounded-5 my-4 shadow-lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand
          className='title p-1 fs-3 fw-light'
          style={{ color: "dimgray" }}
          onClick={handleClickBrand}
          href='/'
        >
          <SiFlightaware style={{ width: "100", height: "50" }} />
          Flight Tracker
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleNav}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav className='d-flex justify-content-end ms-start fs-4 fw-light mx-3'>
            <MDBNavbarItem>
              <MDBNavbarLink
                className="mx-5"
                onClick={() => { handleLinkClick('Home'); handleClickFlight(); }}
                aria-current={activeLink === 'Home' ? 'page' : undefined}
              >
                Search by Airport
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => { handleLinkClick('Features'); handleClickAirline(); }}
                aria-current={activeLink === 'Features' ? 'page' : undefined}
              >
                Search by Airline
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavigationBar;
