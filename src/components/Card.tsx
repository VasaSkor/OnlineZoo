import React from 'react';

interface CardProps {
    src: string;
    alt: string;
    name: string;
    map: string;
    type: string;
    typeAlt: string;
}

const Card: React.FC<CardProps> = ({ src,
                                       alt,
                                       name,
                                       map,
                                       type,
                                       typeAlt }) => {
    return (
        <div className='pets__card'>
            <img className='pets__card-img' src={src} alt={alt} />
            <div className='pets__card-text'>
                <span className='pets__card-text-name'>{name}</span>
                <p className='pets__card-text-map'>{map}</p>
                <img className='pets__card-text-img' src={type} alt={typeAlt} />
            </div>
        </div>
    );
};

export default Card;
