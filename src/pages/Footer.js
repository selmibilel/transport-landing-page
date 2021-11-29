import React from 'react';
import {Link} from 'react-scroll'
import '../styles/Footer.css'

import {MdLocationOn, MdPhoneInTalk, MdPhonelinkRing, MdEmail, MdArrowRight} from 'react-icons/md'
import {BsLinkedin, BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'


const Footer = ({ContactData, menuData}) => {
    return(
    <div className="footer" id="footer">
        <div className="container">
            {/* Début Footer Content */}
            <div className="row">             

                <div className="col-4 ContactCol d-flex justify-content-center">
                    <div>
                    <h4>Contact</h4>
                    <ul className="text-secondary">
                        <li> <MdLocationOn size={14} className="text-info" /> {ContactData.adress}</li>
                        <li> <MdPhoneInTalk size={14} className="text-info" /> {ContactData.tel1}</li>
                        <li> <MdPhonelinkRing size={14} className="text-info" /> {ContactData.tel2}</li>
                        <li> <MdEmail size={14} className="text-info" /> {ContactData.email}</li>
                    </ul>
                    </div>
                </div>

                <div className="col-4 ContactCol d-flex justify-content-center">
                    <div>
                    <h4>Links</h4>
                    <ul className="text-secondary">
                        {menuData.map((item,index)=>(
                            <li key={index}> 
                                <MdArrowRight size={14} className="text-info" />
                                <Link to={item.link} > {item.title} </Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                

                <div className="col-4 ContactCol d-flex justify-content-center">
                    <div>
                    <h4>Follow</h4>
                    <ul className="text-secondary">
                        <li> <BsFacebook size={14} className="text-info" /> Facebook</li>
                        <li> <BsTwitter size={14} className="text-info" /> Twitter</li>
                        <li> <BsLinkedin size={14} className="text-info" /> Linkedin</li>
                        <li> <BsInstagram size={14} className="text-info" /> Instagram</li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* Fin Footer Content */}
        </div>
        {/* Début copyrght */}
        <div className="CopyRight">
                <div className="col-12">

                </div>
        </div>
        {/* Fin copyright */}
    </div>
    )
}

export default Footer;