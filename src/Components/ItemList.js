// ItemList Component
import React from 'react';
import { res_logo } from "../utility/constants";

export const ItemList = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <div key={item.card.info.id} className="mb-8 p-6 bg-white rounded-md shadow-md flex items-center">
                    <div className="flex-grow mr-4">
                        <div className="flex items-center">
                            <span className="text-xl font-semibold">{item.card.info.name}</span>
                            {item?.card?.info?.ratings?.aggregatedRating != undefined && item?.card?.info?.ratings?.aggregatedRating?.rating != undefined && (
                                <span className={`ml-2 text-yellow-500 ${item?.card?.info?.ratings?.aggregatedRating?.rating >= 4.4 ? 'font-semibold' : ''}`}>
                                    {item?.card?.info?.ratings?.aggregatedRating?.rating >= 4.4 ? '⭐ Best Seller' : ''}
                                </span>
                            )}
                        </div>
                        <span className="text-yellow-500">₹ {(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice) / 100}</span>
                        <div className="description-container h-18 w-60">
                            <p className="text-gray-600">{item.card.info.description || ""}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative">
                            <button className="bg-blue-500 text-white px-2 py-1 rounded absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">Add +</button>
                            <img src={res_logo + item.card.info.imageId} alt={item.card.info.name} className="w-32 h-32 object-cover rounded ml-2" />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};
