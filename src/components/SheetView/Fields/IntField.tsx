import { FC, useState } from 'react';

interface IntProps {
    title: string;
}

const IntField: FC<IntProps> = ({ title }) => {
    const [inputNumber, setInputNumber] = useState<string>();

    const inputNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(event.target.value);
        console.log(inputNumber);
    }

    return (
    <div>
        <h1>{title}!</h1>
        <input type="number" onChange={inputNumberHandler}/>
        <h1>{inputNumber}</h1>
    </div>
    )
};

export default IntField;