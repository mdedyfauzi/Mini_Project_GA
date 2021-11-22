import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"


const CategoryFilter = () => {

    const [category, setCategory] = useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <FormControl fullWidth sx={{ width: "288px", marginRight: "24px" }}>
            <InputLabel id="demo-simple-select-label">Filter By Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Filter By Category"
                onChange={handleChange}
            >
                <MenuItem value={10}>All Category</MenuItem>
                <MenuItem value={20}>Photography</MenuItem>
                <MenuItem value={30}>Design</MenuItem>
                <MenuItem value={40}>Development</MenuItem>
                <MenuItem value={50}>Marketing</MenuItem>
                <MenuItem value={60}>Business</MenuItem>
                <MenuItem value={70}>Lifestyle</MenuItem>
                <MenuItem value={80}>Music</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CategoryFilter