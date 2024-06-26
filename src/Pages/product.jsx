import { Fragment, useState, useEffect } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button";
// import Counter from "../Components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    price: 1000000,
    image: "/images/shoes.jpeg",
    description:
      "lorem  ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe porro est quas, commodi repellat optio quia natus iste incidunt obcaecati a magni dolor sunt? Velit adipisci repellat eveniet sunt.",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    price: 3000000,
    image: "/images/shoes-2.jpeg",
    description:
      "lorem  ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe porro est quas, commodi repellat optio quia natus iste incidunt obcaecati",
  },
  {
    id: 3,
    name: "Sepatu Puma",
    price: 2000000,
    image: "/images/shoes-3.jpeg",
    description:
      "lorem  ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe porro est quas, commodi repellat optio quia natus iste incidunt obcaecati a magni dolor sunt? Velit",
  },
];

// menangkap email dan passwaord dari form login local storage
const email = localStorage.getItem("email");

const ProductPage = () => {
  // menggunakan usestate dan untuk tampilkan pada cart
  const [cart, setCart] = useState([]);

  // usestate totalprice
  const [totalPrice, setTotalPrice] = useState(0);

  // useeffect didmount untuk memberikan nilai awal ketika browser pertama kali di refresh
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // useeffect untuk update total price yang berpatokan pada cart ada yang update, sedangkan cart sendiri akan update ketika tombol tambah add to cart di klik menggunakan const handleAddToCart
  useEffect(() => {
    if (cart.length >= 1) {
      const tambah = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(tambah);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // handle add to cart untuk menangani penambahan produk di cart dengan menambahkan qty, kemudian di kirim ke footer saat tombol add to cart di klik
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // handle opsi logout untuk menghapus data email dan password yang tersimpan di local storage kemudian di arahkan ke bagian halaman login
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
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
        <div className="w-4/6 flex flex-wrap">
          {/* https://source.unsplash.com/300x300?shoes */}
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.name}>
                {product.description}
              </CardProduct.Body>
              {/* mengirimkan use state ke bagian footer */}
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
          ;
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* menyajikan data pada tabel cart */}
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <Counter></Counter> */}
    </Fragment>
  );
};

export default ProductPage;

// NOTE
// membuat render list dan map agar kode lebih clean saat di lakukan looping
