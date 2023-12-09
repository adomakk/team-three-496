import React from 'react';
import TransferLocate from './transfercredit/components/Location';
import DropdownTransfer from './transfercredit/components/Dropdown_Transfer';
import NavbarAGGIE from './homepage/components/Navbar';
import ViewGuide from './transfercredit/components/NCAT_Curriculum_Display';

/* Main function that calls the exported functions from the transfercredit/components/ folder and the navigation bar from the homepage/components/ folder.
 * Imports functions and calls them to display components.
 * Function is then exported into the main App.js file.
*/
export default function Transfer() { 
    return (
        <div style={{overflowX: 'hidden'}}>
            <NavbarAGGIE />
            <br/>
            <TransferLocate />
            <h1 style={{position: 'relative', right: '750px', color: 'DarkBlue', fontWeight: 'bold', textShadow: '2px 2px 2px lightgray'}}>Transfer Credits</h1>
            <br/>
            <DropdownTransfer />
            <ViewGuide />
        </div>
    );
};