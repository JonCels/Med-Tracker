import { FC, useState } from 'react';
import {CommentField, BinaryField, DateField, DropdownField, IntField, DecimalField} from '../ImportHelper';

interface SheetProps {
    title: string;
    name: string;
}

const Sheet: FC<SheetProps> = ({ title, name }) => {
    const dropdownOptions = [
        { text: "Spasms", value: "Spasms" },
        { text: "Pressure Ulcer", value: "Pressure-Ulcer" },
        { text: "Nausea", value: "Nausea" },
        { text: "Gas", value: "Gas" },
        { text: "Other", value: "Other" },
    ];

    return (
    <div className="Sheet">
        <div>
            <BinaryField title="Edaravone?" name="edaravone"/>
            <CommentField title="Comments" limit={500}/>
        </div>
        <div>
            <BinaryField title="Change in Edaravone Routine?" name="edaravone-change"/>
        </div>
        <div>
            <BinaryField title="Previous Night Bipap?" name="bipap-night"/>
            <IntField title="Hours on Bipap Overnight"/>
        </div>

        <CommentField title="Comments" limit={500}/>
        <BinaryField title="Binary" name="bowel-movement"/>
        <DateField title="Date"/>
        <DropdownField title="Dropdown" options={dropdownOptions}/>
        <IntField title="Number (Int)"/>
        <DecimalField title="Number (Decimal)"/>
    </div>
    )
};

export default Sheet;