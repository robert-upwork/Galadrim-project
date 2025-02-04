import React from 'react'
import styled from 'styled-components'

import OrangeSquare from "../../../assets/Shapes/others/orange-square@3x.png"
import GreenTriangle from "../../../assets/Shapes/others/green-top-left-triangle@3x.png"
import GrayTriangleBackground from "../../../assets/Images/home/gray-background.png";
// import IconSend from "../../../assets/Icons/send@3x.png"
import { MdSend } from "react-icons/md"
import { LeftRoundedSemiCircle } from '../Elements/Drawings';
import { BaseInput } from '../Elements/CustomInput';


const TriangleBackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 394px;
`

export const Underline = styled.div`
    width: 32px;
    height: 7px;
    margin-left: -32px;
    background-color: #001b5d;
    @media (max-width: 768px){
        width: 15px;
        height: 3px;
        margin-left: -15px;
    }
`

const CustomInput = styled(BaseInput)`
    font-size: 16px;
    font-family: "Gilroy-Medium";
    color: #001a5c !important;
    width: calc(100% - 50px);
    height: 50px;
    margin-bottom: 8px;
    padding-left: 16px;
    border: 2px solid #ebebeb;
    border-right: 0;
    border-radius: 4px 0 0 4px;
    transition: border ease 300ms;
    &:focus{
        border: 1px solid #00d5b4;
        border-right: 0;
    }
    &::placeholder{
        color: #caccd7;
    }
`

const InputAppend = styled.div`
    /* background-image: url("../../../assets/Icons/send@3x.png"); */
    display: flex;
    background-color: #00d5b4;
    width: 50px;
    height: 50px;
    border-radius: 0 4px 4px 0;
    & {
        svg {
            width: 24px;
            height: 24px;
            fill: white;
            margin: auto;
        }
    }
`


export default function EfisensTalk() {
    return (
        <div className="section efisens-talk-block">
            <TriangleBackgroundImage src={GrayTriangleBackground} alt="Triangle background" />
            <LeftRoundedSemiCircle color="#FF5E4D" className="position-absolute bottom-right transform-bottom-50" />
            <div className="container my-auto">
                <div className=" efisens-talk-form-container">
                    <img src={OrangeSquare} alt="Left Square" className="left-top" />
                    <img src={GreenTriangle} alt="Right Triangle" className="right-bottom" />
                    <div className="efisens-talk-form">
                        <div className="row text-darkblue">
                            <div className="col-12 col-md-12 col-lg-6 col-12">
                                <h2>Efisens Talks</h2>
                                <Underline mobileWidth={15} mobileHeight={3} />
                                <p className="text-primary">Nos experts partagent régulièrement leur savoir faire et leur expérience. Apprenez, lisez et servez -vous !</p>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5 offset-lg-1">
                                <h6 className="text-green mt-0 mb-2 heading-sm text-uppercase">S’inscrire à notre newsletter</h6>
                                <div className="d-flex">
                                    <CustomInput placeholder="votre email" />
                                    <InputAppend ><MdSend /></InputAppend>
                                </div>
                                <p className="text-xxs text-lightgray my-0">En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
