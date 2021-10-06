import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import styled from "styled-components";
import IconMessage from "../contactMe.png";


const FromContainer = styled.div`
 height: 70vh;
  width: 80vw;
  margin: 2rem auto;
  display: flex;

`

const IconWrap = styled.div`

`

const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

`;

const FormWrap = styled.div`
  width: 35vw;
  margin-left: 6rem;
`
const IconImg = styled.img`
  width: 25vw;
  height: 60vh;

`

const ButtonWrap = styled.div`
text-align: center;
`

function Contact() {
    return (
        <>
            <FromContainer>
                <IconWrap>
                    <IconImg src={IconMessage}></IconImg>

                </IconWrap>
                <FormWrap>
                    <Title>Send me a message</Title>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>


                        <Form.Group className="mb-4 mt-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Do you have a project in mind? Or need help in your company? If so, feel free to contact me.
                                I am currently accepting new contracts starting September 2022.</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <ButtonWrap>
                        <Button variant="outline-danger" as="input" type="submit" value="Submit" />{' '} 
                    </ButtonWrap>
                </FormWrap>
            </FromContainer>
        </>
    )
}

export default Contact
