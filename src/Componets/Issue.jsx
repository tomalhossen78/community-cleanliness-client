import React from "react";

const Issue = ({ issue }) => {
  const { title, image, cat, location, amount } = issue;
  return (
    <div className="card bg-base-100 w-78 shadow-sm relative">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-500 font-semibold">
          {title}
          <div className="badge badge-secondary absolute top-4 right-3">
            {cat}
          </div>
        </h2>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Location : {location}</div>
          <div className="badge badge-primary absolute top-4 left-3">
            ${amount}
          </div>
        </div>
        <button className="btn-secondary btn">See Details</button>
      </div>
    </div>
  );
};

export default Issue;
