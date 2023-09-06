import { FC, useState } from 'react';

interface SheetWidgetProps {
    sheetData: {
        firstname: string,
        lastname: string,
        date: string,
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
    };
}

const SheetWidget: FC<SheetWidgetProps> = ({ sheetData }) => {
    const initState = {
        firstname: "Mike",
        lastname: "Cels",
        date: new Date().toDateString(),
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
    };

    const date = sheetData == null ? initState.date : sheetData.date;
    const important_notes = sheetData == null ? initState.important_notes : sheetData.important_notes;
    const aoc_followup_comments = sheetData == null ? initState.aoc_followup_comments : sheetData.aoc_followup_comments;

    return (
    <div className="sheet-widget">
        <span>{date}</span>
        <span>{important_notes}</span>
        <span>{aoc_followup_comments}</span>
    </div>
    )
};

export default SheetWidget;