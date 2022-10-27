import {ReactComponent as ModalLogo} from '../../assets/images/logo.svg';
import Btn from '../../components/ButtonMUI';
import './modal.scss'
import {useState} from "react";



type Props = {}

const Modal = (props: Props) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={open ? 'modal modal-auth active' : 'modal modal-auth'} >
            <div className="modal-overlay" onClick={(e) => e.stopPropagation()}></div>
            <div className="modal-body">
                <button className='modal-close' onClick={handleOpen}>
                    <svg width={24} height={24}><use xlinkHref='#icon-close'></use></svg>
                </button>

                <div className="modal-content">

                    <div className="auth">
                        <svg className="auth-bg auth-bg--top-left" width="190" height="152" viewBox="0 0 190 152"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M42.8896 -165L189.867 0.683296C107.053 35.5733 112.127 101.546 26.8432 145.302C-58.4409 189.058 -120.134 -20.3817 -120.134 -20.3817L42.8896 -165Z"
                                fill="#EDF6FC"/>
                        </svg>
                        <svg className='auth-bg auth-bg--bottom-left' width="145" height="119" viewBox="0 0 145 119"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-85.0001 161.138L-31.7421 0.635224C22.9931 42.0119 64.6461 13.4214 126.185 53.0384C187.723 92.6554 72.9265 213.541 72.9265 213.541L-85.0001 161.138Z"
                                fill="#EDF6FC"/>
                        </svg>
                        <svg className='auth-bg auth-bg--center-right' width="59" height="308" viewBox="0 0 59 308"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M312.616 174.776L135.067 307.175C107.325 221.7 41.1596 221.163 4.79278 132.475C-31.574 43.7882 182.342 0.0763335 182.342 0.0763335L312.616 174.776Z"
                                fill="#EDF6FC"/>
                        </svg>

                        <div className="auth-inner">
                            <div className="auth-logo">
                                <ModalLogo/>
                            </div>

                            <div className="auth-title">
                                Auth title
                                {/* Registration */}
                                {/* Log In */}
                                {/* Registration successful! */}
                            </div>
                            <div className="auth-subtitle">
                                Auth subtitle
                                {/* Register and use your personal account! */}
                                {/* Log in to your personal account! */}
                                {/* We've sent you a confirmation email. Please, check your email and confirm account creation */}
                            </div>


                            <form action="/" className="auth-form">
                                <div className="input-wrapper">
                                    <input className='input' type="text" placeholder='First name'/>
                                </div>
                                <div className="input-wrapper">
                                    <input className='input' type="text" placeholder='Last name'/>
                                </div>
                                <div className="input-wrapper">
                                    <input className='input' type="text" placeholder='E-mail'/>
                                </div>
                                <div className="input-wrapper">
                                    <input className='input' type="password" placeholder='Create password'/>
                                    <svg width={24} height={24}>
                                        <use xlinkHref='#icon-eye-opened'></use>
                                    </svg>
                                    {/* <svg width={24} height={24}><use xlinkHref='#icon-eye-closed'></use></svg> */}
                                </div>
                                <div className="input-wrapper">
                                    <input className='input' type="password" placeholder='Confirm password'/>
                                    <svg width={24} height={24}>
                                        <use xlinkHref='#icon-eye-opened'></use>
                                    </svg>
                                    {/* <svg width={24} height={24}><use xlinkHref='#icon-eye-closed'></use></svg> */}
                                </div>

                                {/* for login popup */}
                                <div className="checkbox-wrapper">
                                    <label htmlFor="remember-account">
                                        <input type="checkbox" id='remember-account' hidden/>
                                        <span className="box"></span>
                                        <span className='text'>Remember my account</span>
                                    </label>

                                </div>

                                <Btn text="Btn text"/>

                            </form>


                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal;