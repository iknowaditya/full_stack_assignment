import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'; // Import from the main package
import dayjs from "dayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

const CustomDateRangePicker = ({ onApply }) => {
    const [value, setValue] = useState([null, null]);

    const handleApply = () => {
        onApply(value);
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker
                        startText="Start"
                        endText="End"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        textField={(startProps, endProps) => (
                            <>
                                <TextField {...startProps} />
                                <TextField {...endProps} />
                            </>

                        )}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <Button onClick={handleApply} variant="contained" color="primary">
                Apply Date Range
            </Button>
        </div>
    );
};

export default CustomDateRangePicker;
