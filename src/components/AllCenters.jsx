import taraz from "../picture/taraz.jpeg";
import shym from "../picture/shym.jpeg";
import turkistan from "../picture/turkistan.jpeg";
import oral from "../picture/oral.jpg";
import tashkent from "../picture/tashkent.jpg";
import bishkek from "../picture/bishkek.jpg";
import React from 'react';
const AllCenters = function () {
  const centers = [
    { photo: taraz, name: "Taraz" },
    { photo: shym, name: "Shymkent" },
    { photo: turkistan, name: "Túrkistan" },
    { photo: oral, name: "Oral" },
    { photo: tashkent, name: "Tashkent" },
    { photo: bishkek, name: "bishkek" },
  ];
  return (
    <>
        {centers.map(({photo, name}) => 
            <div>
                <h2 className="name_center">{name}</h2>

                <img className="center_photo" src={photo} />
            </div>
        )}
    </>
  );
};

export default AllCenters;
