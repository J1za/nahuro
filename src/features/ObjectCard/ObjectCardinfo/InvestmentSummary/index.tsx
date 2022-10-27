import { FC } from 'react';
import './investmentSummary.scss';
import { Box, Grid } from '@mui/material';

import { InvestmentSummaryCardProps } from '../../types';

const InvestmentSummaryCard: FC<InvestmentSummaryCardProps> = ({
  totalPriceUI,
  tokenPriceUI,
  cocUI,
  irrUI,
  equityMultiple,
  totalTokensUI,
  tokensLeftUI
}) => {
  return (
    <div className="inv-summarycard">
      <h3>Investment summary</h3>
      <Box component="div" sx={{ display: 'flex', maxWidth: '540px' }}>
        <Box component="div" sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={{ xs: 2, sm: 3 }} columnSpacing={{ xs: 2 }}>
            <Grid item xs={6} sm={4}>
              <Box className="inv-summarycard_box" component="p">
                Target amount
              </Box>
              <Box component="p" sx={{ fontWeight: '500' }}>
                {totalPriceUI}
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box className="inv-summarycard_box" component="p">
                Target Cash Yield
              </Box>
              <Box component="p" sx={{ fontWeight: '500' }}>
                {cocUI}
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box className="inv-summarycard_box" component="p">
                Token price
              </Box>
              <Box component="p" sx={{ fontWeight: '500' }}>
                {tokenPriceUI}
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box className="inv-summarycard_box" component="p">
                Target IRR
              </Box>
              <Box component="p" sx={{ fontWeight: '500' }}>
                {irrUI}
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box className="inv-summarycard_box" component="p">
                Targeted Equity Multiple
              </Box>
              <Box component="p" sx={{ fontWeight: '500' }}>
                {equityMultiple}
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box className="inv-summarycard_box" component="p">
                Total tokens
              </Box>
              <Box component="p" sx={{ fontWeight: '500' }}>
                {totalTokensUI}
                <Box component="p" sx={{ fontWeight: '300', fontSize: '8px', lineHeight: '9px', marginTop: '3px' }}>
                  {tokensLeftUI} tokes left
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box component="div" className="inv-summarycard_token">
          This property is part of index token portfolio
          <strong>QOWN1</strong>
        </Box>
      </Box>
    </div>
  );
};

export default InvestmentSummaryCard;
