import React from 'react';
import flags from "../picture/flags.png"

function Pre_content() {
    return(
        <div id='preContent'>
            <div className='intro'>
                <h1 className='intro__title'>
                    Kazakh Khanate
                </h1>

                <p className='intro__text'>
                <strong>Qazaq handyǵy</strong> — 1465 jyly Altyn Ordanyń jáne 1468 jyly Ózbek handyǵynyń ydyraý kezinde qalyptasqan qazirgi Qazaqstan men oǵan irgeles memleketter aýmaǵyndaǵy qazaq memleketi. Onyń aýmaǵynyń kóbisi Orta Azıada bolyp, bir bóligi Shyǵys Eýropada ornalasqan. XV ǵasyrda qazaqtar Ózbek handyǵyndaǵy jemqorlyq, saıası turaqsyzdyq pen álsiz úkimetten sharshap, qazaqtardy Jetisýda jınaǵan Kereı men Jánibek han 1465 jylda Qazaq handyǵyn qurǵan. Tarıh boıy Qazaq handyǵy óz aýmaqtaryn úlkeıtip, qazirgi Qazaqstannyń terıtorıalarynyń kóbisine ıe bolǵan.
                </p>
            </div>

            <div>
                <img src={flags} className="intro__img"/>
            </div>
        </div>
    );
  };


export default Pre_content;