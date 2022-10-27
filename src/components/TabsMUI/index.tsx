import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './Tabs.scss';

interface TabsMUIInterface {
  children?: React.ReactNode;
}
const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: `#8F90A6 !important`,
          '&.Mui-selected': {
            color: `#110229 !important`
          }
        }
      }
    }
  }
});

const TabsMUI: React.FC<TabsMUIInterface> = ({ children }) => {
  const [value, setValue] = React.useState('2');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box component="div" sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box component="div" sx={{ borderBottom: 0 }}>
          <ThemeProvider theme={theme}>
            <TabList
              textColor="secondary"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              className="tablist"
              TabIndicatorProps={{
                style: {
                  display: 'none'
                }
              }}
            >
              <Tab label="My assets" value="1" disabled />
              <Tab label="Description" value="2" />
              <Tab label="Financials" value="3" disabled />
              <Tab label="Documents" value="4" disabled />
              <Tab label="Project status" value="5" disabled />
              <Tab label="Updates" value="6" disabled />
              <Tab label="Discussion" value="7" disabled />
              <Tab label="Transactions" value="8" disabled />
              <Tab label="Voating" value="9" disabled />
            </TabList>
          </ThemeProvider>
        </Box>
        <TabPanel className="tabpanel" value="1">
          {children}
        </TabPanel>
        <TabPanel className="tabpanel" value="2">
          {children}
        </TabPanel>
        <TabPanel className="tabpanel" value="3">
          {children}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabsMUI;
