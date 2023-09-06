import { FC, useState, useEffect } from 'react';
import SheetWidget from './SheetWidget';

interface ContainerProps {
}

const SearchContainer: FC<ContainerProps> = ({ }) => {
    // const initType: {
    //     firstname: string,
    //     lastname: string,
    //     date: string,
    //     sortable_date: string,
    //     edaravone: string,
    //     edaravone_comments: string,
    //     edaravone_change: string,
    //     bipap_nighttime: string,
    //     bipap_nighttime_hours: number,
    //     bipap_daytime: string,
    //     bipap_daytime_hours: number,
    //     bipap_comments: string,
    //     sleep: string,
    //     bowel_movement: string,
    //     bowel_movement_comments: string,
    //     urine_output: number,
    //     urine_morning: string,
    //     urine_daily_volume: number,
    //     urine_comments: string,
    //     medication_rx_change: string,
    //     medication_routine_change: string,
    //     morning_shake_via_pump: string,
    //     gtube_other_comments: string,
    //     dinner_oral_feed_comments: string,
    //     pain_discomfort: string,
    //     pain_discomfort_source: string,
    //     pain_discomfort_comments: string,
    //     suction_machine: string,
    //     aoc_followup_comments: string,
    //     important_notes: string,
    // };

    const [widgetList, setWidgetList] = useState<any[]>([]);

    useEffect(() => {
        loadExistingSheets();
    }, []);

    useEffect(() => {
        console.log(widgetList);
        testDynamic();
    }, [widgetList]);

    const loadExistingSheets = () => {
        let allWidgetsUrl: string = encodeURI("http://localhost:8081/api/sheets/");
        fetch(allWidgetsUrl)
            .then((data) => {
                if (!data.ok) {
                    console.log("Error");
                }
                return data.json();
            })
            .then((update) => {
                setWidgetList(update);
            })
            .catch(err => {
                console.log(err);
            });
    };

    function testDynamic(): void {
        for (let i = 0; i < widgetList.length; i++) {
            console.log(widgetList[i]);
        }
    }

    return (
    <div className="search-container">
        <div className="widget-headings">
            <span>Date</span>
            <span>Important Notes</span>
            <span>Areas of Concern or Followup</span>
        </div>
        <div className="search-results">
            {widgetList.map((widget) => {
                return (
                    <div key={widget.id}>
                        <SheetWidget sheetData={widget}/>
                    </div>
                );
            })}
        </div>
    </div>
    )
};

export default SearchContainer;