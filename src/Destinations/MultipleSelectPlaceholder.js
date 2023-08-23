import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Cinnamon Grand Colombo',
  'Cinnamon Lakeside Colombo',
  'Cinnamon Red Colombo',
  'Cinnamon Bentota Beach',
  'Cinnamon Bey Beruwala',
  'Hikka Tranz by Cinnamon',
  'Cinnamon Wild Yala',
  'Trinco Blu by Cinnamon',
  'Cinnamon Citadel Kandy',
  'Cinnamon Lodge Habarana',
  'Habarana Village by Cinnamon',
  'Cinnamon Velifushi Maldives',
  'Cinnamon Hakuraa Huraa Maldives',
  'Cinnamon Dhonveli Maldives',
  'Ellaidhoo Maldives by Cinnamon'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{  width: 600,textAlign:'left',pb:8 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Cinnamon Life</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" sx={{textAlign:'left'}} color="#72328b">
            <em>Cinnamon Life</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
