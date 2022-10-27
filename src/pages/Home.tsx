import SectionFooterIcons from '../components/SectionfooterIcons';
import { BlockPlanet } from '../components/BlockPlanet';
import { BlockCompany } from '../components/BlockCompany';
import { BlockPhone } from '../components/BlockPhone';
import { BlockPresentation } from '../components/BlockPresentation';
import { BlockOffers } from '../components/BlockOffers';

// import ModalAuth from '../components/Modal/Modal';
import {SelectMUI} from "../components/SelectMUI/Select";
import Modal from "../components/Modal/Modal";

export const HomePage = () => {
  return (

    <>
      <main className="content">
        <SelectMUI />
        <BlockPlanet />
        <BlockCompany />
        <BlockPhone />
        <BlockPresentation />
        <BlockOffers />
        <SectionFooterIcons />
      </main>


      <Modal />

      {/* добавить иконки в общий спрайт */}
      <div className="sprite">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <symbol viewBox="0 0 24 24" id='icon-close'>
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
          </symbol>

          <symbol viewBox="0 0 24 24" id='icon-eye-opened'>
            <path d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z" fill="currentColor"/>
          </symbol>

          <symbol viewBox="0 0 24 24" id='icon-eye-closed'>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
          </symbol>

        </svg>
      </div>



    </>
  );
};
