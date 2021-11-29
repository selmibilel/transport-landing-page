import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll';
import {Image} from 'react-bootstrap';

import imageOne from '../images/gallery1.jpg'
import imageTwo from '../images/gallery2.jpg'
import imageThree from '../images/gallery3.jpg'
import imageFour from '../images/gallery4.jpg'
import imageFive from '../images/gallery5.jpg'
import imageSix from '../images/gallery6.jpg'
import imageSeven from '../images/gallery7.jpg'
import imageEight from '../images/gallery8.jpg'
import imageNine from '../images/gallery9.jpg'



const Section = styled.section`
    width: 100%;
    height: 100vh;
    /* padding: 4rem 0rem; */
    @media screen and (max-width: 768px){
        padding:0;
        height: 100%;
        width: 100%;
    }
`;

const Container = styled.div`
    /* display: grid;
    grid-template-columns:3fr 2fr;
    grid-template-rows: 100%;
    height: 100%;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    } */
    display: flex;
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: flex-start;
line-height: 1.4;
/* padding: 1rem 2rem; */
/* order: ${({reverse}) => (reverse ? '2' : '1')}; */

`;

const FirstColumnLeft = styled.div`
    padding: 1rem 3rem;
    height: 56%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #000d1a;
    color: #fff;
    justify-content: center;
    h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px){
        height: 100%;
        padding: 1rem 1rem;
    }
`;

const SecondColumnLeft = styled.div`
    padding: 7rem 3rem;
    /* background: radial-gradient(#e5e5e5, #fff, #e5e5e5); */
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 44%;
    
@media screen and (max-width: 768px){
    padding: 1rem 1rem;
    height: 100%;
}
`;

const BlocColumnLeft = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 10;
    margin-top: 20%;
    height: 40%;
    clip-path: polygon(0 26%, 100% 26%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);

    p{
        color: #fff;
        font-style: italic;
        text-align: center;
        margin-top: 80px;
        font-size: 21px;
        width: 90%;
    }
`;

const ColumnRight = styled.div`
    
    background: #fff;
    height: 100%;
    padding-top: 4rem;
    padding-left: 2rem;
    padding-right: 1rem;
    @media screen and (max-width: 768px){
        padding-top: 1rem;
        padding-left: 1rem;
    }
    Image{
        object-fit: cover;
        height: 20px;
    }
    
`;

const Titre = styled.h3`
    font-weight: bolder;
`;

const SubTitre = styled.p`
    font-size: 16px;
`;

const LinkToService = styled(Link)`
    color: #fff !important;
`;

const Titre2 = styled.h3`
    font-weight: bold;
`;

const ImageGallery = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 6rem;
    transform: scale(1);
    transition: transform 0.5s ease;

    &:hover{
        transform: scale(1.25);
    }
`;

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section id="about">
            <Container className="row">
                <ColumnLeft className="col-sm-12 col-md-7">
                    <FirstColumnLeft>
                        <SubTitre className="text-secondary mb-0 col-12">LITTLE ABOUT US</SubTitre>
                        <Titre className="col-12"> {heading} </Titre>
                        <p> {paragraphOne} </p>
                        <p> {paragraphTwo} </p>
                        <BlocColumnLeft className="col-sm-10 col-md-6 bg-info d-none d-sm-block"> 
                            <p>{paragraphOne}</p>
                        </BlocColumnLeft>    
                    </FirstColumnLeft>
                    <SecondColumnLeft className="">
                        <p> {paragraphOne} </p>
                        <LinkToService to="info" className="btn btn-info">{buttonLabel}</LinkToService>
                    </SecondColumnLeft>
                    
                </ColumnLeft>
                <ColumnRight reverse={reverse} className="col-sm-12 col-md-5">
                    <div className="row">
                        <div className="col-12">
                            <Titre2>Fleet Gallery</Titre2>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <ImageGallery src={imageOne} height={10} thumbnail/>
                        </div>
                        <div className="col-4">
                            <ImageGallery src={imageTwo} thumbnail/>
                        </div>
                        <div className="col-4">
                            <ImageGallery src={imageThree} thumbnail/>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-4">
                            <ImageGallery src={imageFour} thumbnail/>
                        </div>
                        <div className="col-4">
                            <ImageGallery src={imageFive} thumbnail/>
                        </div>
                        <div className="col-4">
                            <ImageGallery src={imageSix} thumbnail/>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-4">
                            <ImageGallery src={imageSeven} thumbnail/>
                        </div>
                        <div className="col-4">
                            <ImageGallery src={imageEight} thumbnail/>
                        </div>
                        <div className="col-4">
                            <ImageGallery src={imageNine} thumbnail/>
                        </div>
                    </div>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
