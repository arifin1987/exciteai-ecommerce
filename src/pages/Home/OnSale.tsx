import { useEffect, useState } from "react";
import SingleOnSale from "./SingleOnSale";
import Container from "@/components/Container";

const OnSale = () => {
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const onsale = data.filter(
          (items: { onSale: boolean }) => items.onSale === true
        );
        setProduct(onsale);
      });
  }, []);
  return (
    <Container className="my-4">
      <p className="text-center text-red-400">--We Innovate--</p>
      <h1 className="text-4xl text-center m-2 text-teal-500 font-semibold">
        On Sale
      </h1>
      <div className="md: grid grid-cols-2 gap-8">
        {product.map((onsale) => (
          <SingleOnSale onsale={onsale}></SingleOnSale>
        ))}
      </div>
    </Container>
  );
};

export default OnSale;
