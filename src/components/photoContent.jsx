import batyrs from "../picture/batyrs.JPEG"
import React from 'react';
const PhotoContent = function () {
    return(
        <div id="cnt">
            <img src={batyrs} className="photo"></img>

            <div className="photo_elements">
                <div className="photo_texts">
                    <h2>Qazaq batyrlary</h2>
                    <p>-"Ǵasyrlar boıy qazaqtardyń ult retinde Mádenı shoǵyrlanýyna yqpal etken eń negizgi uıymdastyrýshy faktor onyń tańǵajaıyp tili boldy."</p>
                </div>

                <button className="alga">ALGA</button>
            </div>
        </div>
    );
  };


export default PhotoContent;