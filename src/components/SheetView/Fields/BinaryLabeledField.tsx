import { FC, useState } from 'react';

interface BinaryLabeledProps {
    label: string;
    name: string;
}

const BinaryLabeledField: FC<BinaryLabeledProps> = ({ label, name }) => {
    const [binarySelection, setBinarySelection] = useState<String>();

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBinarySelection(event.target.value);
        console.log(binarySelection);
    };

    return (
    <div className="binary-labeled-field">
        <span className="binary-label">{label}</span>
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

export default BinaryLabeledField;