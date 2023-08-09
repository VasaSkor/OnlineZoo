import React from 'react';

interface TestimonialCardProps {
    current: boolean;
    src: string;
    alt: string;
    name: string;
    location: string;
    date: string;
    main: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
                                                             current,
                                                             src,
                                                             alt,
                                                             name,
                                                             location,
                                                             date,
                                                             main,
                                                         }) => {
    const cardClassName = `testimonials__wrapper-card ${current ? 'current' : ''}`;

    return (
        <div className={cardClassName}>
            <div className='testimonials__wrapper-card-header'>
                <img src={src} alt={alt} />
                <p className='testimonials__wrapper-card-header-text'>
                    <span>{name}</span>
                    <br />
                    <span>{location}</span>
                    <span>•</span>
                    <span>&nbsp;{date}</span>
                </p>
            </div>
            <p className='testimonials__wrapper-card-main-text'>{main}</p>
        </div>
    );
};

export default TestimonialCard;
