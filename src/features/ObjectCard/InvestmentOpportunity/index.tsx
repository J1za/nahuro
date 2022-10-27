import './investmentOpportunity.scss';
import ButtonMUI from '../../../components/ButtonMUI';
import InputMUI from '../../../components/InputMUI';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { ReactComponent as Attention } from '../../../assets/icons/attention.svg';
import { useCallback, useState, ChangeEvent, useMemo, FC } from 'react';
import { formatCurrency } from '../../property/helpers';
import { InvestmentOpportunityProps } from '../types';
import { TokensProgress } from '../../property/components/TokensProgress';

const InvestmentOpportunity: FC<InvestmentOpportunityProps> = ({
  totalPriceUI,
  irrUI,
  cocUI,
  tokenPriceUI,
  tokensLeftUI,
  tokenPrice,
  progress,
  progressUI
}) => {
  const [value, setValue] = useState<string>('');

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  }, []);

  const investment = useMemo(() => formatCurrency(Number(value) ? tokenPrice * Number(value) : 0), [value, tokenPrice]);

  return (
    <div className="invest-op">
      <h2 className="invest-op_title">Investment opportunity</h2>
      <div className="invest-op_target">
        <h2>{totalPriceUI}</h2>
        <p>target</p>
        <TokensProgress
          progress={progress}
          progressUI={progressUI}
          tokensLeftUI={tokensLeftUI}
          totalPriceUI={totalPriceUI}
        />
        <div className="invest-op_target_btn">
          <ButtonMUI style={{ width: '100%' }}>buy tokens</ButtonMUI>
        </div>
      </div>
      <div className="invest-op_info">
        <div className="invest-op_info_box">
          <div>
            Projected IRR
            <Tooltip
              title="The internal rate of return (IRR) is a metric used in financial analysis to estimate the profitability of potential investments. IRR is a discount rate that makes the net present value (NPV) of all cash flows equal to zero in a discounted cash flow analysis."
              followCursor
              placement="right"
            >
              <Box component={'span'} sx={{ cursor: 'pointer' }}>
                <Attention />
              </Box>
            </Tooltip>
          </div>
          <p>
            <strong>{irrUI}</strong>
          </p>
        </div>
        <div className="invest-op_info_box">
          <div>
            Project cash yield
            <Tooltip
              title="Cash-on-cash yield is a basic calculation used to estimate the return from an asset that generates income. Cash-on-cash yield also refers to the total amount of distributions paid annually by an income trust as a percentage of its current price. The cash-on-cash yield is a measurement technique that can be used to compare different unit trusts."
              followCursor
              placement="right"

            >
              <Box component={'span'} sx={{ cursor: 'pointer' }}>
                <Attention />
              </Box>
            </Tooltip>
          </div>
          <p>
            <strong>{cocUI}</strong>
          </p>
        </div>
        <div className="invest-op_info_box">
          <div>
            Minimum investment
            {/* <Tooltip title="You don't have permission to do this" followCursor placement="right">
              <Box component={'span'} sx={{ cursor: 'pointer' }}>
                <Attention />
              </Box>
            </Tooltip> */}
          </div>
          <p>
            <strong>{tokenPriceUI}</strong>
            {/* <span>(+34%)</span> */}
          </p>
        </div>
      </div>
      <div className="invest-op_cost">
        <h5>How much tokens you want to purchase:</h5>
        <div className="invest-op_cost_input">
          <InputMUI value={value} onChange={changeHandler} />
          <p>
            Available number of tokens for you: <span>{tokensLeftUI}</span>
          </p>
        </div>
      </div>
      <div className="invest-op_your">
        <h3>Your investment:</h3>
        <h2>{investment}</h2>
        <p>Share of total equity: 0.5%</p>
        <div className="invest-op_your_btn">
          <ButtonMUI style={{ width: '100%' }}>buy tokens</ButtonMUI>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunity;
