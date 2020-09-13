import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherSectionParams }) => (
          <CollectionPreview key={id} {...otherSectionParams} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
