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
                    <div></div>
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
                        <span className="box-title">Edaravone?</span>
                        <BinaryField label="" name="edaravone"/>
                        <CommentField title="Comments" limit={500}/>
                    </div>
                    <div className="box-2-edaravone">
                        <span className="box-title">CHANGE IN Edaravone Routine?</span>
                        <BinaryField label="" name="edaravone-change"/>
                    </div>
                    <div className="box-3-bipap">
                        <span className="box-title">PREVIOUS NIGHT BIPAP?</span>
                        <BinaryField label="" name="bipap-night"/>
                        <IntField title="Hours on Bipap Overnight"/>
                    </div>
                    <div className="box-4-bipap">
                        <span className="box-title">DAYTIME USE OF BIPAP?</span>
                        <BinaryField label="" name="bipap-day"/>
                        <IntField title="Hours of Daytime Bipap"/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-5-sleep">
                        <span className="box-title">SLEEP</span>
                        <CommentField title="Repositioned how often?" limit={50}/>
                    </div>
                    <div className="box-6-bipap">
                        <span className="box-title">BIPAP COMMENTS</span>
                        <CommentField title="Bipap Comments" limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-7-elimination">
                        <span className="box-title">ELIMINATION NOTES</span>
                        <BinaryField label="BM?" name="bowel-movement"/>
                        <IntField title="Urine Output"/>
                        <BinaryField label="" name="urine-morning"/>
                        <DecimalField title="Daily Volume"/>
                    </div>
                    <div className="box-8-medication">
                        <span className="box-title">MEDICATION NOTES</span>
                        <CommentField title="Change in RX?" limit={500}/>
                        <CommentField title="Change in Routine?" limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-9-gtube">
                        <span className="box-title">gTUBE FEEDING NOTES</span>
                        <BinaryField label="" name="morning-shake-via-pump"/>
                        <CommentField title="Other?" limit={500}/>
                    </div>
                    <div className="box-10-dinner">
                        <span className="box-title">DINNER/ORAL FEEDING NOTES</span>
                        <CommentField title="Dinner/Oral Feeding Notes" limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-11-pain-discomfort">
                        <span className="box-title">PAIN or DISCOMFORT?</span>
                        <BinaryField label="" name="pain-discomfort"/>
                        <DropdownField title="Source" options={dropdownOptions}/>
                        <CommentField title="Notes" limit={500}/>
                    </div>
                    <div className="box-12-choking-gagging">
                        <span className="box-title">CHOKING/GAGGING</span>
                        <BinaryField label="SUCTION MACHINE?" name="suction-machine"/>
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