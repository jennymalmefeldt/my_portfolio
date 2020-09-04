import React from "react";

const CvCard = ({ experience }) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={experience.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{experience.name}</h3>

          <div class="description">{experience.description}</div>
        </div>
      </div>
    </>
  );
};

export default CvCard;
