import { FC, useState, useEffect } from 'react';

interface IntProps {
    title: string;
    updateState: (arg: number) => void;
    inputNumber: number;
}

const IntField: FC<IntProps> = ({ title, updateState, inputNumber }) => {
    //const [inputNumber, setInputNumber] = useState<number>(0);

    const inputNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let tempNum: number = Number(event.target.value);
        updateState(tempNum);
    };

    // useEffect(() => {
    //     if (updateState) {
    //         updateState(inputNumber);
    //     }
    // }, [inputNumber]);

    return (
    <div>
        <span>{title}</span>
        <br></br>
        <input value={inputNumber === 0 ? "" : inputNumber.toString()} type="number" onChange={inputNumberHandler}/>
    </div>
    )
};

export default IntField;