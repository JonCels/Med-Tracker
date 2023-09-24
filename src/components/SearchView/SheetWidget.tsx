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
        combined_comments: string
    };
    passSheetData: (arg: {}) => void;
}

const SheetWidget: FC<SheetWidgetProps> = ({ sheetData, passSheetData }) => {
    const clickHandler = () => {
        passSheetData({...sheetData, date: new Date(sheetData.date)});
    };

    return (
        <tr className="sheet-widget">
            <td width="15%">{sheetData.date}</td>
            <td width="35%">{sheetData.important_notes}</td>
            <td width="45%">{sheetData.aoc_followup_comments}</td>
            <td width="5%" className="actionColumn">
                <img src="edit_icon.svg" className="actionButton" onClick={clickHandler}></img>
            </td>
        </tr>
    )
};

export default SheetWidget;