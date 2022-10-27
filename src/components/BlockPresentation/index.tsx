import React from 'react';

export const BlockPresentation = () => {
    return (
        <div>
            <section className="block-about-presentation">
                <div className="container wide">
                    <h2 className="block-title">
                        NAHURO is a crowdfunding <br />
                        platform for property
                    </h2>
                    <div className="about-presentation">
                        <picture>
                            <source srcSet="img/about-company-presentation-desktop.svg" media="(min-width: 1024px)" />
                            <source srcSet="img/about-company-presentation-tablet.svg" media="(min-width: 768px)" />
                            <img src="img/about-company-presentation-mobile.svg" alt="" loading="lazy" />
                        </picture>

                    </div>
                </div>
            </section>
        </div>
    );
};

