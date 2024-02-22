
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React from 'react'
import MenuItem from '@mui/material/MenuItem';


export const FilterComponent = ({ onCountryChange }) => {
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        onCountryChange(event.target.value);
        setCountry(event.target.value);
    };


    return (
        <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-helper-label">Select Country</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={country}
                label="Select Country"
                onChange={handleChange}
            >
                <MenuItem value="All" selected>All</MenuItem>
                <MenuItem value={'Germany'}>Germany</MenuItem>
                <MenuItem value={'France'}>France</MenuItem>
                <MenuItem value={'India'}>India</MenuItem>
            </Select>
        </FormControl>
    )
}