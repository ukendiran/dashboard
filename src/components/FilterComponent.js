
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React from 'react'
import MenuItem from '@mui/material/MenuItem';


export const FilterComponent=()=>{
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return(
        <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Country</InputLabel>
        <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Select Country"
            onChange={handleChange}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={'Germany'}>Germany</MenuItem>
            <MenuItem value={'France'}>France</MenuItem>
            <MenuItem value={'India'}>India</MenuItem>
        </Select>
    </FormControl>
    )
}