import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavbarAGGIE from './homepage/components/Navbar.js';
import CampusIMG from './homepage/components/Card.js';
import LinkCards from './homepage/components/Grid.js';


export default function Home() {
    return (
      <div>
        <NavbarAGGIE />
        <CampusIMG />
        <LinkCards />
      </div>
    );
}