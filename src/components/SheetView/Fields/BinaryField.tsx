import { FC, useState } from 'react';

interface BinaryProps {
    name: string;
}

const BinaryField: FC<BinaryProps> = ({ name }) => {
    const [binarySelection, setBinarySelection] = useState<String>();

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBinarySelection(event.target.value);
        console.log(binarySelection);
    };

    return (
    <div>
        <input type="radio" 
            value="Y" 
            name={name} 
            onChange={radioHandler}/>
            <label className="binary-options">Y</label>
            
        <input className="binary-radio-right"
            type="radio" 
            value="N" 
            name={name} 
            onChange={radioHandler}/>
            <label className="binary-options">N</label>
    </div>
    )
};

export default BinaryField;