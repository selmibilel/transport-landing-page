import React, {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';




import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import {GiCommercialAirplane} from 'react-icons/gi'
import {RiTimerFlashFill} from 'react-icons/ri'
import {IoMdBoat} from 'react-icons/io'
import {FaShippingFast} from 'react-icons/fa'
import {FcCallback} from 'react-icons/fc'



const HeroSection = styled.div`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    &::after{
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background: inherit;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform-origin: top left;
        transform: skewY(4deg);
    }
`;

const HeroWrapperSecond = styled.div`
    position: absolute;
    display: flex;
    z-index: 10;
    bottom: 0;
    width: 100%;
    height: 40vh;
    background: #000d1a;
    clip-path: polygon(0 20%, 100% 52%, 100% 100%, 0% 100%);
`;

const Borde = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    h6{
        font-size: 80%;
        color: #fff;
    }
`;

const BordeEnd = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    h6{
        font-size: 80%;
        color: #fff;
    }
`;

const IconGiCommercialAirplane = styled(GiCommercialAirplane)`
    /* border-right: 1px solid #fff; */
    width: 100%;
    padding-right: 50px;
`;

const IconIoMdBoat = styled(IoMdBoat)`
    /* border-right: 1px solid #fff; */
    width: 100%;
    padding-right: 50px;
`;

const IconFaShippingFast = styled(FaShippingFast)`
    /* border-right: 1px solid #fff; */
    width: 100%;
    padding-right: 50px;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;



const SliderButtons = styled.div`
    position: absolute;
    bottom: 160px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const ButtonMakeAnOrder = styled.a`
    background: rgba(0, 0, 0, 0.5);
    border-color:#000d1a !important;
    &:hover{
        background:#000d1a;
    }
`;


const IconFcCallBack = styled(FcCallback)`
    margin-right:10%;
`;

const Hero = ({sliders}) => {

    const [current, setCurrent] = useState(0)
    const length = sliders.length
    const timeout = useRef(null)


    useEffect(() => {
        const nextSlide = () =>{
            setCurrent(current => (current === length-1 ? 0 : current+1))
        }
        timeout.current = setTimeout(nextSlide, 3000)
        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () =>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length-1 ? 0 : current+1)
        // console.log(current);
    }

    const prevSlide = () =>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length-1 : current-1)
        // console.log(current);
    }

    if(!Array.isArray(sliders) || sliders.length <=0){
        return null
    }

    return (
        <HeroSection id="home">
            <HeroWrapper>
                {sliders.map((slide,index)=>{
                    return(
                        <HeroSlide key={index}>
                            {index === current &&(
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h1 className="d-none d-sm-block"> {slide.title} </h1>
                                        <p className="d-none d-sm-block"> {slide.price} </p>
                                        <ButtonMakeAnOrder 
                                        role="button"
                                        href="tel:+85212345678"
                                        className="btn btn-primary col-sm-4 col-md-2 offset-2"
                                        >
                                            <IconFcCallBack />
                                            {slide.label}
                                            {/* <Arrow /> */}
                                        </ButtonMakeAnOrder>
                                        
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
                <HeroWrapperSecond>
                        
                            <Borde className="col-sm-6 col-md-3 mb-2">
                                <div className="row d-none d-sm-block">
                                <IconGiCommercialAirplane className="col-12" size={80} color="#8e9b90" />
                                <h6 className="col-10 d-flex mt-2 justify-content-center"> AIR FREIGHT </h6>
                                </div>
                            </Borde>
                            <Borde className="col-sm-6 col-md-3 mb-2">
                                <div className="row d-none d-sm-block">
                                <IconIoMdBoat size={80} color="#8e9b90" />
                                <h6 className="col-10 d-flex mt-2 justify-content-center"> SEA FREIGHT </h6>
                                </div>
                            </Borde>
                            <Borde className="col-sm-6 col-md-3 mb-2">
                                <div className="row d-none d-sm-block">
                                <IconFaShippingFast size={80} color="#8e9b90" />
                                <h6 className="col-10 d-flex mt-2 justify-content-center"> ROAD FREIGHT </h6>
                                </div>
                            </Borde>
                            <BordeEnd className="col-sm-6 col-md-3 mb-2">
                                <div className="row d-none d-sm-block">
                                <RiTimerFlashFill size={80} color="#8e9b90" />
                                <h6 className="col-12 d-flex mt-2 justify-content-center"> FAST FREIGHT </h6>
                                </div>
                            </BordeEnd>
                        
                </HeroWrapperSecond>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
