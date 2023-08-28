import { FC } from 'react';

interface DateProps {
    title: string;
    limit: number;
}

const DateField: FC<DateProps> = ({ title }) => {
    return (<>
        <h1>{title}!</h1>
    </>)
};

export default DateField;