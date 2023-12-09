// Meeting.jsx
import React, { useState, useEffect } from "react";
import NavbarAGGIE from './homepage/components/Navbar.js';
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";

const Meeting = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  // In Future, they will come from backend
  const availableTimes = [
    { day: "Monday", slots: ["9:00 AM - 12:00 PM", "2:30 PM - 4:30 PM", "6:00 PM - 8:00 PM"] },
    { day: "Tuesday", slots: ["10:00 AM - 1:00 PM", "3:30 PM - 5:30 PM", "7:00 PM - 9:00 PM"] },
    { day: "Wednesday", slots: ["11:00 AM - 2:00 PM", "4:30 PM - 6:30 PM", "8:00 PM - 10:00 PM"] },
    { day: "Thursday", slots: ["9:30 AM - 12:30 PM", "1:30 PM - 3:30 PM", "5:00 PM - 7:00 PM"] },
    { day: "Friday", slots: ["12:00 PM - 3:00 PM", "3:30 PM - 5:30 PM", "6:30 PM - 8:30 PM"] },
  ];

  useEffect(() => {
    // Set the default date to today
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the submitted meeting to the list
    const newMeeting = {
      date: selectedDate,
      time: selectedTime,
      studentName: studentName,
      studentEmail: studentEmail,
    };
    Swal.fire({
      title: "Meeting Scheduled!",
      html: `
          <p>You have successfully scheduled a meeting with advisors.</p>
          <p><strong>Date:</strong> ${newMeeting.date}</p>
          <p><strong>Time:</strong> ${newMeeting.time}</p>
          <p><strong>Name:</strong> ${newMeeting.studentName}</p>
          <p><strong>Email:</strong> ${newMeeting.studentEmail}</p>
        `,
      icon: "success",
    });

    // Send this newMeeting Appoitment to backend and store in database

    // Reset form fields
    setSelectedTime("");
    setStudentName("");
    setStudentEmail("");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(""); // Reset selected time when the date changes
  };

  return (
    <div>
      <NavbarAGGIE />
      <Container className="my-5 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="h1-v2">
              <h1 className="pb-5 text-center">Schedule a Meeting with Advisors</h1>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="meetingDate">
                <Form.Label>Select Date:</Form.Label>
                <Form.Control type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="meetingTime">
                <Form.Label>Select Time:</Form.Label>
                <Form.Control as="select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                  <option value="" disabled>
                    Choose a time
                  </option>
                  {(
                    availableTimes?.find(
                      (day) => day.day === new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long" })
                    )?.slots || []
                  ).map((slot, index) => (
                    <option key={index} value={slot}>
                      {`${slot}`}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="studentName">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="studentEmail">
                <Form.Label>Your Email:</Form.Label>
                <Form.Control type="email" value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} required />
              </Form.Group>
              <Button className="mt-4" variant="primary" type="submit">
                Schedule Meeting
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <h2>Available Meeting Times</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Slots</th>
                </tr>
              </thead>
              <tbody>
                {availableTimes?.map((day, index) => (
                  <tr key={index}>
                    <td>{day.day}</td>
                    <td>{day.slots.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Meeting;
