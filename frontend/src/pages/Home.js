import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavbarAGGIE from './homepage/components/Navbar.js';
import CampusIMG from './homepage/components/Card.js';
import LinkCards from './homepage/components/Grid.js';

/* Main function that calls the exported functions from the homepage/components/ folder.
 * Imports functions and calls them to display components.
*/
export default function Home() {
    return (
      // overflowX prevents horizontal scrolling.
      <div style={{overflowX: 'hidden', backgroundColor: '#191970'}}>
        <NavbarAGGIE />
        <CampusIMG />
        <LinkCards />
      </div>
    );
}