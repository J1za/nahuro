import './CurrentBalanceCard.scss'
import { ReactComponent as Eye } from '../../../assets/icons/Eye.svg';
const CurrentBalanceCard = () => {
    return (
        <div className='current-balcard'>
            <div className='current-balcard_top'>
                <h3>Your current balance in this property</h3>
                <Eye />
            </div>
            <div className='current-balcard_info'>
                <div className='current-balcard_box'>
                    <p>Number of  purchased tokens</p>
                    <h2>10</h2>
                </div>
                <div className='current-balcard_box'>
                    <p>Current value of tokens</p>
                    <h2>$670,454</h2>
                </div>
            </div>
        </div>
    )
}

export default CurrentBalanceCard
