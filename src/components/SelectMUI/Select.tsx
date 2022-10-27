import { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import './select.scss';

export const SelectMUI = ({ object }: any): JSX.Element => {
  // eslint-disable-next-line
  const [values, setValues] = useState('');
  useEffect(() => {
    setValues(object);
  }, [object]);
  const objSelectValues = object;
  if (!objSelectValues) return <></>;

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    setValues(e.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <Select className="dropdownSelect" displayEmpty onChange={handleChange} defaultValue={1}>
        {objSelectValues.map((elem: any, idx: number) => {
          return (
            <MenuItem key={idx} value={elem.value}>
              {elem.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
