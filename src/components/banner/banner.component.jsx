import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './banner.styles.scss';

const Banner = ({ image, title, category, description, link, price }) => {
  return (
    <div className="w-full">
      <div
        style={{
          background: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 390,
          backgroundPosition: 380,
        }}
        className="banner__container bg-right relative h-80 border-2 rounded-md border-[#797782]"
      >
        <div className="banner__information -z-20 w-full pt-5 pl-14">
          <span className="text-shaded text-xs">{category}</span>
          <h3 className="text-lightPurple text-2xl font-medium pb-2">
            {price}$
          </h3>
          <h3 className="text-white text-3xl font-medium">{title}</h3>
          <p className="text-shaded text-xs font-medium pt-1 w-1/2">
            {description}
          </p>
          <div
            className={`banner__category z-0 text-8xl uppercase absolute w-full left-0 overflow-hidden`}
          >
            <div className="banner__categorytext relative font-sans text-[#32323479] tracking-wider font-black">
              {category}
            </div>
          </div>
          <div className="flex items-center mt-auto h-44">
            <CustomButton inverted plus>
              <i className="bx bx-right-arrow-alt text-md pt-0.5 z-50"></i>
            </CustomButton>
            <button className="text-white">Go To Catalog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
