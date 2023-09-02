import { FC, useState, useEffect } from 'react';

interface IntProps {
    title: string;
    updateState: (arg: number) => void;
}

const IntField: FC<IntProps> = ({ title, updateState }) => {
    const [inputNumber, setInputNumber] = useState<number>(0);

    const inputNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let tempNum: number = Number(event.target.value);
        setInputNumber(tempNum);
    }

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

export default IntField;