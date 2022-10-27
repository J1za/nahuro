import './investNFTBundle.scss';

import BundleImage from '../../../../assets/images/BundleCardImage.png'
import ButtonMUI from '../../../../components/ButtonMUI';
import { ReactComponent as CheckFilled } from '../../../../assets/icons/CheckFilled.svg';


const InvestNFTBundle = () => {
    return (
        <div className='invset-nftbundle'>
            <h3>INVEST IN THIS PROPERTY THROUGHT NFT BUNDLE</h3>
            <div className='invset-nftbundle_img'>
                <img src={BundleImage} alt="bundles" />
            </div>
            <p className='invset-nftbundle_available'><strong>56</strong> bundles available</p>
            <div className='invset-nftbundle_button'>
                <ButtonMUI style={{ width: '300px', padding: '5px 16px' }} transparentButton>EXPLORE ALL COLLECTION</ButtonMUI>
            </div>
            <div className="invset-nftbundle_works">
                <h3>How NFT bundle works?</h3>
                <div className="invset-nftbundle_inner">
                    <div className="invset-nftbundle_box">
                        <CheckFilled />
                        <p>You purchase unique NFT connected to this property, that includes a set of property tokens</p>
                    </div>
                    <div className="invset-nftbundle_box">
                        <CheckFilled />
                        <p>You can use your property tokens  separately from NFT </p>
                    </div>
                    <div className="invset-nftbundle_box">
                        <CheckFilled />
                        <p>You  sell NFT tokens and property <br /> tokens separatelly </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InvestNFTBundle
