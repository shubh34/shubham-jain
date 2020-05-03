import React from 'react';
import './Me.scss'
import SectionHeader from '../../shared-components/SectionHeader/SectionHeader';
import SectionSubHeader from '../../shared-components/SectionSubHeader/SectionSubHeader';

const AboutMe = () => {
  return (
    <div class="c-container">
        <SectionHeader header="Subham Jain" align='left'/>
        <section className= 'c-profile-summary'>
            <div>
                <SectionSubHeader header={`28 Years 5' 5"`} />
                <SectionSubHeader header="+44 7881346229" />
                <SectionSubHeader header={``} />
            </div>
            <div>
                <SectionSubHeader header={`Senior Software Engineer`} />
                <SectionSubHeader header="€ 48000 per Annum" />
                <SectionSubHeader header={`B.E(Computer Science)`} />
            </div>
        </section>
        <section className= 'c-profile-description'>
            Computer Science Engineer by Proffesion. Freelancer and Stock Investor as a partime.<br/>
            A guy who <b>Code</b> the world for living, <b>Cook</b> deliciously when you feel hungry, <b>Travel</b> to make memories, <b>Sing</b> songs when feel bored, <b>Play games</b> in the free time
        </section>
    </div>
  );
}

export default AboutMe;
