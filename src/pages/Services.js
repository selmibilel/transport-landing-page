import React from 'react'
import styled from 'styled-components'
import imageBack from '../images/house-3.jpg'

import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import {GiCommercialAirplane} from 'react-icons/gi'
import {RiTimerFlashFill} from 'react-icons/ri'
import {IoMdBoat} from 'react-icons/io'
import {FaShippingFast} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Conteneur = styled.div`
    height: 100vh;
    width: 100vw;
    @media screen and (max-width: 768px){
        height: 100%;
        width: 100%;
        margin: 0;
    }
`;

const Bloc0 = styled.div`
    width: 100%;
    height: 10vh;
`;

const Bloc1 = styled.div`
    width: 100%;
    height: 65vh;
    @media screen and (max-width: 768px){
        height: 100%;
        margin: 0;
        padding: 0 0.5rem;
    }
`;

const Bloc2 = styled.div`
    width: 100%;
    height: 25vh;
    background: url(${imageBack});
    object-fit: cover;
    margin:0;
`;

const Layer = styled.div`
    background:rgba(23, 162, 184, 1);
    opacity: 0.9;
    position: absolute;
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const TextParagraph = styled.div`
    font-size: 24px;
    color: #fff !important;
`;

const Cadre = styled.div`
    width: 100%;
    height: 26vh;
    border: 1px solid #17a2b8;
    display: flex;
    align-items:center;

    h5{
        font-weight: bold;
    }
    
`;

const Titre = styled.h1`
    font-weight: bolder;
`;

const SubTitre = styled.p`
    font-size: 16px;
`;

const SousBloc1 = styled.div`
    padding-left:3rem ;
`;

const LienContact = styled(Link)`
    color: #fff !important;
`;

const Services = () => {
    return (
        <Conteneur className="d-none d-sm-block" id="about2">
            <Bloc0 className="row"></Bloc0>
            <Bloc1 className="row">
                <SousBloc1 className="col-sm-12 col-md-5">
                    <SubTitre className="text-secondary mt-4 mb-0">AMAZING FEATURES</SubTitre>
                    <Titre>WE OFFRE QUICK & POWERFUL SOLUTION FOR TRASPORT</Titre>
                    <div className="text-secondary mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur tempore similique nisi nemo delectus maiores explicabo laudantium est vitae molestias.
                    </div>
                    <LienContact to="contact" className="btn btn-info">Contacter nous </LienContact>
                </SousBloc1>
                <div className="col-sm-12 col-md-7">
                    <div className="row mt-4">
                        <div className="col-6 mb-2">
                                <Cadre className="row">
                                    <div className="col-4">
                                        <IoMdBoat size={64} />
                                    </div>
                                    <div className="col-8">
                                        <div><h5>QUICKEST CARGO</h5></div>
                                        <div className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                </Cadre>
                        </div>
                        <div className="col-6 mb-2">
                            <Cadre className="row">
                                <div className="col-4">
                                    <GiCommercialAirplane size={64} />
                                </div>
                                <div className="col-8">
                                        <div><h5>FAST AIR FREIGHT</h5></div>
                                        <div className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                            </Cadre>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <Cadre className="row">
                                <div className="col-4">
                                    <FaShippingFast size={64} />
                                </div>
                                <div className="col-8">
                                        <div><h5>GROUND SHIPPING</h5></div>
                                        <div className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                            </Cadre>
                        </div>
                        <div className="col-6">
                            <Cadre className="row">
                                <div className="col-4">
                                   <RiTimerFlashFill size={64} /> 
                                </div>
                                <div className="col-8">
                                        <div><h5>TIMELY DELIVERY</h5></div>
                                        <div className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                            </Cadre>
                        </div>
                    </div>
                </div>
            </Bloc1>
            <Bloc2 className="row">
                <Layer>
                        <TextParagraph className="col-sm-12 col-md-10">
                        <ImQuotesLeft size={32} />    cela est dû à leur excellent service, leurs prix compétitifs et leur support client. 
                        C'est vraiment rafraîchissant d'avoir une touche aussi personnelle.  <ImQuotesRight size={32} />
                        </TextParagraph>
                </Layer>
            </Bloc2>
        </Conteneur>
    )
}

export default Services
