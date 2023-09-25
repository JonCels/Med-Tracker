import { FC, useState } from 'react';
import {CommentField, BinaryField, DateField, DropdownField, IntField, DecimalField, OptionField} from '../ImportHelper';
import SaveButton from './SaveButton';
import ClearButton from './ClearButton';

interface SheetProps {
    initialData : {
        firstname: string,
        lastname: string,
        date: Date,
        sortable_date: string,
        edaravone: string,
        edaravone_comments: string,
        edaravone_change: string,
        bipap_nighttime: string,
        bipap_nighttime_hours: number,
        bipap_daytime: string,
        bipap_daytime_hours: number,
        bipap_comments: string,
        sleep: string,
        bowel_movement: string,
        bowel_movement_comments: string,
        urine_output: number,
        urine_morning: string,
        urine_daily_volume: number,
        urine_comments: string,
        medication_rx_change: string,
        medication_routine_change: string,
        morning_shake_via_pump: string,
        gtube_other_comments: string,
        dinner_oral_feed_comments: string,
        pain_discomfort: string,
        pain_discomfort_source: string,
        pain_discomfort_comments: string,
        suction_machine: string,
        aoc_followup_comments: string,
        important_notes: string,
        combined_comments: string
    };
}

const Sheet: FC<SheetProps> = ({ initialData }) => {
    const backendURI: string = 'https://daily-med-tracker.onrender.com/api/sheets/';

    const dropdownOptions = [
        { text: "", value: "" },
        { text: "Spasms", value: "Spasms" },
        { text: "Pressure Ulcer", value: "Pressure-Ulcer" },
        { text: "Nausea", value: "Nausea" },
        { text: "Gas", value: "Gas" },
        { text: "Other", value: "Other" },
    ];

    const initState = {
        firstname: "Mike",
        lastname: "Cels",
        date: new Date(),
        sortable_date: new Date().toISOString().slice(0, 10),
        edaravone: "",
        edaravone_comments: "",
        edaravone_change: "",
        bipap_nighttime: "",
        bipap_nighttime_hours: 0,
        bipap_daytime: "",
        bipap_daytime_hours: 0,
        bipap_comments: "",
        sleep: "",
        bowel_movement: "",
        bowel_movement_comments: "",
        urine_output: 0,
        urine_morning: "",
        urine_daily_volume: 0,
        urine_comments: "",
        medication_rx_change: "",
        medication_routine_change: "",
        morning_shake_via_pump: "",
        gtube_other_comments: "",
        dinner_oral_feed_comments: "",
        pain_discomfort: "",
        pain_discomfort_source: "",
        pain_discomfort_comments: "",
        suction_machine: "",
        aoc_followup_comments: "",
        important_notes: "",
        combined_comments: "",
    };

    // const loadData = initialData === undefined ? initState : initialData;
    // console.log(loadData);
    const [state, setState] = useState(initialData);

    const updateDate = (date: Date): void => {
        setState({
            ...state,
            date: date,
            sortable_date: date.toISOString().slice(0, 10),
        });
    };

    const updateEdaravone = (flag: string): void => {
        setState({
            ...state,
            edaravone: flag
        });
    };

    const updateEdaravoneComments = (comment: string): void => {
        setState({
            ...state,
            edaravone_comments: comment
        });
    };

    const updateEdaravoneChange = (flag: string): void => {
        setState({
            ...state,
            edaravone_change: flag
        });
    };

    const updateBipapNighttime = (flag: string): void => {
        setState({
            ...state,
            bipap_nighttime: flag
        });
    };

    const updateBipapNighttimeHours = (hours: number): void => {
        setState({
            ...state,
            bipap_nighttime_hours: hours
        });
    };

    const updateBipapDaytime = (flag: string): void => {
        setState({
            ...state,
            bipap_daytime: flag
        });
    };

    const updateBipapDaytimeHours = (hours: number): void => {
        setState({
            ...state,
            bipap_daytime_hours: hours
        });
    };

    const updateBipapComments = (comment: string): void => {
        setState({
            ...state,
            bipap_comments: comment
        });
    };

    const updateSleep = (comment: string): void => {
        setState({
            ...state,
            sleep: comment
        });
    };

    const updateBW = (flag: string): void => {
        setState({
            ...state,
            bowel_movement: flag
        });
    };

    const updateBWComments = (comment: string): void => {
        setState({
            ...state,
            bowel_movement_comments: comment
        });
    };

    const updateUrineOutput = (num: number): void => {
        setState({
            ...state,
            urine_output: num
        });
    };

    const updateUrineMorning = (flag: string): void => {
        setState({
            ...state,
            urine_morning: flag
        });
    };

    const updateUrineDailyVolume = (num: number): void => {
        setState({
            ...state,
            urine_daily_volume: num
        });
    };

    const updateUrineComments = (comment: string): void => {
        setState({
            ...state,
            urine_comments: comment
        });
    };

    const updateMedicationRXChange = (comment: string): void => {
        setState({
            ...state,
            medication_rx_change: comment
        });
    };

    const updateMedicationRoutineChange = (comment: string): void => {
        setState({
            ...state,
            medication_routine_change: comment
        });
    };
    
    const updateMorningShakeViaPump = (flag: string): void => {
        setState({
            ...state,
            morning_shake_via_pump: flag
        });
    };

    const updateGtubeComments = (comment: string): void => {
        setState({
            ...state,
            gtube_other_comments: comment
        });
    };

    const updateDinnerOralFeedComments = (comment: string): void => {
        setState({
            ...state,
            dinner_oral_feed_comments: comment
        });
    };

    const updatePainDiscomfort = (flag: string): void => {
        setState({
            ...state,
            pain_discomfort: flag
        });
    };

    const updatePainDiscomfortSource = (source: string): void => {
        setState({
            ...state,
            pain_discomfort_source: source
        });
    };

    const updatePainDiscomfortComments = (comment: string): void => {
        setState({
            ...state,
            pain_discomfort_comments: comment
        });
    };

    const updateSuctionMachine = (flag: string): void => {
        setState({
            ...state,
            suction_machine: flag
        });
    };

    const updateAOCFollowup = (comment: string): void => {
        setState({
            ...state,
            aoc_followup_comments: comment
        });
    };

    const updateImportantNotes = (comment: string): void => {
        setState({
            ...state,
            important_notes: comment
        });
    };

    const saveButtonEvent = () => {
        const currDate: string = state.date.toDateString();
        const dateURI: string = backendURI + `date?date=${currDate}`;
        let getDateURI: string = encodeURI(dateURI);

        fetch(getDateURI)
            .then((data) => {
                if (!data.ok) {
                    console.log("Error");
                }
                return data.json();
            })
            .then((update) => {
                if (update.length == 0) {
                    saveSheet();
                }
                else if (update.length > 0) {
                    updateSheet(update[0].id);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const clearButtonEvent = () => {
        let resp = window.confirm("Are you sure you'd like to clear the sheet?");
        if (resp) {
            setState(initState);
        }
    };

    function saveSheet(): void {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...state, date: state.date.toDateString() })
        }

        fetch(backendURI, options)
            .then((data) => {
                if (!data.ok) {
                    console.log("Error");
                }
                return data.json();
            })
            .then(() => {
                setState(initState);
            })
            .catch(err => {
                console.log(err);
            });
        alert(`Saved sheet for ${state.date.toDateString()}`);

        setState(initState);
    };  

    function updateSheet(existingSheetId: number): void {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...state, date: state.date.toDateString() })
        }
        let idStr: string = existingSheetId.toString();
        const fetchURI: string = backendURI + `${idStr}`;

        fetch(fetchURI, options)
            .then((data) => {
                if (!data.ok) {
                    console.log("Error");
                }
                return data.json();
            })
            .then(() => {
                setState(initState);
            })
            .catch(err => {
                console.log(err);
            });
        alert(`Updated existing sheet for ${state.date.toDateString()}`);
    }

    return (
    <div className="sheet">
        <div className="sheet-container">
            <div className="button-bar">
                <div className="clear-button-wrapper">
                    <ClearButton clearState={clearButtonEvent}/>
                </div>
                <div className="save-button-wrapper">
                    <SaveButton saveState={saveButtonEvent}/>
                </div>
            </div>
            <div className="sheet-head-wrapper">
                <div className="sheet-head-left-wrapper">
                    <h3>
                        Mike Cels
                        <br></br>
                        Medical Tracking
                    </h3>
                    <DateField selectedDate={state.date} title="DATE: " updateState={updateDate}/>
                </div>
                <div className="sheet-head-right-wrapper">
                    <span>IMPORTANT NOTES</span>
                    <br></br>
                    <CommentField commentFieldString={state.important_notes} rows={5} updateState={updateImportantNotes}/>
                </div>
            </div>
            <div className="sheet-box-container">
                <div className="sheet-row-container">
                    <div className="box-1-edaravone">
                        <span className="box-title">Edaravone?</span>
                        <BinaryField binarySelection={state.edaravone} name="edaravone" updateState={updateEdaravone}/>
                        <br></br>
                        <span>Comments</span>
                        <br></br>
                        <CommentField commentFieldString={state.edaravone_comments} updateState={updateEdaravoneComments}/>
                    </div>
                    <div className="box-2-edaravone">
                        <span className="box-title">CHANGE IN Edaravone Routine?</span>
                        <br></br>
                        <br></br>
                        <BinaryField binarySelection={state.edaravone_change} name="edaravone-change" updateState={updateEdaravoneChange}/>
                    </div>
                    <div className="box-3-bipap">
                        <span className="box-title">PREVIOUS NIGHT BIPAP?</span>
                        <BinaryField binarySelection={state.bipap_nighttime} name="bipap-night" updateState={updateBipapNighttime}/>
                        <br></br>
                        <IntField inputNumber={state.bipap_nighttime_hours} title="Hours on Bipap Overnight" updateState={updateBipapNighttimeHours}/>
                    </div>
                    <div className="box-4-bipap">
                        <span className="box-title">DAYTIME USE OF BIPAP?</span>
                        <BinaryField binarySelection={state.bipap_daytime} name="bipap-day" updateState={updateBipapDaytime}/>
                        <br></br>
                        <IntField inputNumber={state.bipap_daytime_hours} title="Hours of Daytime Bipap" updateState={updateBipapDaytimeHours}/>
                    </div>
                </div>
                <div className="sheet-row-container-reverse">
                    <div className="box-5-sleep">
                        <span className="box-title">SLEEP</span>
                        <br></br>
                        <span>Notes?</span>
                        <br></br>
                        <CommentField commentFieldString={state.sleep} rows={5} updateState={updateSleep}/>
                    </div>
                    <div className="box-6-bipap">
                        <span className="box-title">BIPAP COMMENTS</span>
                        <CommentField commentFieldString={state.bipap_comments} updateState={updateBipapComments}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-7-elimination">
                        <span className="box-title">ELIMINATION NOTES</span>
                        <div className="box-7-inner-wrapper">
                            <div className="box-7-inner-left">
                                <BinaryField binarySelection={state.bowel_movement} label="BM?" name="bowel-movement" updateState={updateBW}/>
                                <span>Comments</span>
                                <br></br>
                                <CommentField commentFieldString={state.bowel_movement_comments} updateState={updateBWComments}/>
                            </div>
                            <div className="box-7-inner-right">
                                <IntField inputNumber={state.urine_output} title="Urine Output" updateState={updateUrineOutput}/>
                                <BinaryField binarySelection={state.urine_morning} label="Morning?" name="urine-morning" updateState={updateUrineMorning}/>
                                <DecimalField inputNumber={state.urine_daily_volume} title="Daily Volume" updateState={updateUrineDailyVolume}/>
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
                                <CommentField commentFieldString={state.medication_rx_change} rows={3} updateState={updateMedicationRXChange}/>
                            </div>
                            <div className="box-8-inner-middle">
                            </div>
                            <div className="box-8-inner-right">
                                <span>Change in Routine?</span>
                                <br></br>
                                <CommentField commentFieldString={state.medication_routine_change} rows={3} updateState={updateMedicationRoutineChange}/> 
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
                                <span>Morning Shake Via Pump?</span>
                                <br></br>
                                <BinaryField binarySelection={state.morning_shake_via_pump} name="morning-shake-via-pump" updateState={updateMorningShakeViaPump}/>
                            </div>
                            <div className="box-9-inner-right">
                                <span>Other?</span>
                                <br></br>
                                <CommentField commentFieldString={state.gtube_other_comments} updateState={updateGtubeComments}/>
                            </div>
                        </div>
                    </div>
                    <div className="box-10-dinner">
                        <span className="box-title">DINNER/ORAL FEEDING NOTES</span>
                        <CommentField commentFieldString={state.dinner_oral_feed_comments} updateState={updateDinnerOralFeedComments}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-11-pain-discomfort">
                        <span className="box-title">PAIN or DISCOMFORT?</span>
                        <div className="box-11-inner-wrapper">
                            <BinaryField binarySelection={state.pain_discomfort} name="pain-discomfort" updateState={updatePainDiscomfort}/>
                            <div className="box-11-bottom">
                                <div className="box-11-bottom-left">
                                    <span>Source:</span>
                                    <DropdownField selectedOption={state.pain_discomfort_source} options={dropdownOptions} updateState={updatePainDiscomfortSource}/>
                                    <br></br>
                                    <span>Other Source: </span>
                                    <OptionField inputOption={state.pain_discomfort_source} limit={50} updateState={updatePainDiscomfortSource}/>
                                </div>
                                <div className="box-11-bottom-right">
                                    <span>Notes</span>
                                    <br></br>
                                    <CommentField commentFieldString={state.pain_discomfort_comments} rows={3} updateState={updatePainDiscomfortComments}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-12-choking-gagging">
                        <span className="box-title">CHOKING/GAGGING</span>
                        <br></br>
                        <br></br>
                        <span>SUCTION MACHINE?</span>
                        <br></br>
                        <BinaryField binarySelection={state.suction_machine} name="suction-machine" updateState={updateSuctionMachine}/>
                    </div>
                </div>
            </div>
            <div className="sheet-foot-wrapper">
                <br></br>
                <span>NOTES, COMMENTS, AREAS OF CONCERN OR FOLLOWUP</span>
                <br></br>
                <CommentField commentFieldString={state.aoc_followup_comments} limit={1000} rows={6} updateState={updateAOCFollowup}/>
                <div className="button-bar">
                    <div className="clear-button-wrapper">
                        <ClearButton clearState={clearButtonEvent}/>
                    </div>
                    <div className="save-button-wrapper">
                        <SaveButton saveState={saveButtonEvent}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Sheet;