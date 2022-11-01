import React from 'react';
import KhansItem from '../components/khansItem';
import KhansList from '../components/KhansList';


function Khans() {
    return(
      <div>
            <h1 className='title'>KHANS</h1>
            <KhansItem />
            <KhansList />
      </div>
    );
  };


export default Khans;