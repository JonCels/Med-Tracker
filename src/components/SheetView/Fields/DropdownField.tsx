import { FC } from 'react';

interface DropdownProps {
    title: string;
}

const DropdownField: FC<DropdownProps> = ({ title }) => {
    return (<>
        <h1>{title}!</h1>
    </>)
};

export default DropdownField;