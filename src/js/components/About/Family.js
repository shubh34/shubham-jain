import React from 'react';
import './Me.scss'
import SectionHeader from '../../shared-components/SectionHeader/SectionHeader';
import SectionSubHeader from '../../shared-components/SectionSubHeader/SectionSubHeader';
import { SubDetails } from './SubDetails/SubDetails';

export const details = [
    {
        header: 'Living In',
        detail: 'Gaya, Bihar'
    },
    {
        header: 'Family Backgound',
        detail: 'Joint Family, Middle Class'
    },
    {
        header: 'Father\'s Name & Occupation',
        detail: 'Shri Ajay Jain, Busniess man'
    },
    {
        header: 'Mother\'s Name & Occupation',
        detail: 'Smt. Asha Jain, Housewife'
    },
    {
        header: 'Brother\'s Name & Occupation',
        detail: 'Ankhil Jain, Busniess man'
    },

]

const AboutFamily = () => {
  
  return (
    <div class="c-container">
        <section className= 'c-profile-description'>
            <p>I Live in a Joint Family. My Father is a Business man, Mother is a Housewife and Brother has joined the Family business</p>
            <p>We are Religious and follow Jainism.</p>
        </section>
        <section className= 'c-profile-details'>
            {details.map(({header, detail}, index) => <SubDetails key={index} header={header} detail={detail} />)}
        </section>
    </div>
  );
}

export default AboutFamily;
