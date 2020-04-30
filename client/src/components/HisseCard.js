import React from 'react';

const HisseCard = (props) => {
  const {title, img} = props;
  return (
      <div className="card-mak">
        <img src={img} className="card-img" alt=""/>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-content">
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias assumenda at, ea error harum illo iusto, laborum molestias neque nostrum optio, perferendis praesentium quos reiciendis rerum saepe sit tempora ut voluptates. Consequatur corporis cum dicta error eum labore maxime nemo nihil, possimus quas recusandae sed sequi sit sunt voluptatibus.
          </p>
        </div>
        <div className="card-footer">
          <a href="#">Read More</a>
        </div>
      </div>
  );
};

export default HisseCard;
