import { Fragment } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button";

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

// menangkap email dan passwaord dari form login local storage
const email = localStorage.getItem("email");

// handle opsi logout untuk menghapus data email dan password yang tersimpan di local storage kemudian di arahkan ke bagian halaman login
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductPage = () => {
  return (
    <Fragment>
      {/* navbar */}
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
        {email}
        <Button variant="bg-red-800 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
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
    </Fragment>
  );
};

export default ProductPage;

// NOTE
// membuat render list dan map agar kode lebih clean saat di lakukan looping
