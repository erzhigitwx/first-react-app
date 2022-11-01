import kerei from "../picture/kerei.jpeg";
import janibek from "../picture/janibek.jpg";
import qasym from "../picture/qasym.jpg";
import Buryndyq from "../picture/Buryndyq.webp";
import React from 'react';
const KhansItem = function () {
  const summary = [
    {
      khan: "Kerey",
      photo: kerei,
      biography: 'KEREI HAN, Kıraı, Gıreı (týǵan jyly belgisiz — shamamen 1473/74), Qazaq handyǵynyń negizin qalaýshylardyń biri jáne alǵashqy hany. Ýrýs hannyń shóbereleri. "Tavarıh-ı gýzıda-ı nýsrat-name" boıynsha Kereı han. Toqtaqıanyń uly Bolattyń jalǵyz uly. Aq Ordada Baraq han qaıtys bolǵannan keıin álsireý kezeńi bastaldy, ony jas Ábilqaıyr hany dep jarıalaǵan Shıbanıdter paıdalandy. Onyń bıliginiń kúsheıýi Kereı han men Jánibek hannyń Ordaıdterdiń (Orda hannyń urpaqtary, Ýrýs hannyń shóbereleri) Syrdarıa ózeni men Qarataý qalasyna qonys aýdarýyna ákeldi. 50-60 jyldary 15 ǵasyrda Kereı han men Jánibek han óz qol astyndaǵylarmen birge Moǵolstannyń Shaǵataıdtar basqarǵan Batys Jetisý aýmaǵyna qonys aýdarady. Bul kóshi — qon jańa memleket — Qazaq handyǵynyń paıda bolýyndaǵy jáne qalyptasqan etnos-qazaqtardyń ataýyn anyqtaýdaǵy mańyzdy býyndardyń birine aınaldy.',
    },
    {
      khan: "Jánibek",
      photo: janibek,
      biography: 'Áz-Jánibek han (Jánibek Ábýsaǵıt) (týǵan jyly men ólgen jyly belgisiz) — Qazaq handyǵy men qazaq handary áýletiniń negizin qalaýshy, Baraq hannyń uly, Orys hannyń shóberesi. 15 ǵ. ómir súrgen. 1450 jj. deıingi ómiri men qyzmeti týraly naqty derekter joq. XV ǵasyrda ómir súrgen. XV ǵasyrdyń 50-shi jyldaryna deıingi ómiri men qyzmeti týraly naqty derekter joq. 1457-1458 jyly týysy Kereı hanmen birge Qazaq handyǵynyń negizin qalaǵan. Kereı hannan soń 1465-1466 jyldan 1470 jyldardyń basyna deıin qazaq handyǵynyń ekinshi hany bolǵan. Tarıhı jazba derekterde Jánibek hannyń esimi "Handar shejiresinde" jáne Qazaq handyǵynyń qurylýyna baılanysty kezdesedi. 1428 jyly ákesi Baraq han (Aq Orda hany) ólgen soń, Deshti Qypshaqtaǵy saıası bılik Ábilhaıyr hanǵa kóshedi. 1457 jyly jazdyń sońynda Ábilhaıyr han Syǵanaq túbinde qalmaqtardan jeńilgennen keıin, Kereı men Jánibek sultandar qaramaǵyndaǵy ulysymen Moǵolstanǵa kóshedi. Kóshýge tarıhı ańyz boıynsha, Qobylandy batyr men Aqjol bı arasyndaǵy daý-janjal sebep bolǵan. Jazba derekter málimeti boıynsha Kereı men Jánibektiń qalmaqtarǵa qarsy ásker jıý týraly Ábilhaıyr hannyń jarlyǵyna qulaq aspaýy jáne 1457 jylǵy jeńilisten keıingi qalyptasqan jaǵdaı, ıaǵnı eki sultanǵa Ábilhaıyr han tarapynan qaýip-qaterdiń tónýi - Orys han urpaqtaryn óz ulystarymen birge kóshpeli ózbekter memleketinen ketýge májbúr etedi. 1457 jyly kúz aıynyń sońynda kóship kelgen eki sultan ulystary Shýdyń tómengi boıynda qystap shyǵyp, 1458 jyldyń erte kókteminde Kereıdi aq kıizge kóterip han saılaıdy.',
    },
    {
      khan: "qasym",
      photo: qasym,
      biography: 'Qasym han (1445-1521) — qazaqtyń uly handarynyń biri, Qazaq handyǵynyń negizin qalaýshylardyń biri — Áz-Jánibek hannyń ortanshy balasy jáne Shaıbanıdter memleketiniń hany Muhammed Shaıbanı hannyń bólesi. Sheshesi Jaǵan-begim Hanym Shaıbanı áýletiniń ataqty hany Muhammed Shaıbanıdiń inisi Mahmud sultannyń sheshesiniń týǵan sińilisi. Qasym han (1445 – 1521 jyldary) – Qazaq handyǵynyń hany (1511 – 1521), Áz-Jánibek hannyń uly. Tarıhta Qasym hannyń esimi Qazaq handyǵynyń kúsheıýi jáne nyǵaıýymen tikeleı baılanysty. Jazba derekterde Qasym han 15 ǵasyrdyń 70 – 90 jyldary Qazaq handyǵynyń Syr boıyndaǵy qalalar men óńirler úshin júrgizgen kúresterge belsene qatysady, basshylyq etedi. Bul kezde qazaq hany Kereıdiń uly Buryndyq, qazaq áskeriniń qolbasshysy Qasym han boldy. Osy kezeńdegi oqıǵalardy baıandaıtyn derekter Qasym handy "belgili sultan jáne ataqty bahadúr" dep ataıdy. Shırek ǵasyrǵa sozylǵan Syr boıy úshin kúreste Qasym han jáne Áz-Jánibek hannyń basqa da uldary Syǵanaq, Saýran, Otyrar, Saıram túbinde birneshe ret Shaıbanı han áskerin tas-talqan etip jeńedi. 15 ǵasyrdyń 90-jyldary jasalǵan beıbit kelisim boıynsha Qazaq handyǵyna Syǵanaq pen Saýran ótedi. "Qasqa jol" — dep atalatyn zań, qazaq arasynda burynnan qalyptasqan ádet-ǵuryp erejeleri negizinde Qasym han tusynda jasalǵan. Onyń jasalýyna sebep bolǵan jaǵdaılar mynalar: Qasym hannyń bıligi tusynda Kereı, Jánibek jáne Buryndyq handar kezindegi qazaq qoǵamy anaǵurlym joǵary satyǵa kóterildi;',
    },
    {
      khan: "Buryndyq",
      photo: Buryndyq,
      biography: "Buryndyq han — 1480-1511 jj. aralyǵynda Qazaq handyǵynda bılik qurǵan Kereı hannyń úsh ulynyń biri. Buryndyqtyń qashan dúnıege kelgeni belgisiz. Orta ǵasyrlardaǵy jazba derekterdiń úzik-úzik málimetterine súıene otyryp, onyń ómiriniń 40-50 jyldyq kezeńin qalpyna keltirýge bolady. Buryndyq hannyń ómiri Qazaq handyǵy tarıhynyń alǵashqy dáýirimen tyǵyz baılanysty. Sondyqtan da handyq tarıhyndaǵy iri oqıǵalar men damýlar onyń ómirindegi belester bolyp esepteledi. Jazba derekterdiń óte tapshylyǵyna qaramastan, Buryndyq han ómirinen birneshe belesti aıqyn kórýge bolady. Buryndyqtyń handyqtyń qurylý úrdisine qatynasýy 1469-73 jyldardaǵy oqıǵalardan kórinedi. Osy jyldary Qazaq handyǵyna qatysty mynandaı oqıǵalar bolǵan edi: 1469 jyly Ábilqaıyr han Moǵolstannyń batys jaǵyndaǵy Qazaq handyǵyna qarsy joryq uıymdastyryp, sol jyldyń qarasha-jeltoqsan aılarynda orta jolda qaıtys boldy.",
    },
  ];

  return (
      <>
        {summary.map(({photo, biography}) => <div className="profile">
          <div>
            <img className="photo_Khans" src={photo}/>
          </div>

          <p className="text_Khans">{biography}</p>
        </div>)}
      </>
  );
};

export default KhansItem;
