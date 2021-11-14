import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"


const SortFilter = () => {

    const [sort, setSort] = useState("");

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <FormControl fullWidth sx={{ width: "288px", }}>
            <InputLabel id="demo-simple-select-label">Sorting By</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sorting By"
                onChange={handleChange}
            >
                <MenuItem value={10}>Date</MenuItem>
                <MenuItem value={20}>Name</MenuItem>

            </Select>
        </FormControl>
    )
}

export default SortFilter