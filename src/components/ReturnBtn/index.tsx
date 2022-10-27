import styles from './ReturnButton.module.scss';

type BtnProps = {
  text?: string;
};

function ReturnBtn(props: BtnProps) {
  const { text = '' } = props;
  console.log(styles);
  return <div className='return-btn'>{text}</div>;
}

export default ReturnBtn;