import React from 'react'
import styled from 'styled-components'

import Cardui from '../components/Cardui'
import myimg1 from '../images/house-1.jpg'
import myimg2 from '../images/house-2.jpg'
import myimg3 from '../images/house-3.jpg'

const Conteneur = styled.div`
    background: #000d1a;
    width: 100%;
    height: 100vh;

    @media screen and (max-width: 768px){
        height: 100%;
    }
`;

const Bloc0 = styled.div`
    height: 10vh;
`;

const Bloc1 = styled.div`
    height: 15vh;
    @media screen and (max-width: 768px){
        height: 100%;
    }
`;

const ListCard = styled.div`
    height: 75vh;
    @media screen and (max-width: 768px){
        height: 100%;
    }
`;

const Titre = styled.h3`
    font-weight: bolder;
    color: #fff;
`;

const SubTitre = styled.p`
    font-size: 16px;
`;

const About = () => {
    return (
        <Conteneur className="container-fluid flex justify-content-center" id="info">
            <Bloc0 className="row d-none d-sm-block"></Bloc0>
            <Bloc1 className="row">
                    <SubTitre className="text-secondary mb-0 col-sm-12 col-md-10 offset-1">LOGISTIC SERVICES</SubTitre>
                    <Titre className=" col-sm-12 col-md-10 offset-1">OUR SERVICES</Titre>
            </Bloc1>
            <ListCard className="row">
                <div className="col-sm-12 col-md-4 d-flex justify-content-end">
                    <Cardui myimg={myimg1} />
                </div>
                <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                    <Cardui myimg={myimg2}/>
                </div>
                <div className="col-sm-12 col-md-4">
                    <Cardui myimg={myimg3}/>
                </div>
            </ListCard>
        </Conteneur>
    )
}

export default About