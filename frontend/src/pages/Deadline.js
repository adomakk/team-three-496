// Faqs.jsx
import React from "react";
import NavbarAGGIE from './homepage/components/Navbar.js';
import { Container, Row, Col } from "react-bootstrap";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Deadline = () => {
    // In Future, they will come from backend
    const faqs = [
        {
            question: "1. What services does the Transfer Student Portal offer?",
            answer:
                "The Transfer Student Portal provides essential services for incoming transfer students. You can use the portal to track your application, access orientation materials, and connect with academic resources tailored for transfer students.",
        },
        {
            question: "2. How can I apply as a transfer student?",
            answer:
                "To apply as a transfer student, please visit the university’s official admissions page. You will find detailed information on the application process, required documents, and key deadlines.",
        },
        {
            question: "3. Who are the admission advisers, and how can I contact them?",
            answer:
                'Our admission advisers are dedicated professionals here to guide you through the admission process. You can contact them via email or phone for personalized assistance. Visit the "Admissions" section on our website for contact details.',
        },
        {
            question: "4. What resources are available for transfer students?",
            answer:
                'North Carolina Agricultural and Technical State University offers various resources to support transfer students. Explore the "Transfer Student Resources" section to find information on academic advising, financial aid, and campus facilities available to you.',
        },
        {
            question: "5. How do I check the status of my application?",
            answer:
                "You can check the status of your application by logging into the Transfer Student Portal. The portal provides real-time updates on the status of your application, including any outstanding requirements or documents needed for processing.",
        },
        {
            question: "6. What scholarships are available for transfer students?",
            answer:
                'We offer a range of scholarships specifically for transfer students. Explore the "Scholarships" section on our website to learn about eligibility criteria, application processes, and deadlines for these opportunities.',
        },
        {
            question: "7. Is on-campus housing available for transfer students?",
            answer:
                'Yes, on-campus housing is available for transfer students. Visit the "Housing" section on our website for information on residence halls, application procedures, and housing options for transfer students.',
        },
        {
            question: "8. How can I transfer my credits to N.C. A&T?",
            answer:
                'To transfer credits, you will need to submit your official transcripts from your previous institutions. Our admissions team will evaluate your transcripts to determine transferable credits. Visit the "Transfer Credit" section for detailed information.',
        },
        {
            question: "9. Are there orientation programs for transfer students?",
            answer:
                "Yes, we offer orientation programs specifically designed for transfer students. These programs provide valuable information about campus life, academic expectations, and resources available to help you succeed at N.C. A&T.",
        },
        {
            question: "10. Can I meet with academic advisers before transferring?",
            answer:
                'Absolutely! You can schedule a meeting with academic advisers to discuss your academic goals, course requirements, and transfer process. Visit the "Advising" section on our website to find information on scheduling an appointment.',
        },
        {
            question: "11. What majors and programs are offered for transfer students?",
            answer:
                'N.C. A&T offers a wide range of majors and programs for transfer students. Explore the "Academics" section on our website to discover the diverse academic opportunities available to you.',
        },
        {
            question: "12. How can I get involved in campus activities as a transfer student?",
            answer:
                'There are numerous campus activities and student organizations for transfer students to join. Explore the "Student Life" section on our website to learn about clubs, events, and opportunities for involvement.',
        },
        {
            question: "13. What health and wellness services are available on campus?",
            answer:
                'We provide comprehensive health and wellness services for all students. Visit the "Health Services" section on our website to learn about medical care, counseling services, and wellness programs available on campus.',
        },
        {
            question: "14. Can I use campus facilities as a transfer student?",
            answer:
                'Yes, transfer students have access to all campus facilities, including libraries, recreational centers, and sports facilities. Visit the "Campus Facilities" section on our website for details on available amenities.',
        },
        {
            question: "15. How can I stay informed about campus events and announcements?",
            answer:
                "To stay informed, regularly check our university website and official communication channels. Follow us on social media for updates on campus events, announcements, and important information for transfer students.",
        },
        // Add more FAQs as needed
    ];

    const introductoryParagraph = (
        <p className="mb-4">
            Welcome to the FAQs page for North Carolina Agricultural and Technical State University. As an institution committed to
            academic excellence and fostering a supportive learning environment, we understand that the transfer process can be both
            exciting and challenging. This page serves as a comprehensive guide to answer common questions you may have about our
            Transfer Student Portal, the application process, admission advisers, and the wealth of resources available to transfer
            students. We are dedicated to ensuring your smooth transition to our university, and this FAQs page is designed to provide
            the information you need to embark on your academic journey with confidence.
        </p>
    );

    return (
        <div>
            <NavbarAGGIE />
            <Container className="my-5 text-center">
                <Row className="justify-content-center">
                    <Col className="col-10 col-md-8 col-lg-6">
                        <div className="h1-v2">
                            <h1 className="mb-4 mt-3 text-center">Frequently Asked Questions</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-10 col-md-8 col-lg-6">{introductoryParagraph}</Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-10 col-md-8 col-lg-6">
                        {faqs && faqs.length > 0 ? (
                            <Collapse accordion>
                                {faqs?.map((faq, index) => (
                                    <Panel header={faq.question} key={index}>
                                        <p>{faq.answer}</p>
                                    </Panel>
                                ))}
                            </Collapse>
                        ) : (
                            <p>No Data Available</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Deadline;