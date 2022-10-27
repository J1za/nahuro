import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { Switch, FormGroup, FormControlLabel, FormControl, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import './Filter.scss';

import useWindowDimensions from 'helpers/useWindowDimensions';

const cashYeild = [
  {
    value: 3,
    label: '3%'
  },
  {
    value: 12,
    label: '12%'
  }
];

const irr = [
  {
    value: 5,
    label: '5%'
  },
  {
    value: 22,
    label: '22%'
  }
];

const countries = [
  {
    name: 'All',
    value: ''
  },
  {
    name: 'United States',
    value: 'United States'
  },
  {
    name: 'UAE',
    value: 'UAE'
  },
  {
    name: 'France',
    value: 'France'
  },
  {
    name: 'Australia',
    value: 'Australia'
  }
];

const types = [
  {
    name: 'All',
    value: ''
  },
  {
    name: 'Multifamily',
    value: 'Multifamily'
  },
  {
    name: 'Singlefamily',
    value: 'Singlefamily'
  }
];

const ststuses = [
  {
    name: 'All',
    value: ''
  },
  {
    name: 'Active',
    value: 'Active'
  },
  {
    name: 'Inactive',
    value: 'Inactive'
  }
];

export type FilterData = {
  coc: number;
  irr: number;
  type: string;
  status: string;
  country: string;
};

type FilterProps = {
  onSubmit: (data: FilterData) => void;
};

export default function Filter({ onSubmit }: FilterProps) {
  const { width } = useWindowDimensions();
  const [filterStatus, setFilterStatus] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(event.target.checked);
  };
  React.useEffect(() => {
    width > 480 ? setFilterStatus(true) : setFilterStatus(false);
  }, [width]);

  const { control, handleSubmit } = useForm<FilterData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="filter_switch">
        <FormControlLabel
          control={<Switch checked={filterStatus} onChange={handleChange} aria-label="login switch" />}
          label={filterStatus ? 'Filter Close' : 'Filter Open'}
        />
      </FormGroup>
      {filterStatus && (
        <div className="filter">
          <div className="filter-item">
            <div className="filter-item-title">Country</div>
            <div className="filter-item-content">
              <div className="filter-select">
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} className="dropdownSelect" displayEmpty>
                        {countries.map(elem => (
                          <MenuItem key={elem.value} value={elem.value}>
                            {elem.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                <svg width={24} height={24}>
                  <use xlinkHref="#icon-select-circle-check"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-item-title">Property type</div>
            <div className="filter-item-content">
              <div className="filter-select">
                <Controller
                  name="type"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} className="dropdownSelect" displayEmpty>
                        {types.map(elem => (
                          <MenuItem key={elem.value} value={elem.value}>
                            {elem.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                <svg width={24} height={24}>
                  <use xlinkHref="#icon-select-circle-check"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-item-title">Cash Yeild</div>
            <div className="filter-item-content">
              <div className="filter-range">
                <Box component="div" sx={{ width: 135 }}>
                  <Controller
                    name="coc"
                    control={control}
                    defaultValue={cashYeild[0].value}
                    render={({ field }) => (
                      <Slider
                        {...field}
                        step={1}
                        marks={cashYeild}
                        valueLabelDisplay="on"
                        min={cashYeild[0].value}
                        max={cashYeild[1].value}
                      />
                    )}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-item-title">IRR</div>
            <div className="filter-item-content">
              <div className="filter-range">
                <Box component="div" sx={{ width: 135 }}>
                  <Controller
                    name="irr"
                    control={control}
                    defaultValue={irr[0].value}
                    render={({ field }) => (
                      <Slider
                        {...field}
                        step={1}
                        marks={irr}
                        valueLabelDisplay="on"
                        min={irr[0].value}
                        max={irr[1].value}
                      />
                    )}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-item-title">Status</div>
            <div className="filter-item-content">
              <div className="filter-select">
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} className="dropdownSelect" displayEmpty>
                        {ststuses.map(elem => (
                          <MenuItem key={elem.value} value={elem.value}>
                            {elem.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                <svg width={24} height={24}>
                  <use xlinkHref="#icon-select-circle-check"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="filter-item filter-item--search">
            <Button type="submit" variant="contained" color="primary">
              search
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
