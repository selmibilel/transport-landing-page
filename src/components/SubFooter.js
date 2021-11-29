import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {Link} from 'react-scroll'

const Conteneur = styled.div`
    width: 100vw;
    height: 20vh;
    /* background: #057F9A; */
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0;
    @media screen and (max-width: 768px){
        height: 100%;
    }

    h4{
        color: #fff;
    }
    Button{
        margin: 0.1rem;
        color: #fff !important;
        border-color: #fff !important;
    }
    Button:hover{
        background: #fff;
        color: #17a2b8 !important;
    }
`;

const SubFooter = () => {
    return (
        <Conteneur className="row bg-info">
            <div className="col-sm-11 col-md-7 offset-1">
                <h4>Not Sure Which Solution Fits Your Business Need?</h4>
            </div>
            <div className="col-sm-11 col-md-3 offset-1">
                <Link to="contact"> <Button variant="outline-primary">Purchase</Button> </Link>
                <Link to="info"> <Button variant="outline-primary">Services</Button> </Link>
            </div>
        </Conteneur>
    )
}

export default SubFooter
