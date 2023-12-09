import Form from 'react-bootstrap/Form';
import '../transferStyle.css';

/* Function that implements dropdown boxes into the page.
 * References .css file for styling via "dropdown" id.
*/
function DropdownTransfer() {
    return (
        <>
        <Form.Select id='dropdown'>
            <option>Select Country</option>
            <option value="1">United States</option>
        </Form.Select>
        <br />
        <Form.Select id='dropdown'>
            <option>Select State</option>
            <option value="1">North Carolina</option>
        </Form.Select>
        <br />
        <Form.Select id='dropdown'>
            <option>Select Institution</option>
            <option value="1">University of North Carolina at Greensboro</option>
        </Form.Select>
        <br />
        <Form.Select id='dropdown'>
            <option>Select Major</option>
            <option value="1">...</option>
        </Form.Select>
        <br />
    </>
    );
};

// Exports function to the TransferCredit.js file
export default DropdownTransfer;