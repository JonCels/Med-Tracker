import { FC, useState } from 'react';

interface BinaryProps {
    title: string;
    name: string;
}

const BinaryField: FC<BinaryProps> = ({ title, name }) => {
    const [binarySelection, setBinarySelection] = useState<String>();

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBinarySelection(event.target.value);
    };

    return (
    <div>
        <h1>{title}?</h1>
        <input type="radio" 
            value="Y" 
            name={name} 
            onChange={radioHandler}/>
            <label>Y</label>
        <input type="radio" 
            value="N" 
            name={name} 
            onChange={radioHandler}/>
            <label>N</label>
    </div>
    )
};

export default BinaryField;