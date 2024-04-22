import React from 'react';
import './Section2.scss';

const Section2 = () => {
  return (
    <div className="section2">
      <h1>Our Features</h1>
      <div className="section2__cards">
        <div className="section2__cards__card">
          <img src="https://www.pikpng.com/pngl/b/82-824227_airplane-clipart-logo-airline-liveries-and-logos-png.png" alt="" />
          <h3>Best Guide</h3>
          <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
          <img className='ok' src="https://www.pngall.com/wp-content/uploads/13/Button-PNG-HD-Image.png" alt="" />
        </div>
        <div className="section2__cards__card cut">
          <img src="https://cdn.icon-icons.com/icons2/1368/PNG/512/-percentage-sticker_89740.png" alt="" />
          <h3>More Discount</h3>
          <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
          <img className='ok' src="https://www.pngall.com/wp-content/uploads/13/Button-PNG-HD-Image.png" alt="" />
        </div>
        <div className="section2__cards__card">
          <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Lock-512.png" alt="" />
          <h3>Private</h3>
          <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
          <img className='ok' src="https://www.pngall.com/wp-content/uploads/13/Button-PNG-HD-Image.png" alt="" />
        </div>
        <div className="section2__cards__card cut">
          <img src="https://cdn-icons-png.flaticon.com/512/5537/5537629.png" alt="" />
          <h3>Online Support</h3>
          <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
          <img className='ok' src="https://www.pngall.com/wp-content/uploads/13/Button-PNG-HD-Image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
