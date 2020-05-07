import React from 'react';
import './Me.scss'
import SectionHeader from '../../shared-components/SectionHeader/SectionHeader';
import SectionSubHeader from '../../shared-components/SectionSubHeader/SectionSubHeader';
import { SubDetails } from './SubDetails/SubDetails';
import Button from '../../shared-components/Button/Button';

export const details = [
    {
        header: 'Living In',
        detail: 'Glasgow, Scotland (Moving to Barcelona, Spain)'
    },
    {
        header: 'Date Of Birth',
        detail: '4th Jan 1992',
    },
    {
        header: 'Place Of Birth',
        detail: 'Gaya, Bihar',
    },
    {
        header: 'Caste & Gotra',
        detail: 'Jain(Kala)',
    },{
        header: 'Appearance',
        detail: 'Fair',
    },{
        header: 'Education',
        detail: 'B.E in Computer Science, 2014',
    }, {
        header: 'Work Experience',
        detail: '5+ year of experience in IT, Currently working with Rakuten Tv in Barcelona, Spain as a Senior Software Engineer. Recently started freelancing and stock investment for secondary income',
    }, {
        header: 'Earning',
        detail: '€48000 + bonus per year'
    },{
        header: 'EatingStyle',
        detail: 'Vegetarian'  
    }, {
        header: 'Hobbies & Interest',
        detail: 'Cooking, Studying, Singing, Travelling, Playing Guitar, Games like Chess, Carrom, Badminton etc'
    }
]

const AboutMe = ({goToFamily}) => {
  
  return (
    <div class="c-container">
        <SectionHeader header="Subham Jain" align='left'/>
        <section className= 'c-profile-summary'>
            <div>
                <SectionSubHeader header={`28 Years`} />
                <SectionSubHeader header={`5' 5"`} />
                <SectionSubHeader header="+44 7881346229" />
            </div>
            <div>
                <SectionSubHeader header={`Senior Software Engineer`} />
                <SectionSubHeader header="€ 48000 per Annum" />
                <SectionSubHeader header={`B.E(Computer Science)`} />
            </div>
        </section>
        <section className= 'c-profile-description'>
            <SectionHeader header="Who I Am :" align='left'/>
            <p>Computer Science Engineer by Profession. Freelancer and Stock Investor for Passive income.</p>
            <p>I am a guy who <b>Code</b> the world for living, <b>Cook</b> deliciously when feel hungry, <b>Travel</b> to make memories, <b>Sing</b> songs when feel bored, <b>Play games</b> in the free time.</p>
        </section>
        <section className= 'c-profile-details'>
            {details.map(({header, detail}, index) => <SubDetails key={index} header={header} detail={detail} />)}
        </section>
        <section className= 'c-profile-family-link'>
            <Button type='link' name="Go to Family Background" onClick ={goToFamily}/>
        </section>
    </div>
  );
}

export default AboutMe;
