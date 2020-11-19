import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AchievementCard = (props) => {
    const {logo, value, title} = props.data;
    return (
        <div className="col-md-6 col-12">
            <div className="d-flex justify-content-center">
                <img src={logo} className="img-fluid" style={{height: "50px"}} alt=""/>
                <div className="d-flex flex-column align-items-center">
                    <h1>{value}<span style={{height: "10px", width: "10px"}}><FontAwesomeIcon icon={faPlus} /></span></h1>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;