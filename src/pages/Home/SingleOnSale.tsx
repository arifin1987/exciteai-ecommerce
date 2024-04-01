interface onsaleType {
  onsale: {
    productName: string;
    image: string;
    price: number;
    productDescription: string;
    onSale: boolean;
    offerProduct: boolean;
  };
}

const SingleOnSale = ({ onsale }: onsaleType) => {
  const { productName, image, price, productDescription } = onsale;
  return (
    <div className="shadow-xl p-2 rounded-md">
      <div>
        <img className="h-[200px] w-[400px]" src={image} alt="" />
      </div>

      <div>
        <h1 className="text-2xl text-purple-700">{productName}</h1>
        <p className="text-teal-500 font-bold">${price}</p>
        <p className="text-purple-600 hover:text-green-600">
          {productDescription}
        </p>
      </div>
    </div>
  );
};

export default SingleOnSale;
