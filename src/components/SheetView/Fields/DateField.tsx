import { FC, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateProps {
    title: string;
}

const DateField: FC<DateProps> = ({ title }) => {
    const [startDate, setDate] = useState(new Date());
    
    const selectDateHandler = (date: Date) => {
        setDate(date)
    }

    return (
    <div>
        <h1>{title}</h1>
        <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}    
            onChange={selectDateHandler}
            todayButton={"Today"}/>
    </div>
    )
    
};

export default DateField;