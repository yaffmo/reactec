import React from "react";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return;
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url${imageUrl}` }}>
      <div className="collection-footer">
        <span className="name" />
        <span className="price" />
      </div>
    </div>
  </div>;
};

export default CollectionItem;
