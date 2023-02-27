
import React, { useState } from 'react';

const UpdateTimingsDD = () => {
    const [selectedHour, setSelectedHour] = useState(0);
    const [selectedMinute, setSelectedMinute] = useState(0);

    const hours = Array.from(Array(24).keys()); // creates an array of hours from 0 to 23
    const minutes = Array.from(Array(60).keys()); // creates an array of minutes from 0 to 59

    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const handleMinuteChange = (event) => {
        setSelectedMinute(event.target.value);
    };

    return (
        <>
            <select id="hour" onChange={handleHourChange} value={selectedHour} style={{ width: '40px' }}>
                <option value="">{selectedHour}</option>
                {hours.map((hour) => (
                    <option key={hour} value={hour}>
                        {hour}
                    </option>
                ))}
            </select>
            <select id="minute" onChange={handleMinuteChange} value={selectedMinute} style={{ width: '40px' }}>
                <option value="">Min</option>
                {minutes.map((minute) => (
                    <option key={minute} value={minute}>
                        {minute}
                    </option>
                ))}
            </select>
        </>

    )
}

export default UpdateTimingsDD;