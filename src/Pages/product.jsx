import CardProduct from "../Components/Fragments/CardProduct";
const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {/* https://source.unsplash.com/300x300?shoes */}
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpeg" />
        <CardProduct.Body title="Sepatu Adidas">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe
          porro est quas, commodi repellat optio quia natus iste incidunt
          obcaecati a magni dolor sunt? Velit adipisci repellat eveniet sunt.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/images/shoes-2.jpeg" />
        <CardProduct.Body title="Sepatu Nike">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe
          porro est quas, commodi repellat optio quia natus iste incidunt
          obcaecati a magni dolor sunt? Velit adipisci repellat eveniet sunt.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 11.000.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
