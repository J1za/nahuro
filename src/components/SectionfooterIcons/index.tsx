import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import Visa from '../../temp/logo-1.svg';
// import IconPaypal from '../../temp/logo-2.svg';
// import IconApple from '../../temp/logo-3.svg';
// import IconMastercard from '../../temp/logo-4.svg';
import IconMaestro from '../../temp/logo-5.svg';
import IconDiscover from '../../temp/logo-6.svg';
import IconJcb from '../../temp/logo-7.svg';
import IconDiners from '../../temp/logo-8.svg';
import IconVisa from '../../temp/logo-9.svg';
import IconVisaElectron from '../../temp/logo-10.svg';
import IconVisaDebit from '../../temp/logo-11.svg';
import IconVisaDelta from '../../temp/logo-12.svg';
import IconEtherium from '../../temp/Etherium.svg';
import IconTether from '../../temp/Tether.svg';
import IconUSDC from '../../temp/USDC.svg';

type TIcons = {
  iconImage: string;
  key: string;
};

const iconImages: TIcons[] = [
  {
    iconImage: IconEtherium,
    key: 'etherium'
  },
  {
    iconImage: IconTether,
    key: 'tether'
  },
  {
    iconImage: IconUSDC,
    key: 'USDC'
  },
  {
    iconImage: IconJcb,
    key: 'Jcb'
  },
  {
    iconImage: Visa,
    key: 'Visa'
  },
  // {
  //   iconImage: IconMastercard,
  //   key: 'Mastercard'
  // },
  {
    iconImage: IconMaestro,
    key: 'Maestro'
  },
  {
    iconImage: IconDiscover,
    key: 'Discover'
  },
  {
    iconImage: IconDiners,
    key: 'Diners'
  },
  {
    iconImage: IconVisa,
    key: 'Visa'
  },
  {
    iconImage: IconVisaElectron,
    key: 'VisaElectron'
  },
  {
    iconImage: IconVisaDebit,
    key: 'VisaDebit'
  },
  {
    iconImage: IconVisaDelta,
    key: 'VisaDelta'
  },
];

const boxVariant = {
  hidden: { x: 2000, scale: 0, opacity: 0 },
  visible: { x: 0, scale: [0.1, 1], opacity: [0.3, 0.5, 0.7, 1] },
  once: { opacity: [1] }
};

const SectionFooterIcons = () => {
  const [numberAnimation, setNumberAnimation] = useState(0);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && numberAnimation === 0) {
      control.start('visible');
      setNumberAnimation(1);
    }
  }, [control, inView, numberAnimation]);

  return (
    <section className="block-payment-logos">
      <div className="container">
        <div className="block-inner">
          <div className="text">
            <h2 className="block-title">Payment</h2>
            <div className="descr">NAHURO it is first of all flexibility and convenience for our clients</div>
            <div className="annotation">
              That is why we offer any convenient form of payment for the services provided
            </div>
          </div>
          <div ref={ref} className="logos">
            {iconImages.map((el, idx) => {
              return (
                <motion.div
                  className="logo"
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ ease: 'circOut', duration: 0.6, delay: idx / 5 }}
                >
                  <img src={el.iconImage} loading="lazy" alt="" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFooterIcons;
