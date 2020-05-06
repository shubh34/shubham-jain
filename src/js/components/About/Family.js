import React from 'react';
import './Me.scss'
import SectionHeader from '../../shared-components/SectionHeader/SectionHeader';
import SectionSubHeader from '../../shared-components/SectionSubHeader/SectionSubHeader';
import { SubDetails } from './SubDetails/SubDetails';

export const details = [
    {
        header: 'Living In',
        detail: 'Glasgow, Scotland (Moving to Barcelona, Spain)'
    },
]

const AboutFamily = () => {
  
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
    </div>
  );
}

export default AboutFamily;
