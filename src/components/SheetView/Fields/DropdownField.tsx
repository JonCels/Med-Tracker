import { FC, useState } from 'react';

interface DropdownProps {
    options: {
        text: string;
        value: string;
    }[];
}

//Not dynamically sized, has exactly 4 dropdown selections + other + empty. If additional dropdown sizes are needed, add javascript to make this dynamic
const DropdownField: FC<DropdownProps> = ({ options }) => {
    const [selectedOption, setOption] = useState<string>();

    const selectOptionHandler = (event: React.FormEvent<HTMLSelectElement>) => {
        setOption(event.currentTarget.value);
        console.log(event.currentTarget.value);
    };

    return (
    <div>
        <select onChange={selectOptionHandler}>
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