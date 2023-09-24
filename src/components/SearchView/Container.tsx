import { FC, useState, useEffect } from 'react';
import SheetWidget from './SheetWidget';

interface ContainerProps {
    passRowData: (arg: {}) => void;
}

const SearchContainer: FC<ContainerProps> = ({ passRowData }) => {
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

    const backendURI: string = 'https://daily-med-tracker.onrender.com/api/sheets/';

    const [widgetList, setWidgetList] = useState<any[]>([]);

    useEffect(() => {
        loadExistingSheets();
    }, []);

    const loadExistingSheets = () => {
        let allWidgetsUrl: string = encodeURI(backendURI);
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

    const callbackHandler = (arg: {}) => {
        passRowData(arg);
    }

    return (
    <div className="search-container">
        <table>
            <tbody>
                <tr className="widget-headings">
                    <th>Date</th>
                    <th>Important Notes</th>
                    <th>Areas of Concern or Followup</th>
                    <th>Actions</th>
                </tr>
                {widgetList.map((widget) => {
                    return (
                        <SheetWidget key={widget.id} sheetData={widget} passSheetData={callbackHandler}/>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
};

export default SearchContainer;