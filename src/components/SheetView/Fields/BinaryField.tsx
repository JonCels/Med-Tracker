import { FC, useState, useEffect } from 'react';

interface BinaryProps {
    name: string;
    updateState: (arg: string) => void;
}

const BinaryField: FC<BinaryProps> = ({ name, updateState }) => {
    const [binarySelection, setBinarySelection] = useState<string>("");

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBinarySelection(event.target.value);
    };

    useEffect(() => {
        if (updateState) {
            updateState(binarySelection);
        }
    }, [binarySelection]);

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