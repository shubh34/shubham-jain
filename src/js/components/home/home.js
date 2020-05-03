import React from 'react';
import './home.scss';
import Profile4 from '../../../assets/Profile4.jpg';
import Profile1 from '../../../assets/Profile1.jpg';
import Profile2 from '../../../assets/Profile2.jpg';
import Tabs from '../../shared-components/Tabs/Tabs'
import TabHeader from '../../shared-components/Tabs/TabHeader';
import TabPane from '../../shared-components/Tabs/TabPane';
import Me from '../About/Me';
import TabContent from '../../shared-components/Tabs/TabContent';
import ImageSlider from '../../shared-components/ImageSlider/ImageSlider';
const Home = () => {
  return (
    <div>
         <div className="c-image-slider-container">
            <ImageSlider images={[Profile4, Profile1, Profile2]} />
        </div>
       <div className="c-tab-container">
            <Tabs>
                <TabHeader>
                    <TabPane
                        id='login'
                        name='About'
                        onClick={() => {
                        }}
                        isActive
                    />
                    <TabPane
                        id='register'
                        name='FAMILY'
                        onClick={() => {
                        }}
                    />
                </TabHeader>
                <TabContent>
                            <Me />
                            {/* <Route path='/user/login' component={Login} />
                            <Route path='/user/register' component={Register} /> */}
                </TabContent>
                </Tabs>
        </div>
    </div>
  );
}

export default Home;
