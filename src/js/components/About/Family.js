import React from 'react';
import './Me.scss'
import { SubDetails } from './SubDetails/SubDetails';
import SectionHeader from '../../shared-components/SectionHeader/SectionHeader';

export const details = [
    {
        header: 'Living In',
        detail: ['Gaya, Bihar']
    },
    {
        header: 'Family Backgound',
        detail: ['Joint Family, Middle Class']
    },
    {
        header: 'Father',
        detail: ['Shri Ajay Jain', 'Business Man (Cloth Merchant)']
    },
    {
        header: 'Mother',
        detail: ['Smt. Asha Jain', 'Housewife']
    },
    {
        header: 'Brother',
        detail: ['Ankhil Jain', 'Education: Graduate(BCOM)', 'Business Man (Cloth Merchant)']
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
            {details.map(({header, detail}, index) => <SubDetails key={index} header={header} details={detail} />)}
        </section>
        <section className= 'c-family-description'>
            <SectionHeader header="Paternal Family" align={'left'} />
            <SubDetails header={'Grand Father'} details={['Shri Ratan Lal Jain']} />
            <SubDetails header={'Grand Mother'} details={['Smt Indramani Devi Jain']} />
            <SubDetails header={'Living In'} details={['Gaya, Bihar']} />
            <SubDetails header={'Family Backgound'} details={['Joint Family, Middle Class', 'Religious']} />
            <SubDetails header={'Father\'s Brother'} details={['4', 'Lives Seprately']} />
            <SubDetails header={'Father\'s Sister'} details={['1', 'Lives in Kolkata']} />
        </section>
        <section className= 'c-family-description'>
            <SectionHeader header="Maternal Family" align={'left'} />
            <SubDetails header={'Grand Father'} details={['Late Shri Ratan Lal Jain']} />
            <SubDetails header={'Grand Mother'} details={['']} />
            <SubDetails header={'Living In'} details={['Mihijam, Jharkhand']} />
            <SubDetails header={'Family Backgound'} details={['Joint Family, Middle Class', 'Religious']} />
            <SubDetails header={'Mother\'s Brother'} details={['3', 'Lives Seprately']} />
            <SubDetails header={'Mother\'s Sister'} details={['None']} />
        </section>
    </div>
  );
}

export default AboutFamily;
