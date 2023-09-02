import { FC, useState } from 'react';
import {CommentField, BinaryField, BinaryLabeledField, DateField, DropdownField, IntField, DecimalField, OptionField} from '../ImportHelper';
import SaveButton from './SaveButton';

interface SheetProps {}

const Sheet: FC<SheetProps> = () => {
    const dropdownOptions = [
        { text: "", value: "" },
        { text: "Spasms", value: "Spasms" },
        { text: "Pressure Ulcer", value: "Pressure-Ulcer" },
        { text: "Nausea", value: "Nausea" },
        { text: "Gas", value: "Gas" },
        { text: "Other", value: "Other" },
    ];

    const initState = {
        firstName: "Mike",
        lastName: "Cels",
        date: new Date(),
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
        combined_comments: ""
    };

    const [state, setState] = useState(initState);

    const updateDate = (date: Date): void => {
        setState({
            ...state,
            date: date
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

    const updateCombinedComments = (comment: string): void => {
        setState({
            ...state,
            combined_comments: comment
        });
    };

    return (
    <div className="sheet">
        <div className="sheet-container">
            <div className="save-button-wrapper">
                <SaveButton/>
            </div>
            <span>{state.edaravone}</span>
            <div className="sheet-head-wrapper">
                <div className="sheet-head-left-wrapper">
                    <span>
                        Mike Cels
                        <br></br>
                        Medical Tracking
                    </span>
                    <br></br>
                    <br></br>
                    <DateField title="DATE: " updateState={updateDate}/>
                </div>
                {/* <div className="sheet-head-middle-wrapper">
                    <div></div>
                </div> */}
                <div className="sheet-head-right-wrapper">
                    <span>IMPORTANT NOTES</span>
                    <br></br>
                    <CommentField limit={500} updateState={updateImportantNotes}/>
                </div>
            </div>
            <div className="sheet-box-container">
                <div className="sheet-row-container">
                    <div className="box-1-edaravone">
                        <span className="box-title">Edaravone?</span>
                        <BinaryField name="edaravone" updateState={updateEdaravone}/>
                        <br></br>
                        <span>Comments</span>
                        <br></br>
                        <CommentField limit={500} updateState={updateEdaravoneComments}/>
                    </div>
                    <div className="box-2-edaravone">
                        <span className="box-title">CHANGE IN Edaravone Routine?</span>
                        <br></br>
                        <br></br>
                        <BinaryField name="edaravone-change" updateState={updateEdaravoneChange}/>
                    </div>
                    <div className="box-3-bipap">
                        <span className="box-title">PREVIOUS NIGHT BIPAP?</span>
                        <BinaryField name="bipap-night" updateState={updateBipapNighttime}/>
                        <br></br>
                        <IntField title="Hours on Bipap Overnight" updateState={updateBipapNighttimeHours}/>
                    </div>
                    <div className="box-4-bipap">
                        <span className="box-title">DAYTIME USE OF BIPAP?</span>
                        <BinaryField name="bipap-day" updateState={updateBipapDaytime}/>
                        <br></br>
                        <IntField title="Hours of Daytime Bipap" updateState={updateBipapDaytimeHours}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-5-sleep">
                        <span className="box-title">SLEEP</span>
                        <br></br>
                        <span>Repositioned how often?</span>
                        <br></br>
                        <CommentField limit={50} updateState={updateSleep}/>
                    </div>
                    <div className="box-6-bipap">
                        <span className="box-title">BIPAP COMMENTS</span>
                        <CommentField limit={500} updateState={updateBipapComments}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-7-elimination">
                        <span className="box-title">ELIMINATION NOTES</span>
                        <div className="box-7-inner-wrapper">
                            <div className="box-7-inner-left">
                                <BinaryLabeledField label="BM?" name="bowel-movement" updateState={updateBW}/>
                                <span>Comments</span>
                                <br></br>
                                <CommentField limit={500} updateState={updateBWComments}/>
                            </div>
                            <div className="box-7-inner-right">
                                <IntField title="Urine Output" updateState={updateUrineOutput}/>
                                <BinaryLabeledField label="Morning?" name="urine-morning" updateState={updateUrineMorning}/>
                                <DecimalField title="Daily Volume" updateState={updateUrineDailyVolume}/>
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
                                <CommentField limit={500} updateState={updateMedicationRXChange}/>
                            </div>
                            <div className="box-8-inner-middle">
                            </div>
                            <div className="box-8-inner-right">
                                <span>Change in Routine?</span>
                                <br></br>
                                <CommentField limit={500} updateState={updateMedicationRoutineChange}/> 
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
                                <BinaryLabeledField label="Morning Shake Via Pump?" name="morning-shake-via-pump" updateState={updateMorningShakeViaPump}/>
                            </div>
                            <div className="box-9-inner-right">
                                <span>Other?</span>
                                <br></br>
                                <CommentField limit={500} updateState={updateGtubeComments}/>
                            </div>
                        </div>
                    </div>
                    <div className="box-10-dinner">
                        <span className="box-title">DINNER/ORAL FEEDING NOTES</span>
                        <CommentField limit={500} updateState={updateDinnerOralFeedComments}/>
                    </div>
                </div>
                <div className="sheet-row-container">
                    <div className="box-11-pain-discomfort">
                        <span className="box-title">PAIN or DISCOMFORT?</span>
                        <div className="box-11-inner-wrapper">
                            <BinaryField name="pain-discomfort" updateState={updatePainDiscomfort}/>
                            <div className="box-11-bottom">
                                <div className="box-11-bottom-left">
                                    <span>Source:</span>
                                    <DropdownField options={dropdownOptions} updateState={updatePainDiscomfortSource}/>
                                    <br></br>
                                    <span>Other Source: </span>
                                    <OptionField limit={50} updateState={updatePainDiscomfortSource}/>
                                </div>
                                <div className="box-11-bottom-right">
                                    <span>Notes</span>
                                    <br></br>
                                    <CommentField limit={500} updateState={updatePainDiscomfortComments}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="box-12-choking-gagging">
                        <span className="box-title">CHOKING/GAGGING</span>
                        <br></br>
                        <br></br>
                        <BinaryLabeledField label="SUCTION MACHINE?" name="suction-machine" updateState={updateSuctionMachine}/>
                    </div>
                </div>
            </div>
            <div className="sheet-foot-wrapper">
                <div className="sheet-foot-left">
                    <br></br>
                    <span>NOTES, COMMENTS, AREAS OF CONCERN OR FOLLOWUP</span>
                    <br></br>
                    <CommentField limit={1000} updateState={updateAOCFollowup}/>
                </div>
                <div className="sheet-foot-right">
                    <div className="save-button-wrapper">
                        <br></br>
                        <br></br>
                        <SaveButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Sheet;