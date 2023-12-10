import React, { useState } from 'react';

const MoreButton = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(3); // Nombre initial d'éléments à afficher

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Augmente le nombre d'éléments à afficher
  };

  return (
    <div>
      <ul>
        {data.slice(0, visibleItems).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {visibleItems < data.length && (
        <button onClick={handleShowMore}>More</button>
      )}
    </div>
  );
};

export default MoreButton;
