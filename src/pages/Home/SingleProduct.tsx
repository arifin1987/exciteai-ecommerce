interface productType {
  product: {
    productName: string;
    image: string;
    price: number;
    productDescription: string;
    onSale: boolean;
    offerProduct: boolean;
  };
}

const SingleProduct = ({ product }: productType) => {
  const { productName, image, price, productDescription } = product;
  return (
    <div className="shadow-xl p-2 rounded-md">
      <img className="h-[200px] w-[400px]" src={image} alt="" />
      <h1 className="text-2xl text-purple-700">{productName}</h1>
      <p className="text-teal-500 font-bold">${price}</p>
      <p className="text-purple-600 hover:text-green-600">
        {productDescription}
      </p>
    </div>
  );
};

export default SingleProduct;
