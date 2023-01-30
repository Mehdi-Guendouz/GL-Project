import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtons() {
  return (
    <div className=''>
        <FormControl>
            <FormLabel>Modalié</FormLabel>
            <RadioGroup
                defaultValue="Hors-ligne"
                name="radio-buttons"
            >
                <FormControlLabel value="En-ligne" control={<Radio />} label="En-ligne" />
                <FormControlLabel value="Hors-ligne" control={<Radio />} label="Hors-ligne" />
            </RadioGroup>
    </FormControl>
    </div>
  );
}
