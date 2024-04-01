import { useEffect } from "react";
import { useState } from "react";
import SingleOffer from "./SingleOffer";
import Container from "@/components/Container";

const Offer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const offer = data.filter(
          (item: { offerProduct: boolean }) => item.offerProduct === true
        );
        setProduct(offer);
      });
  }, []);
  return (
    <Container className="my-4">
      <p className="text-center text-red-400">--We Care--</p>
      <h1 className="text-4xl text-center m-2 text-teal-500 font-semibold">
        Product Offer
      </h1>
      <div className="md:flex justify-between gap-12">
        {product.map((item) => (
          <SingleOffer item={item}></SingleOffer>
        ))}
      </div>
    </Container>
  );
};

export default Offer;
