import ReturnBtn from '../../components/ReturnBtn';
// import MyAssets from './myAssets';
import MyWallet from './myWallet';
import TransactionHistory from './TransactionHistory';

const CabinetAssets = () => {
    return (
        <div className="block-cabinet">
            <div className="container">
                <ReturnBtn text="back to main" />
                {/* <MyAssets /> */}
                <MyWallet />
                <TransactionHistory />
            </div>
        </div>
    )
}

export default CabinetAssets