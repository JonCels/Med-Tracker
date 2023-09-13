import { FC, useState, useEffect } from 'react';

interface BinaryLabeledProps {
    label?: string;
    name: string;
    updateState: (arg: string) => void;
    binarySelection: string;
}

const BinaryLabeledField: FC<BinaryLabeledProps> = ({ label, name, updateState, binarySelection }) => {
    const displayLabel = label === undefined ? "none" : "inline-block";
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(label);
        updateState(event.target.value);
    };

    return (
    <div className="binary-labeled-field">
        <span style={{ display: displayLabel }} className="binary-label">{label}</span>
        <input type="radio" 
            value="Y"
            checked={binarySelection === "Y"}
            onChange={radioHandler}/>
            <label className="binary-options">Y</label>

        <input className="binary-radio-right"
            type="radio" 
            value="N" 
            checked={binarySelection === "N"}
            onChange={radioHandler}/>
            <label className="binary-options">N</label>
    </div>
    )
};

export default BinaryLabeledField;