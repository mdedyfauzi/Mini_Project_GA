import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"


const DateFilter = () => {

    const [date, setDate] = useState("");

    const handleChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <FormControl fullWidth sx={{ width: "288px",  }}>
            <InputLabel id="demo-simple-select-label">Filter By Date</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label="Filter By Date"
                onChange={handleChange}
            >
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>Tomorrow</MenuItem>
                <MenuItem value={30}>This Week</MenuItem>
                <MenuItem value={40}>This Month</MenuItem>
                <MenuItem value={50}>This Year</MenuItem>
                <MenuItem value={60}>All Time</MenuItem>
            </Select>
        </FormControl>
    )
}

export default DateFilter