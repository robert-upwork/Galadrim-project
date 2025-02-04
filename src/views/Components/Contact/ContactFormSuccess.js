import React from 'react'
// import { ReactComponent as TickIcon } from '../../../assets/Icons/check.svg'
import TickIcon from '../../../assets/Icons/check.svg'


export default function ContactFormSuccess({ onClick }) {
    return (
        <div className="contact-submit-success">
            <img src={TickIcon} alt="ticket" />
            <h4>
                Votre demande a été envoyée
                avec succès nous reviendrons
                vers vous dès que possible
            </h4>
            <button className="btn btn-custom bg-orange text-white" onClick={() => onClick()}>Effectuer une nouvelle demande</button>
        </div >
    )
}
