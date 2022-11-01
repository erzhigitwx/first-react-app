import React from 'react';
const KhansList = function () {
  const list = [
    { name: "1465-1473 жж. – Керей хан. Керей – Болат сұлтанның баласы." },
    { name: "1473-1480 жж. – Жәнібек хан – Барақ ханның баласы." },
    {name : '1480-1511 жж. – Бұрындық хан қазақтарды басқарды. Керей ханның баласы.'},
    {name : '1511-1518 жж. – Қасым хан билігі. Әз Жәнібектің ұлы'},
    {name : '1518-1523 жж. – Қасымның баласы Мамаш хан болды'},
    {name : '1523-1532 жж. – Қасымның немере інісі Тақыр хан болды'},
    {name : '1533-1534 жж. – Бұйдаш хан Тақырдың інісі хан болды'},
    {name : '1534-1535 жж. – Қожа Мақмұт хан болды'},
    {name : '1535-1537 жж. – хан атағы болған сұлтандар: Тоғым хан, Ахмет хан, Хақназар, Наурыз-Ахмет хан.'},
    {name : '1538-1580 жж. – Хақназар Қазақ хандығының ханы болды, Қасымның баласы.'},
    {name : '1580-1582 жж. – Жәнібектің немере інісі 80 жастағы Шығай таққа отырды.'},
    {name : '1582-1598 жж. – Шығай қайтыс болып, орнына баласы Тәуекел отырды.'},
    {name : '1598-1628 жж. – Есім хан билігі. Шығайдың баласы, Тәуекел ханның інісі.'},
    {name : '1613-1627 жж. – Тұрсын хан билігі.'},
    {name : '1628-1652 жж. – Жәңгір хан болды. Есім ханның баласы.'},
    {name : '1680-1715 жж. – Әз-Тәуке хан билігі. Салқам Жәңгірдің баласы.'},
    {name : '1718-1726 жж. – Батырдың билігі.'},
    {name : '1726-1730 жж. – Болат хан билігі. Болат – Тәуке ханның баласы.'},
    {name : '1720-1740 жж. – Ұлы жүзді Жолбарыс хан басқарды.'},
    {name : '1718-1748 жж. – Әбілхайыр Кіші жүзге хан болды.'},
    {name : '1748-1786 жж. – Нұралы Кіші жүзге хан болды.'},
    {name : '1791-1794 жж. – Ералы Кіші жүзге хан болды.'},
    {name : '1795-1797 жж. – Есім Кіші жүзге хан болды.'},
    {name : '1797-1805 жж. – Айшуақ Кіші жүзге хан болды.'},
    {name : '1805-1824 жж. – Шерғазы Кіші жүзге соңғы хан болды.'},
    {name : '1716-1719 жж. – Орта жүз ханы Қайып хан билігі.'},
    {name : '1719-1734 жж. – Орта жүз ханы Сәмеке хан билігі.'},
    {name : '1734-1771 жж. – Орта жүз ханы Әбілмәмбет билігі.'},
    {name : '1771-1781 жж. – Үш жүздің ханы Абылай билігі.'},
    {name : '1781-1819 жж. – Орта жүз соңғы ханы Уәли билігі.'},
    {name : '1815-1817 жж. – Орта жүз соңғы ханы Бөкей билігі.'},
    {name : '1841-1847 жж. – Кенесары қазақтың соңғы ханы. Кенесары – Абылай ханның немересі.'},
  ];
  return (
    <div className="list">
      <h1>Kazakh khans</h1>
      <ul>
        {list.map(({name}) => <li key={name}><strong>{name}</strong></li>)}
      </ul>
    </div>
  );
};

export default KhansList;
