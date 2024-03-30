import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "shoes",
    price: "Rp. 1.000.000.000",
    image: "/images/shoes.jpeg",
    description:
      "lorem  ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe porro est quas, commodi repellat optio quia natus iste incidunt obcaecati a magni dolor sunt? Velit adipisci repellat eveniet sunt.",
  },
  {
    id: 2,
    name: "shoes",
    price: "Rp. 11.000.000.000",
    image: "/images/shoes-2.jpeg",
    description:
      "lorem  ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe porro est quas, commodi repellat optio quia natus iste incidunt obcaecati",
  },
];
const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {/* https://source.unsplash.com/300x300?shoes */}
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
      ;
    </div>
  );
};

export default ProductPage;

// NOTE
// membuat render list dan map agar kode lebih clean saat di lakukan looping
