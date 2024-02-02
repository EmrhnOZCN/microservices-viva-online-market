import React from 'react';
import Slider from '../Slider/Slider';
import meyve from '../../assets/meyvesebze.jpg';

const Category = () => {
  const handleClick = (index) => {
    // Tıklanabilir resmin işlemlerini buraya ekleyebilirsiniz
    console.log(`Resim ${index} tıklandı.`);
  };

  return (
    <div className="container">
      {/* Kartlar */}
      <div className="row mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <div key={index} className="col-md-2 mb-3">
            <div className="position-relative">
              <img
                className="img-fluid rounded"
                src={meyve}
                alt={`Card ${index}`}
                onClick={() => handleClick(index)}
                style={{ cursor: 'pointer' }}
              />
              <div className="card-overlay">
                <p className="overlay-text">Meyve ve Sebze {index}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
