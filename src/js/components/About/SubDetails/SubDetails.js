
import React from 'react';
import './SubDetails.scss';
import SectionSubHeader from '../../../shared-components/SectionSubHeader/SectionSubHeader';

export const SubDetails = ({ header, details = []}) => (
    <div className="c-sub-details-container">
        {header && <SectionSubHeader header={header} />}
        {details.map((detail) => <span key={detail} className="c-sub-details">{detail}</span>)}
    </div>
);