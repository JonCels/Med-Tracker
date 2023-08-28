import { FC, useState } from 'react';

interface DecimalProps {
    title: string;
}

const DecimalField: FC<DecimalProps> = ({ title }) => {
    const [inputNumber, setInputNumber] = useState<String>();

    const inputNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(event.target.value);
        console.log(inputNumber);
    }

    return (
    <div>
        <h1>{title}!</h1>
        <input type="number" onChange={inputNumberHandler}/>
    </div>
    )
};

export default DecimalField;