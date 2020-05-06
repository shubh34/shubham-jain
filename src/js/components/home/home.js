import React, { useState } from 'react';
import './home.scss';

import Tabs from '../../shared-components/Tabs/Tabs'
import TabHeader from '../../shared-components/Tabs/TabHeader';
import TabPane from '../../shared-components/Tabs/TabPane';
import Me from '../About/Me';
import TabContent from '../../shared-components/Tabs/TabContent';
import ImageSlider from '../../shared-components/ImageSlider/ImageSlider';
import Family from '../About/Family';
import { getImages } from '../../utils/imageUtils';
const Home = () => {
    const [activeTab, setActiveTab] = useState('about-me')
    const isAboutMeActive = activeTab === 'about-me';
  return (
    <div>
         <div className="c-image-slider-container">
            <ImageSlider images={getImages(isAboutMeActive)} />
        </div>
       <div className="c-tab-container">
            <Tabs>
                <TabHeader>
                    <TabPane
                        id='about-me'
                        name='About'
                        onClick={() => setActiveTab('about-me')}
                        isActive={isAboutMeActive}
                    />
                    <TabPane
                        id='about-family'
                        name='FAMILY'
                        onClick={() => setActiveTab('about-family')}
                        isActive={!isAboutMeActive}
                    />
                </TabHeader>
                <TabContent>
                    {isAboutMeActive && <Me goToFamily= {() => setActiveTab('about-family')}/>}
                    {!isAboutMeActive &&  <Family />}
                 </TabContent>
                </Tabs>
        </div>
    </div>
  );
}

export default Home;
