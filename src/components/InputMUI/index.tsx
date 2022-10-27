import './inputMUI.scss';
import TextField from '@mui/material/TextField';

const InputMUI = ({ value, onChange }: any) => {
  return <TextField className="inputmui" placeholder="10" value={value} onChange={onChange} />;
};

export default InputMUI;
