import { FC, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateProps {
    title: string;
}

const DateField: FC<DateProps> = ({ title }) => {
    const [selectedDate, setDate] = useState(new Date());
    
    const selectDateHandler = (date: Date) => {
        setDate(date)
        console.log(selectedDate);
    }

    return (
    <div>
        <span>{title}</span>
        <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={selectedDate}    
            onChange={selectDateHandler}
            todayButton={"Today"}/>
    </div>
    )
    
};

export default DateField;