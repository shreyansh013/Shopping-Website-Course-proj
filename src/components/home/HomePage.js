import React, { useEffect } from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";

function HomePage() {
  useEffect(() => {
    document.title = "ShopCrow-Shopping";
  }, []);
  return (
    <section>
      <ItemList items={items} />
    </section>
  );
}

export default HomePage;
