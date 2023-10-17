import {Card, Container, Row, CardBody, Button, Stack} from 'react-bootstrap';
import transfer from '../assets/stu.jpg';
import deadline from '../assets/stu_outside.jpg';
import meet from '../assets/meetings.jpg';

function LinkCards() {
  return (
    <>
    <Row lg="2">
        <Container className = "mt-3" style={{display: 'flex', width: '100%', maxWidth: '35%', justifyContent: 'center'}}>
                <Stack gap={2}>
                    <Card href="/transfer" border="secondary" className='shadow-lg' style={{ width: '40rem' , height: "40rem"}}>
                        <Card.Img variant="top" src={transfer} />
                            <CardBody>
                                <Button href="/transfer" variant="outline-warning" className="stretched-link" size="lg">Transfer Credits</Button>
                            </CardBody>
                    </Card>
                    <Card href="/meetings" border="secondary" className='shadow-lg' style={{ width: '40rem' , height: "40rem"}}>
                        <Card.Img variant="top" src={meet} />
                        <CardBody>
                            <Button href="/Meetings" variant="outline-warning" className="stretched-link" size="lg">Meetings</Button>
                        </CardBody>
                    </Card>
                </Stack>
        </Container>
        <Container className = "mt-3" style={{display: 'flex', width: '100%',  maxWidth: '35%', justifyContent: 'center'}}>
                <Stack gap={2}>
                    <Card href="/deadline" border="secondary" className='shadow-lg' style={{ width: '40rem' , height: "40rem"}}>
                        <Card.Img variant="top" src={deadline} />
                        <CardBody>
                            <Button href="/deadline" variant="outline-warning" className="stretched-link" size="lg">Deadlines</Button>
                        </CardBody>
                    </Card>
                    <Card bg = "warning" border="secondary" className='shadow-lg' style={{ width: '40rem' , height: "25rem"}}>
                        <CardBody>
                            <Card.Title style={{'font-weight': "bold", 'font-size': '50px'}}>Contact Us</Card.Title><br style={{margin: 5}}/>
                            <Card.Text> <p style={{'font-size': '20px'}}> <h2>Office of Undergraduate Admissions: </h2> Phone: 336-334-7946 <br /> Email: admissions@ncat.edu</p>
                                <p style={{'font-size': '20px'}}> <h2>Office of Transfer Credit Articulation: </h2> Phone: 336-285-4149 <br /> Email: articulation@ncat.edu </p>
                            </Card.Text>
                        </CardBody>
                    </Card>
                </Stack>             
        </Container>
    </Row>
    </>
  );
}

export default LinkCards;