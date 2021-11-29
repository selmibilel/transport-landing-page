import React from 'react'
import styled from 'styled-components'
import '../styles/CardStyle.css'
import {Link} from 'react-scroll'

const LinkReadMore = styled(Link)`
    width: 40%;
    margin:auto;
`;

const Cardui = ({myimg}) => {
    return (
        <div className="card text-center shadow border-info">
            <div className="overflow">
                <img src={myimg} alt="image1" className="card-img-top" />
            </div>

            <div className="card-body">
                <h4 className="card-title">
                    Card Title
                </h4>
                <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempore similique nisi nemo delectus maiores explicabo laudantium est vitae molestias.
                </p>
                <LinkReadMore to="about2" className="d-none d-sm-block btn btn-outline-info">Read more</LinkReadMore>
            </div>
        </div>
    )
}

export default Cardui
