import Profile4 from '../../assets/Profile4.jpg';
import Profile1 from '../../assets/Profile1.jpg';
import Profile2 from '../../assets/Profile2.jpg';
import Family1 from '../../assets/Family.jpg';
import Family2 from '../../assets/Family2.jpg';
export const myImages = [Profile1, Profile2, Profile4];
export const familyImages = [Family1, Family2];

export const getImages = (isMyImages) => {
 return isMyImages ? myImages : familyImages;
}