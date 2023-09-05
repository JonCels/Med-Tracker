import { FC, useState } from 'react';
import SheetWidget from './SheetWidget';

interface ContainerProps {
}

const SearchContainer: FC<ContainerProps> = ({ }) => {
    let widgetList: {
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
    }[] = [];
    
    const loadPage = () => {
        let allWidgetsUrl: string = encodeURI("http://localhost:8081/api/sheets/");
        fetch(allWidgetsUrl)
            .then((data) => {
                if (!data.ok) {
                    console.log("Error");
                }
                return data.json();
            })
            .then((update) => {
                widgetList = update;
                console.log(widgetList);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
    <div className="search-container">
        <button onClick={loadPage}>Print search</button>
        <div className="widget-headings">
            <span>Date</span>
            <span>Important Notes</span>
            <span>Areas of Concern or Followup</span>
        </div>
        <div className="search-results">
            <SheetWidget sheetData={widgetList[0]}/>
        </div>
    </div>
    )
};

export default SearchContainer;