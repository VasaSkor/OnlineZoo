import React from 'react';
import './MyRangeInput.scss'

interface MyButtonProps {
    id: string;
}
const MyRangeInput: React.FC<MyButtonProps> = ({id }) => {
    return (
        <input id={id} type='range' className='block-scroll' value='0' max='7' step='1'/>
    );
};

export default MyRangeInput;