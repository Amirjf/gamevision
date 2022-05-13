import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddItemToCartAction } from '../../redux/cart/addItem';

const GameCardItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (game) => {
    dispatch(AddItemToCartAction(game));
  };

  return (
    <Link to={`/games/${game.id}`}>
      <div className="group">
        <div className="image-container relative shadow-md">
          <img
            className="transition z-0 w-full h-72 object-cover rounded-lg border-2 border-[#212123] ease-linear duration-300 group-hover:border-2 group-hover:border-[#86858b]"
            src={game.background_image}
            lazy
          />
          <span className="transition ease-linear duration-300 game-price py-1 px-3 rounded-xl absolute z-10 top-4 left-4 bg-[#171b1c] group-hover:bg-purple text-white font-sans text-xs ">
            59.99 $
          </span>
        </div>
        <div className="game-info flex justify-between p-1 pt-2">
          <div className="info">
            <h3 className="text-white font-semibold">{game.name}</h3>
            <span className="text-shaded">PC</span>
          </div>
          <div className="game-add-to-cart">
            <div
              className="cursor-pointer"
              onClick={() => handleAddToCart(game)}
            >
              <i className="bx bx-plus-circle text-purple text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCardItem;
