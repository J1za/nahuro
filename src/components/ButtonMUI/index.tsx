import { FC } from 'react';
import Button from '@mui/material/Button';
import './Button.scss';
import ButtonInterface from './interfaces';
import cn from 'classnames';

const ButtonMUI: FC<ButtonInterface> = ({
  text,
  className,
  opacity09,
  transparentButton,
  outlinedButton,
  children,
  style
}) => {
  return (
    <Button
      className={cn(className, {
        'button-mui--09': opacity09,
        'button-mui--transparent': transparentButton,
        'button-mui--outlined': outlinedButton
      })}
      classes={{
        root: 'button-mui'
      }}
      style={{ ...style }}
    >
      {children || text}
    </Button>
  );
};

export default ButtonMUI;
