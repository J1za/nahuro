import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import { ReactComponent as DropdownWhite } from '../../assets/icons/dropdownWhite.svg';

import './indexTokenPromo.scss'
export default function IndexTokenPromo() {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            className="tokenPromo"
        >
            <AccordionSummary
                expandIcon={<DropdownWhite />}
            >
                <div className="tokenPromo_border">
                    <div className="tokenPromo_space">
                        <span>INDEX TOKEN</span>
                        <p><strong>QOWN1</strong></p>
                    </div>
                </div>
                <div className="tokenPromo_border">
                    <div className="tokenPromo_space">
                        <span>TOTAL CAPITALIZATION</span>
                        <p><strong>$75,664,982</strong></p>
                    </div>
                    <div className="tokenPromo_space">
                        <span># PROPERTIES</span>
                        <p><strong>87</strong></p>
                    </div>
                    <div className="tokenPromo_space">
                        <span>CURRENT YIELD</span>


                        <p><strong>5,6%</strong></p>
                    </div>
                    <div className="tokenPromo_space">
                        <span>CURRENT IRR</span>
                        <p><strong>54%</strong></p>
                    </div>
                </div>
                <div className="tokenPromo_border">
                    <div className="tokenPromo_space">
                        <span>NEXT MINTING</span>
                        <p><strong>Starts soon</strong></p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}