import React from 'react';

function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    const cardTypeImg = type === 'Visa' ?'https://res.cloudinary.com/dqqdwbrhs/image/upload/v1676987689/products/visa_k43k5i.png' :'https://res.cloudinary.com/dqqdwbrhs/image/upload/v1676987689/products/visa_k43k5i.png' 
    const lastFourDigits = number.slice(-4);
    const cardNumber = `•••• •••• •••• ${lastFourDigits}`;
    const expiratioDate = `${expirationMonth.toString().padStart(2, '0')}/${expirationMonth.toString().slice(-2)}`;

    const style = {
        backgroundColor: bgColor,
        color: color,
    };

    return (
        <div className='credit-card'>
            <img src={cardTypeImg} alt={type} />
            <p className='card-number'>{cardNumber}</p>
            <p className='expiration-date'>
                <span>Expires {expiratioDate}</span>
                <span>{bank}</span>
            </p>
            <p className='card-owner'>{owner}</p>
        </div>
    );
}

export default CreditCard;


