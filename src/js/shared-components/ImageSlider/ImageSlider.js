import React, {useState, useEffect} from 'react';
import './ImageSlider.scss';
import PropTypes from 'prop-types';

import Icon from '../Icons/Icon';

export const PlaceHolder = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 150">
        <rect fill="#ddd" />
        <text fill="rgba(0,0,0,0.5)" fontFamily="sans-serif" fontSize="30" dy="10.5" fontWeight="bold" x="50%" y="50%" textAnchor="middle">Loading...</text>
    </svg>
);

const ImageSlider = ({ images = [] }) => {
   
    const [currentImage, setCurrentImage] = useState(0);
    const [isImageLoaded, setImageLoaded] = useState(true);
    const [shouldShowLeftChevron, showLeftChevron] = useState(images.length> 1);
    const [shouldShowRightChevron, showRightChevron] = useState(images.length >= 2);
    useEffect(() => {
        setCurrentImage(0)
    }, [images])
    useEffect(() => {
        showLeftChevron(currentImage !== 0)
        showRightChevron(images.length !== currentImage+1)
    }, [images, currentImage])
    const slideLeft = () => {
        setCurrentImage(currentImage-1);
    }
    const slideRight = () => {
        setCurrentImage(currentImage+1);
    }
	return (
        <div className="c-image-slider">
            {shouldShowLeftChevron && <button className='c-image-slider-chevron c-image-slider-chevron-left' onClick={slideLeft}>
                <Icon name="chevron" iconSize="medium" />
            </button>}          
            {isImageLoaded && <img className="c-my-profile" src={images[currentImage]} alt='Profile' onLoad={() => {setImageLoaded(true)}} />}
            {!isImageLoaded &&<PlaceHolder />}
        
            {shouldShowRightChevron && <button className='c-image-slider-chevron c-image-slider-chevron-right' onClick={slideRight}>
                <Icon name="chevron" iconSize="medium" />
            </button>}
        </div>
	);
};

ImageSlider.propTypes = {
    images: PropTypes.array,
}

export default ImageSlider;
