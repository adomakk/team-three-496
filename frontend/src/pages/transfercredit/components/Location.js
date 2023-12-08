import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

export default function TransferLocate() {
    return (
        <div style={styles.transfercrumb}>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}} >Transfer Student Portal</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Credits</Breadcrumb.Item>
        </Breadcrumb>
        </div>
    );
};

const styles = {
    transfercrumb: {
        fontSize: 20,
        position: 'relative',
        left: '20px'
    }
}