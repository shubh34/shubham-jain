import React from 'react';
import './home.scss';
import Profile from '../../../assets/Profile4.jpg';
import Tabs from '../../shared-components/Tabs/Tabs'
import TabHeader from '../../shared-components/Tabs/TabHeader';
import TabPane from '../../shared-components/Tabs/TabPane';
import Me from '../About/Me';
import TabContent from '../../shared-components/Tabs/TabContent';
const Home = () => {
  return (
    <div>
    <img className="c-my-profile" src={Profile} alt='Profile' />
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
