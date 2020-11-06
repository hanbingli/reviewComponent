import React from 'react';
import ReactDOM from 'react-dom';

import './ImgModal.css';

const ImgModal = props => {


    return ReactDOM.createPortal(
      <div className='imgModal__container'>
      {/* <h2>Zoomed pic</h2> */}
      <img className='zoomedReviewPic' src={props.src}/>
      
     </div>,
        document.getElementById('modal-hook')
      );
    }

export default ImgModal;