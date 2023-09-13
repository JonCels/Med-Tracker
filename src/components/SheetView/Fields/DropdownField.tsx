import { FC, useState, useEffect } from 'react';

interface DropdownProps {
    options: {
        text: string;
        value: string;
    }[];
    updateState: (arg: string) => void;
    selectedOption: string;
    
}

//Not dynamically sized, has exactly 4 dropdown selections + other + empty. If additional dropdown sizes are needed, add javascript to make this dynamic
const DropdownField: FC<DropdownProps> = ({ options, updateState, selectedOption }) => {
    //const [selectedOption, setOption] = useState<string>("");

    const selectOptionHandler = (event: React.FormEvent<HTMLSelectElement>) => {
        updateState(event.currentTarget.value);
    };

    // useEffect(() => {
    //     if (updateState) {
    //         updateState(selectedOption);
    //     }
    // }, [selectedOption]);

    return (
    <div>
        <select onChange={selectOptionHandler} value={selectedOption}>
            <option value={options[0].value}>
                {options[0].text}
            </option>
            <option value={options[1].value}>
                {options[1].text}
            </option>
            <option value={options[2].value}>
                {options[2].text}
            </option>
            <option value={options[3].value}>
                {options[3].text}
            </option>
            <option value={options[4].value}>
                {options[4].text}
            </option>
            <option value={options[5].value}>
                {options[5].text}
            </option>
        </select>
    </div>
    )
};

export default DropdownField;