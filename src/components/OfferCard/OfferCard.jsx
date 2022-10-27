import Btn from '../ButtonMUI';

export default function OfferCard() {
    return <div className='offer-card'>
        <button className='offer-card-favourite'></button>
        <div className='ooffer-card-photo'>
            <img src='temp/img/offer-card.jpg' alt='' loading='lazy'/>
        </div>
        <div className='offer-card-funded'>

        </div>
        <div className='offer-card-category'>
            Multifamily
        </div>
        <div className='offer-card-location'>
            BEAVERTON, OX
        </div>
        <div className='offer-card-title'>
            The Huntley Apartaments
        </div>
        <div className='offer-card-params'>
            <span>
                VALUE-ADD
            </span>
            <span>
                EQUITY
            </span>
        </div>
        <div className='offer-card-stats'></div>
        <div className='offer-card-stats'></div>
        <div className='offer-card-descr'>

        </div>
        <Btn text='Details'/>
    </div>
}
