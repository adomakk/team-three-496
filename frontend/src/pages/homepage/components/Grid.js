import {Card, Container, Row, CardBody, Button, Stack} from 'react-bootstrap';
import transfer from '../assets/stu.jpg';
import deadline from '../assets/stu_outside.jpg';
import meet from '../assets/meetings.jpg';

function LinkCards() {
  return (
    <>
    <div style={styles.cardlayout}>
        <h1 style={styles.header}>Transfer Student Portal</h1>
        <Row lg="2">
            <Container className = "mt-3" style={{display: 'flex', width: '100%', maxWidth: '35%', justifyContent: 'center'}}>
                <Stack gap={2}>
                    <Card href="/transfer" border="secondary" className='shadow-lg' style={styles.card}>
                        <Card.Img variant="top" src={transfer} />
                            <CardBody>
                                <Button href="/transfer" variant="outline-warning" className="stretched-link" size="lg">Transfer Credits</Button>
                            </CardBody>
                    </Card>
                    <Card href="/meetings" border="secondary" className='shadow-lg' style={styles.card}>
                        <Card.Img variant="top" src={meet} />
                        <CardBody>
                            <Button href="/Meetings" variant="outline-warning" className="stretched-link" size="lg">Meetings</Button>
                        </CardBody>
                    </Card>
                </Stack>
            </Container>
            <Container className = "mt-3" style={{display: 'flex', width: '100%',  maxWidth: '35%', justifyContent: 'center'}}>
                <Stack gap={2}>
                    <Card href="/deadline" border="secondary" className='shadow-lg' style={styles.card}>
                        <Card.Img variant="top" src={deadline} />
                        <CardBody>
                            <Button href="/deadline" variant="outline-warning" className="stretched-link" size="lg">Deadlines</Button>
                        </CardBody>
                    </Card>
                </Stack>           
            </Container>
            <Card bg = "warning" border="secondary" className='shadow-lg' style={styles.cardcontact}>
                <CardBody>
                    <Card.Title style={{'font-weight': "bold", 'font-size': '50px'}}>Contact Us</Card.Title><br style={{margin: 5}}/>
                        <Card.Text> <p style={{'font-size': '20px'}}> <h2>Office of Undergraduate Admissions: </h2> Phone: 336-334-7946 <br /> Email: admissions@ncat.edu</p>
                            <p style={{'font-size': '20px'}}> <h2>Office of Transfer Credit Articulation: </h2> Phone: 336-285-4149 <br /> Email: articulation@ncat.edu </p>
                    </Card.Text>
                </CardBody>
            </Card>
        </Row>
    </div>
    </>
  );
}

export default LinkCards;

const styles = {
    card: {
        position: 'relative',
        top: '30px',
        width: '30rem',
        height: '35rem'
    },

    cardlayout: {
        display: 'block',
        width: '1600px',
        height: '1400px',
        backgroundColor: '#FFFAFA',
        margin: 'auto',
        boxShadow: '0 0 20px 3px #262626'
    },

    cardcontact: {
        width: '55rem',
        height: "25rem",
        position: 'relative',
        left: '900px',
        bottom: '500px'
    },

    header: {
        textAlign: 'left',
        position: 'relative',
        left: '50px',
        top: '20px',
        fontWeight: 'bold',
        color: 'darkBlue',
        textShadow: '2px 2px 2px lightgray'
    }
}   