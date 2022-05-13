import React from 'react';
import { useDispatch } from 'react-redux';
import { AddItemToCartAction } from '../../redux/cart/addItem';
import CustomButton from '../custom-button/custom-button.component';
import Table from '../table/table.component';

const GamePageBody = ({ tbodyData, gameData }) => {
  const dispatch = useDispatch();
  const { description_raw } = gameData;
  const handleAddToCart = (gameData) => {
    dispatch(AddItemToCartAction(gameData));
  };
  return (
    <div className="flex justify-end">
      <div className="p-4 w-1/3 items-center mt-10">
        <p className="text-white font-semibold">Description</p>
        <p className="text-shaded pt-3">
          {description_raw && description_raw.length > 350
            ? description_raw.slice(0, 340) + ' ...'
            : description_raw}
        </p>
        <div className="my-5">
          <h1 className="text-5xl text-purple font-semibold">59.99$</h1>
        </div>
        <CustomButton onClick={() => handleAddToCart(gameData)}>
          ORDER NOW
          <i className="bx bx-basket pl-2"></i>
        </CustomButton>
      </div>
      <div className="flex justify-around items-center w-1/4">
        <div className="w-64">
          <Table bg="#373739" tbodyData={tbodyData} />
        </div>
      </div>
    </div>
  );
};

export default GamePageBody;
