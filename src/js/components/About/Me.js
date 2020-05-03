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
                <SectionSubHeader header="€ 48000 per Annun" />
                <SectionSubHeader header={`B.E(Computer Science)`} />
            </div>
        </section>
        <section>
        </section>
    </div>
  );
}

export default AboutMe;
