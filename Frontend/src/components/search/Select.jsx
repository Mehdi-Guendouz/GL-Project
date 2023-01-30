import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [item, setItem] = React.useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <div className='w-full'>
        <Box>
            <FormControl fullWidth>
                <InputLabel>{props.name}</InputLabel>
                <Select
                id="select"
                value={item}
                label={props.name}
                onChange={handleChange}
                >
                        {props.list.map((category, catIdx) => (
                            <MenuItem value={catIdx}>{category.name}</MenuItem>
                        ))}
                </Select>
            </FormControl>
        </Box>
    </div>
  );
}