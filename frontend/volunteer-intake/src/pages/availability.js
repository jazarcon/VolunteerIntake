import { useState } from "react";
import Schedule from "../components/schedule";

function Availability() {
    // Page for filling out availability


    return (
        <div>
            <div style={styles.containter}>
                <h1>Availability</h1>
                <p>What does your general availability look like? Please fill out the form below.</p>
                <p>Click and drag to select what hours you are usually available on each</p>
                <p>Note: times are in standard military time</p>
                <Schedule />  
            </div>
        </div>
    );
}

export default Availability;

const styles = {
    containter: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    mainContent: {
        flex: 1,
        alignItems: 'flex-start',
    },
};