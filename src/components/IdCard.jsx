import React from 'react';

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div className="id-card">
            <img src={picture} alt={`${firstName} ${lastName}`} />
            <div>
                <p>
                    <strong>First name:</strong> {firstName}
                </p>
                <p>
                    <strong>Lat Name:</strong> {lastName}
                </p> 
                <p>
                    <strong>Gender:</strong> {gender}
                </p>
            
                <p>
                    <strong>Height:</strong> {height}cm
                </p>

                 <p>
                    <strong>Birth:</strong> {birth}
                </p>  
            </div>
        </div>
    );
}

export default IdCard;