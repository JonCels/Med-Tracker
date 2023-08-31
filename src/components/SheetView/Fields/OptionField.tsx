import { FC, useState } from 'react';

interface OptionProps {
    limit: number;
}

const OptionField: FC<OptionProps> = ({ limit }) => {
    const [optionString, setOptionString] = useState<String>();

    const inputOptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptionString(event.target.value);
        console.log(optionString);
    }

    return (
    <div>
        <input maxLength={limit} onChange={inputOptionHandler}/>
    </div>
    )
};

export default OptionField;