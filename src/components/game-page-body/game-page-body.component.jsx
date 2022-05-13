import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Table from '../table/table.component';

const GamePageBody = ({ tbodyData }) => {
  return (
    <div className="flex justify-end">
      <div className="p-4 w-1/3">
        <p className="text-white font-semibold">
          What is the game about Far Cry 6 ?
        </p>
        <p className="text-shaded pt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          deserunt dicta doloremque nulla incidunt enim illum. Expedita placeat
        </p>
        <div className="my-5">
          <h1 className="text-5xl text-darkPurple font-semibold">11.99$</h1>
        </div>
        <CustomButton>
          ORDER NOW
          <i className="bx bx-basket pl-2"></i>
        </CustomButton>
      </div>
      <div className="flex justify-around items-center w-1/4">
        <div className="w-52">
          <Table bg="#373739" tbodyData={tbodyData} />
        </div>
      </div>
    </div>
  );
};

export default GamePageBody;
