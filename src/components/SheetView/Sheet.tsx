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
            <span>
                Mike Cels
                <br></br>
                Medical Tracking
            </span>
        </div>
        <div>
            <CommentField title="IMPORTANT NOTES" limit={500}/>
        </div>
        <div>
            <DateField title="DATE:"/>
        </div>
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
        <div>
            <BinaryField title="Daytime Use of Bipap?" name="bipap-day" />
            <IntField title="Hours of Daytime Bipap"/>
        </div>
        <div>
            <CommentField title="Repositioned how often?" limit={50}/>
        </div>
        <div>
            <CommentField title="Bipap Comments" limit={500}/>
        </div>
        <div>
            <BinaryField title="BW?" name="bowel-movement"/>
            <IntField title="Urine Output"/>
            <BinaryField title="Morning?" name="urine-morning"/>
            <DecimalField title="Daily Volume"/>
        </div>
        <div>
            <CommentField title="Change in RX?" limit={500}/>
            <CommentField title="Change in Routine?" limit={500}/>
        </div>
        <div>
            <BinaryField title='Morning \"Shake\" Via Pump?' name="morning-shake-via-pump"/>
            <CommentField title="Other?" limit={500}/>
        </div>
        <div>
            <CommentField title="Dinner/Oral Feeding Notes" limit={500}/>
        </div>
        <div>
            <BinaryField title="Pain/Discomfort?" name="pain-discomfort"/>
            <DropdownField title="Source" options={dropdownOptions}/>
            <CommentField title="Notes" limit={500}/>
        </div>
        <div>
            <BinaryField title="Suction Machine?" name="suction-machine"/>
        </div>
        <div>
            <CommentField title="NOTES, COMMENTS, AREAS OF CONCERN OR FOLLOWUP" limit={1000}/>
        </div>
    </div>
    )
};

export default Sheet;