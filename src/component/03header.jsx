import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav, 
} from "mdb-react-ui-kit";
import { Link, Outlet} from "react-router-dom";

export default function Header01() {

  const Menudata = { "/home": "Home", '/aboutus': "About", '/apicall': "API", '/login': "Login", '/login02': "Login 02" };
  
  const Menudatalist = Object.entries(Menudata).map(([ky, val], i) => {
    // console.log("key", ky, "value", val);
    return ( 
        <Link key={i} className=" nav-link" to={ky}>{val} </Link>
    );
  });

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light" className="fs-5">
        <MDBContainer fluid>
          <MDBNavbarNav>
            {Menudatalist}           
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}