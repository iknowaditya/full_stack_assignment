import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material';
import { Button } from '@mui/material';

const PriceRangeSlider = ({ onApply }) => {
    const [value, setValue] = useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleApply = () => {
        onApply(value);
    };

    return (
        <div>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                step={1}
            />
            <Button onClick={handleApply} variant="contained" color="primary">
                Apply Price Range
            </Button>
        </div>
    );
};

export default PriceRangeSlider;
