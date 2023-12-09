import {Card, Container, CardBody, Button, Stack} from 'react-bootstrap';
import transfer from '../assets/stu.jpg';
import deadline from '../assets/stu_outside.jpg';
import meet from '../assets/meetings.jpg';
import '../homeStyle.css';

/* Function that implements the layout of the page and the individual navigation cards.
 * Ids and classNames are used to establish CSS from either the separate css file within homepage folder or built-in to the components.
*/
function LinkCards() {
  return (
    <>
    <div id='layout'>
        <h1 className='head-slide'>Transfer Student Portal</h1>
            <Container style={{justifyContent: 'center'}}>
                <Stack direction='horizontal' gap={5}>
                    <Card className='fade-in' id='panel' href="/transfer" border="secondary">
                        <Card.Img variant="top" src={transfer} />
                            <CardBody>
                                <Card.Title>Transfer Credits</Card.Title>
                                <Card.Text>
                                    View classes and curriculum guides that will transfer over from your institution to Aggie Land. 
                                </Card.Text>
                                <Button href="/transfer" variant="outline-warning" className="stretched-link" size="lg">Get Started</Button>
                            </CardBody>
                    </Card>
                    <Card className='fade-in' id='panel' href="/meetings" border="secondary">
                        <Card.Img variant="top" src={meet} />
                        <CardBody>
                            <Card.Title>Meetings</Card.Title>
                                <Card.Text>
                                    View available meeting times and setup appointments with our admission advisors.
                                </Card.Text>
                            <Button href="/meetings" variant="outline-warning" className="stretched-link" size="lg">View Now</Button>
                        </CardBody>
                    </Card>
                </Stack>
            </Container>
            <br />
            <br />
            <Container style={{justifyContent: 'center'}}>
                <Stack direction='horizontal' gap={5}>
                    <Card className='fade-in' id='panel' href="/deadline" border="secondary">
                        <Card.Img variant="top" src={deadline} />
                        <CardBody>
                            <Card.Title>FAQs</Card.Title>
                                <Card.Text>
                                    View our Frequently-Asked Questions to see common questions pertaining to transferring to Aggie Land.
                                </Card.Text>
                            <Button href="/faqs" variant="outline-warning" className="stretched-link" size="lg">Read More</Button>
                        </CardBody>
                    </Card>
                    <Card className='fade-in' id='contact' bg = "warning" border="secondary">
                        <CardBody>
                            <Card.Title style={{'font-weight': "bold", 'font-size': '50px'}}>Contact Us</Card.Title><br style={{margin: 3}}/>
                            <Card.Text> <p style={{'font-size': '20px'}}> <h2>Office of Undergraduate Admissions: </h2> Phone: 336-334-7946 <br /> Email: admissions@ncat.edu</p>
                                <p style={{'font-size': '20px'}}> <h2>Office of Transfer Credit Articulation: </h2> Phone: 336-285-4149 <br /> Email: articulation@ncat.edu </p>
                            </Card.Text>
                        </CardBody>
                    </Card>
                </Stack>           
            </Container>
    </div>
    </>
  );
}

// Exports function to the Home.js file
export default LinkCards;
