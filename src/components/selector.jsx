import { useState } from "react";
import ChangeValue from "./valueOfSelector"
import React from 'react';

const Selector = function () {
    const [value, setValue] = useState("QURYLÝY")
    return(
        <div className="block">
            <select value={value} onChange={(e) => setValue(e.target.value)} className="selector__points">
                <option value={"QURYLÝY"}>QURYLÝY</option>
                <option value={"JERI"}>JERI</option>
                <option value={"KÓTERILISTERI"}>KÓTERILISTERI</option>
                <option value={"ODAQTAR"}>ODAQTAR</option>
            </select>

            <div className="block__content">
                <h1>{value}</h1>

                <ChangeValue example={value}/>
            </div>
        </div>

    );
  };


export default Selector;