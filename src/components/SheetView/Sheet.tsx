import { FC, useState } from 'react';
import {CommentField, BinaryField, BinaryLabeledField, DateField, DropdownField, IntField, DecimalField, OptionField} from '../ImportHelper';

interface SheetProps {}

const Sheet: FC<SheetProps> = () => {
    const test: String = "Hello";
    const dropdownOptions = [
        { text: "", value: "" },
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
                    <span>
                        Mike Cels
                        <br></br>
                        Medical Tracking
                    </span>
                    <br></br>
                    <br></br>
                    <DateField title="DATE: "/>
                </div>
                <div className="sheet-head-middle-wrapper">
                    <div></div>
                </div>
                <div className="sheet-head-right-wrapper">
                    <span>IMPORTANT NOTES</span>
                    <br></br>
                    <CommentField limit={500}/>
                </div>
            </div>
            <div className="sheet-box-container">
                <div className="sheet-row-container">
                    <div className="box-1-edaravone">
                        <span className="box-title">Edaravone?</span>
                        <BinaryField name="edaravone"/>
                        <br></br>
                        <span>Comments</span>
                        <br></br>
                        <CommentField limit={500}/>
                    </div>
                    <div className="box-2-edaravone">
                        <span className="box-title">CHANGE IN Edaravone Routine?</span>
                        <br></br>
                        <br></br>
                        <BinaryField name="edaravone-change"/>
                    </div>
                    <div className="box-3-bipap">
                        <span className="box-title">PREVIOUS NIGHT BIPAP?</span>
                        <BinaryField name="bipap-night"/>
                        <br></br>
                        <IntField title="Hours on Bipap Overnight"/>
                    </div>
                    <div className="box-4-bipap">
                        <span className="box-title">DAYTIME USE OF BIPAP?</span>
                        <BinaryField name="bipap-day"/>
                        <br></br>
                        <IntField title="Hours of Daytime Bipap"/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-5-sleep">
                        <span className="box-title">SLEEP</span>
                        <br></br>
                        <span>Repositioned how often?</span>
                        <br></br>
                        <CommentField limit={50}/>
                    </div>
                    <div className="box-6-bipap">
                        <span className="box-title">BIPAP COMMENTS</span>
                        <CommentField limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-7-elimination">
                        <span className="box-title">ELIMINATION NOTES</span>
                        <div className="box-7-inner-wrapper">
                            <div className="box-7-inner-left">
                                <BinaryLabeledField label="BM?" name="bowel-movement"/>
                            </div>
                            <div className="box-7-inner-right">
                                <IntField title="Urine Output"/>
                                <br></br>
                                <BinaryLabeledField label="Morning?" name="urine-morning"/>
                                <br></br>
                                <DecimalField title="Daily Volume"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-8-medication">
                        <span className="box-title">MEDICATION NOTES</span>
                        <br></br>
                        <div className="box-8-inner-wrapper">
                            <div className="box-8-inner-left">
                                <span>Change in RX?</span>
                                <br></br>
                                <CommentField limit={500}/>
                            </div>
                            <div className="box-8-inner-middle">
                            </div>
                            <div className="box-8-inner-right">
                                <span>Change in Routine?</span>
                                <br></br>
                                <CommentField limit={500}/> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-9-gtube">
                        <span className="box-title">gTUBE FEEDING NOTES</span>
                        <div className="box-9-inner-wrapper">
                            <div className="box-9-inner-left">
                                <br></br>
                                <BinaryLabeledField label="Morning Shake Via Pump?" name="morning-shake-via-pump"/>
                            </div>
                            <div className="box-9-inner-right">
                                <span>Other?</span>
                                <br></br>
                                <CommentField limit={500}/>
                            </div>
                        </div>
                    </div>
                    <div className="box-10-dinner">
                        <span className="box-title">DINNER/ORAL FEEDING NOTES</span>
                        <CommentField limit={500}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-11-pain-discomfort">
                        <span className="box-title">PAIN or DISCOMFORT?</span>
                        <div className="box-11-inner-wrapper">
                            <BinaryField name="pain-discomfort"/>
                            <div className="box-11-bottom">
                                <div className="box-11-bottom-left">
                                    <span>Source:</span>
                                    <DropdownField options={dropdownOptions}/>
                                    <br></br>
                                    <span>Other Source: </span>
                                    <OptionField limit={50}/>
                                </div>
                                <div className="box-11-bottom-right">
                                    <span>Notes</span>
                                    <br></br>
                                    <CommentField limit={500}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="box-12-choking-gagging">
                        <span className="box-title">CHOKING/GAGGING</span>
                        <br></br>
                        <br></br>
                        <BinaryLabeledField label="SUCTION MACHINE?" name="suction-machine"/>
                    </div>
                </div>
            </div>
            <div className="sheet-foot-wrapper">
                <div>
                    <br></br>
                    <span>NOTES, COMMENTS, AREAS OF CONCERN OR FOLLOWUP</span>
                    <br></br>
                    <CommentField limit={1000}/>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Sheet;