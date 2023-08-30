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
    <div className="sheet">
        <div className="sheet-container">
            <div className="sheet-head-wrapper">
                <div className="sheet-head-left-wrapper">
                    <div>
                        <span>
                            Mike Cels
                            <br></br>
                            Medical Tracking
                        </span>
                    </div>
                    <br></br>
                    <div>
                        <DateField title="DATE:"/>
                    </div>
                </div>
                <div className="sheet-head-middle-wrapper">
                    <div>

                    </div>
                </div>
                <div className="sheet-head-right-wrapper">
                    <div>
                        <CommentField title="IMPORTANT NOTES" limit={500}/>
                    </div>
                </div>
            </div>
            <div className="sheet-box-container">
                <div className="sheet-row-container">
                    <div className="box-1-edaravone">
                        <BinaryField title="Edaravone?" name="edaravone"/>
                        <CommentField title="Comments" limit={500}/>
                    </div>
                    <div className="box-2-edaravone">
                        <BinaryField title="Change in Edaravone Routine?" name="edaravone-change"/>
                    </div>
                    <div className="box-3-bipap">
                        <BinaryField title="Previous Night Bipap?" name="bipap-night"/>
                        <IntField title="Hours on Bipap Overnight"/>
                    </div>
                    <div className="box-4-bipap">
                        <BinaryField title="Daytime Use of Bipap?" name="bipap-day" />
                        <IntField title="Hours of Daytime Bipap"/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-5-sleep">
                        <CommentField title="Repositioned how often?" limit={50}/>
                    </div>
                    <div className="box-6-bipap">
                        <CommentField title="Bipap Comments" limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-7-elimination">
                        <BinaryField title="BM?" name="bowel-movement"/>
                        <IntField title="Urine Output"/>
                        <BinaryField title="Morning?" name="urine-morning"/>
                        <DecimalField title="Daily Volume"/>
                    </div>
                    <div className="box-8-medication">
                        <CommentField title="Change in RX?" limit={500}/>
                        <CommentField title="Change in Routine?" limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-9-gtube">
                        <BinaryField title='Morning \"Shake\" Via Pump?' name="morning-shake-via-pump"/>
                        <CommentField title="Other?" limit={500}/>
                    </div>
                    <div className="box-10-dinner">
                        <CommentField title="Dinner/Oral Feeding Notes" limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-11-pain-discomfort">
                        <BinaryField title="Pain/Discomfort?" name="pain-discomfort"/>
                        <DropdownField title="Source" options={dropdownOptions}/>
                        <CommentField title="Notes" limit={500}/>
                    </div>
                    <div className="box-12-choking-gagging">
                        <BinaryField title="Suction Machine?" name="suction-machine"/>
                    </div>
                </div>
            </div>
            <div className="sheet-foot-wrapper">
                <div>
                    <CommentField title="NOTES, COMMENTS, AREAS OF CONCERN OR FOLLOWUP" limit={1000}/>
                </div>
            </div>
            
        </div>
    </div>
    )
};

export default Sheet;