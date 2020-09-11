import React from 'react';

import LeftBgImage from '../../assets/home/images/left_bg.png';
import RightBgImage from '../../assets/home/images/right_bg.png';

export default function CloudContactUs(props) {
    return (
      <div className={'cloud_contact_us'}>
          <img src={LeftBgImage} className={'left_bg_image'} alt=""/>
          <img src={RightBgImage} className={'right_bg_image'} alt=""/>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12'}>
                    <div className={'text-center'}>
                        <h2 style={{color: props.theme.mainColor}}>Parlez à un expert cloud.</h2>
                        <button className={'btn btn-custom'} style={{backgroundColor: props.theme.mainColor}}>
                            Contactez-nous
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}