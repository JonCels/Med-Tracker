import { FC, useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateProps {
    title: string;
    updateState: (arg: Date) => void;
    selectedDate: Date;
}

const DateField: FC<DateProps> = ({ title, updateState, selectedDate }) => {
    const selectDateHandler = (date: Date) => {
        updateState(date)
    }

    return (
    <div>
        <span className="date-title">{title}</span>
        <DatePicker
            className="date-text"
            dateFormat="yyyy/MM/dd"
            selected={selectedDate}    
            onChange={selectDateHandler}
            todayButton={"Today"}/>
    </div>
    )
};

export default DateField;