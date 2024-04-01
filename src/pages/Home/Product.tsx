import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import Container from "@/components/Container";

const Product = () => {
  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <Container className="my-4">
      <p className="text-center text-red-400">--Best Quality--</p>
      <h1 className="text-4xl text-center m-2 text-teal-500 font-semibold ">
        Our Products
      </h1>
      <div className="md:grid grid-cols-3 gap-4  ">
        {item.map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
    </Container>
  );
};

export default Product;
