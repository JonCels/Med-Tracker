import { FC, useState, useEffect } from 'react';

interface OptionProps {
    limit: number;
    updateState: (arg: string) => void;
}

const OptionField: FC<OptionProps> = ({ limit, updateState }) => {
    const [optionString, setOptionString] = useState<string>("");

    const inputOptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptionString(event.target.value);
        console.log(optionString);
    };

    useEffect(() => {
        if (updateState) {
            updateState(optionString);
        }
    }, [optionString]);

    return (
    <div>
        <input maxLength={limit} onChange={inputOptionHandler}/>
    </div>
    )
};

export default OptionField;