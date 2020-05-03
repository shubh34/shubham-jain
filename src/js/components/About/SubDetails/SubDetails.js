
import React from 'react';
import './SubDetails.scss';
import SectionSubHeader from '../../../shared-components/SectionSubHeader/SectionSubHeader';

export const SubDetails = ({ header, detail}) => (
    <div className="c-sub-details-container">
        <SectionSubHeader header={header} />
        <span className="c-sub-details">{detail}</span>
    </div>
);