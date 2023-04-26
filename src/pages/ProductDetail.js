import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkCard from "../components/DrinkCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    (async () => {
      const resp = await fetch(`https://api.sampleapis.com/coffee/hot`);
      const json = await resp.json();
      setProduct(() => json.find((pro) => pro.id == productId));
    })();
  }, [productId]);
  return (
    <main className="container py-20 mx-auto">
      <div className="h-s grid grid-cols-2">
        <div className="w-1/2 mx-auto">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="w-1/2">
          <h5>{product.title}</h5>
          <p>40.000 đ</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
