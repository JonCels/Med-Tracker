import { FC, useState, useEffect } from 'react';

interface DecimalProps {
    title: string;
    updateState: (arg: number) => void;
}

const DecimalField: FC<DecimalProps> = ({ title, updateState }) => {
    const [inputNumber, setInputNumber] = useState<number>(0);

    const inputNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let tempNum: number = Number(event.target.value);
        setInputNumber(tempNum);
    };

    useEffect(() => {
        if (updateState) {
            updateState(inputNumber);
        }
    }, [inputNumber]);

    return (
    <div>
        <span>{title}</span>
        <br></br>
        <input type="number" onChange={inputNumberHandler}/>
    </div>
    )
};

export default DecimalField;