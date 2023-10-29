import React from 'react';
import TransferLocate from './transfercredit/components/Location';
import DropdownTransfer from './transfercredit/components/Dropdown_Transfer';
import NavbarAGGIE from './homepage/components/Navbar';
import ViewGuide from './transfercredit/components/NCAT_Curriculum_Display';

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