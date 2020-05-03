import React, {useState, useEffect} from 'react';
import './ImageSlider.scss';
import PropTypes from 'prop-types';

import Icon from '../Icons/Icon';

const ImageSlider = ({ images = [] }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [shouldShowLeftChevron, showLeftChevron] = useState(images.length> 1);
    const [shouldShowRightChevron, showRightChevron] = useState(images.length >= 2);
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
        <img className="c-my-profile" src={images[currentImage]} alt='Profile' />
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
