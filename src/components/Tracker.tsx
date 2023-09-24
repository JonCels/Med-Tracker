import { FC, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Header from './components/Header';
import Sheet from './SheetView/Sheet';
import ViewBar from './ViewBar';
import Container from './SearchView/Container';

interface TrackerProps {}


const Tracker: FC<TrackerProps> = () => {
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

    const [state, setState] = useState(initState);

    const loadPastData = (stateData: any) => {
        setState({...stateData});
    };

    return (
    <div className="binary-labeled-field">
        <Tabs>
        <TabList>
          <Tab>Sheet Page</Tab>
          <Tab>Search Page</Tab>
        </TabList>

        <TabPanel>
          <Sheet initialData={state}/>
        </TabPanel>
        <TabPanel>
          <Container passRowData={loadPastData}/>
        </TabPanel>
      </Tabs>
    </div>
    )
};

export default Tracker;