import { FC, useState, useEffect } from 'react';

interface OptionProps {
    limit: number;
    updateState: (arg: string) => void;
    inputOption: string;
}

const OptionField: FC<OptionProps> = ({ limit, updateState, inputOption }) => {
    // const [optionString, setOptionString] = useState<string>("");

    const inputOptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateState(event.target.value);
    };

    // useEffect(() => {
    //     if (updateState) {
    //         updateState(optionString);
    //     }
    // }, [optionString]);

    return (
    <div>
        <input value={inputOption} maxLength={limit} onChange={inputOptionHandler}/>
    </div>
    )
};

export default OptionField;