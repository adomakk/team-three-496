import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import '../transferStyle.css';

// Function that implements navigation text to the page.
function TransferLocate() {
    return (
        // References imported .css file for styling via "transfercrumb" class name.
        <div className='transfercrumb'>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}} >Transfer Student Portal</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Credits</Breadcrumb.Item>
        </Breadcrumb>
        </div>
    );
};

// Exports function to the TransferCredit.js file
export default TransferLocate;