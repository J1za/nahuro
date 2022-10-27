import BlockImage from '../../assets/images/Block.svg';


// type TTextData = {
//     textTitle: string;
// }

// const textDescription : TTextData[] = [

//     {textTitle :  'Spend time'},
//     {textTitle :  'You can be scammed'},
//     {textTitle :  'Pay mortgage'},
//     {textTitle :  'Pay property taxes'},
//     {textTitle :  'Pay property taxes'},
//     {textTitle :  'Pay high agency commissions for buy and sell'},
//     {textTitle :  'Repair costs and nervous'},
//     {textTitle :  'Pay for the lawyers'},

// ]


export const BlockCompany = () => {
    return (
        <div>
            <section className="block-about-company">
                <div className="container">
                    <div className="about-content">
                        <div className="about-content_inner">
                            <h2 className="block-title">
                                Industry Problems
                            </h2>
                            <h4>Building Owners have significant equity tied up for years</h4>
                            <ul>
                                <li>Bank refinancing is restrictive and does not optimize maximum value for owners</li>
                                <li>Selling an asset in order to acquire another asset is disruptive to AUM growth process</li>
                                <li>Pressure from LP investors who cannot exit early</li>
                            </ul>
                        </div>
                        <div className="about-content_inner">
                            <h4>Liquidity</h4>
                            <ul>
                                <li>Bank refinancing is restrictive and does not optimize maximum value for owners</li>
                                <li>Selling an asset in order to acquire another asset is disruptive to AUM growth process</li>
                                <li>Pressure from LP investors who cannot exit early</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-group-image">
                        <img src={BlockImage} alt="" />
                    </div>
                </div>

                {/*<div className="container">*/}
                {/*    <h2 className="block-title">About company</h2>*/}
                {/*    <div className="about-content">*/}
                {/*        <div className="about-group">*/}
                {/*            <div className="about-group-text">*/}
                {/*                <div className="about-group-title">The problem</div>*/}
                {/*                <div className="about-group-descr">*/}
                {/*                    A person changes property several times in a lifetime, depending on life circumstances*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="about-group-figure">*/}
                {/*                <img src="img/about-company-chart.svg" alt="" loading="lazy" />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="about-group">*/}
                {/*            <div className="about-group-text">*/}
                {/*                <div className="about-group-title">The ownership of real estate is always associated with:</div>*/}
                {/*                /!* <div className='about-group-descr'></div> *!/*/}
                {/*            </div>*/}
                {/*            <div className="about-group-figure">*/}
                {/*                <ul>*/}
                {/*                    {textDescription.map( (e, i ) => {*/}
                {/*                        return (*/}
                {/*                            <li>*/}
                {/*                                <span key={i}>{`!`}</span>{e.textTitle}*/}
                {/*                            </li>*/}
                {/*                        )*/}
                {/*                    })}*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </div>
    );
};

