import Form from 'react-bootstrap/Form';

export default function DropdownTransfer() {
    return (
        <>
        <Form.Select style={styles.dropdown}>
            <option>Select Country</option>
            <option value="1">United States</option>
        </Form.Select>
        <br />
        <Form.Select style={styles.dropdown}>
            <option>Select State</option>
            <option value="1">North Carolina</option>
        </Form.Select>
        <br />
        <Form.Select style={styles.dropdown}>
            <option>Select Institution</option>
            <option value="1">University of North Carolina at Greensboro</option>
        </Form.Select>
        <br />
        <Form.Select style={styles.dropdown}>
            <option>Select Major</option>
            <option value="1">...</option>
        </Form.Select>
        <br />
    </>
    );
};

const styles = {
    dropdown: {
        width: '50%',
        position: 'relative',
        left: '100px',
        backgroundColor: '#ffe680',
        borderColor: '#cca300',
        borderStyle: 'solid',
        textAlign: 'center'
    }
}

