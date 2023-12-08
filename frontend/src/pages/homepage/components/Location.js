import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function HomeLocate() {
    return (
        <div style={{fontSize: 30, position: 'relative', left:'40px', top:'10px'}}>
        <Breadcrumb>
            <Breadcrumb.Item active style={{color: 'DarkBlue', fontWeight: 'bold', textShadow: '2px 2px 2px lightgray'}}>Transfer Student Portal</Breadcrumb.Item>
        </Breadcrumb>
        </div>
    );
};