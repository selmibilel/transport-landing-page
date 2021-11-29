import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import styled from 'styled-components'
import '../styles/Contact.css'
import {Form, Button} from 'react-bootstrap'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiMessage2Fill} from 'react-icons/ri'

const Conteneur = styled.div`
    height: 100vh;
    padding: 4rem 8rem;
    /* clip-path: ellipse(50% 28% at 50% 0%); */
    @media screen and (max-width: 768px){
        padding:0;
        height: 100%;
        width: 100% !important;
    }
`;

const BlocContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #E0F2F6;
    @media screen and (max-width: 768px){
        margin: 0;
    }
`;

const ContainerContact = styled.div`
    background: #000d1a;
    @media screen and (max-width: 768px){
        padding:2rem 2rem;
    }
`;

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7tlggqb', 'template_cw9os4f', form.current, 'user_zwYPNTsCAGJ08t61IDho9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };


    return (
        <Conteneur className="" id="contact">
            <BlocContainer className="row">
                <div className="col-sm-12 col-md-7 d-none d-sm-block">
                    <div className="row ContainerText">
                        <div className="Titre col-12 mb-5">
                            <h2>Request A Free Quote</h2>
                        </div>
                        <div className="Paragraph text-secondary col-12 mb-5">
                            <p>There are many variations of passages of Lorem ipsum available, but the majority 
                            have suffered alteration in some form by injected humour.</p>
                        </div>
                        <div className="IconIcon col-1">
                            <AiFillCheckCircle size={28} color={'#17a2b8'} className="mt-1"/>
                        </div>
                        <div className="IconText col-11">
                            <h5>Licenced & insured</h5>
                        </div>
                        <div className="IconSubText text-secondary col-11 offset-1 mb-5">
                            Contact us now to get a free consultation
                        </div>


                        <div className="IconIcon col-1">
                            <RiMessage2Fill size={28} color={'#17a2b8'} className="mt-1"/>
                        </div>
                        <div className="IconText col-11">
                            <h5>Free Consultation</h5>
                        </div>
                        <div className="IconSubText text-secondary col-11 offset-1">
                            Contact us now to get a free consultation
                        </div>
                    </div>
                </div>
                <ContainerContact className="col-sm-12 col-md-5">
                    <div className="row">
                    <Form className="formulaire" ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3 col-12" controlId="exampleForm.ControlName">
                            <Form.Control type="text" placeholder="First Name" className="ZoneForm" name="name"/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-12" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Email Adress" className="ZoneForm" name="email" />
                            <Form.Text className="text-muted">
                                 We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 col-12" controlId="exampleForm.ControlPhone">
                            <Form.Control type="text" placeholder="Phone" className="ZoneForm" name="phone" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-12" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} placeholder="Type here message" className="ZoneForm" name="message" />
                        </Form.Group>
                        <Button type="submit" className="col-12 bg-info ButtonSubmit">
                            GET ESTIMATION
                        </Button>
                    </Form>
                    </div>
                </ContainerContact>
            </BlocContainer>
        </Conteneur>
    )
}

export default Contact
