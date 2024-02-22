import './WorkShopStation.css';

import { ReactComponent as MapSouthAmerica } from '../../assets/svgs/mapSouthAmerica.svg';

const WorkShopStation = () => {
  return (
    <div className='global-container'>
      <div className='map-container'>
        <MapSouthAmerica />
      </div>
    </div>
  );
}

export default WorkShopStation;