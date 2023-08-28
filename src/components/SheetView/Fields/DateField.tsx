import { FC } from 'react';
import DatePicker from "react-datepicker";

interface DateProps {
    title: string;
}

const DateField: FC<DateProps> = ({ title }) => {
    return (<>
        <h1>{title}!</h1>
    </>)
};

export default DateField;