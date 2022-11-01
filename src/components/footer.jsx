import React from 'react';
const Footer = function () {
    return(
        <div id="footer">
            <div className="first_column">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/630/630685.png"/>

                <p><a href="https://github.com/erzhigitwx" className="link">GITHUB: erzhigitwx</a></p>
                <p>+7 705 204 xx xx</p>
            </div>


            <div className="second_column">
                <h1><a className="link anchor" href="#navbar">PAGES</a></h1>
                <p><a href="#navbar" className="link">HOME</a></p>
                <p><a className="link" href="info">ABOUT</a></p>
                <p><a className="link" href="#cnt">BLOCK</a></p>
                <p><a className="link" href="#footer">FOOTER</a></p>
            </div>


            <div className="third_column">
                <h1><a className="link">PRIVACY POLICY</a></h1>
                <p><a className="link">rules & aids</a></p>
            </div>
        </div>
    );
  };


export default Footer;