import Button from "../Elements/Button";
import PropTypes from "prop-types";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex-col my-3">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img className="rounded-t-lg p-8" src={image} alt="product image" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-40">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;

  // variable untuk menampung props handle add to cart
  const handleClick = () => {
    handleAddToCart(id);
  };
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <span className="text-white font-bold text-xl">
        {/* membuat format rupiah */}
        Rp.
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button variant="bg-blue-600" className="max-w-xs" onClick={handleClick}>
        Add to Cart
      </Button>
    </div>
  );
};
CardProduct.propTypes = {
  children: PropTypes.node.isRequired,
};
Footer.propTypes = {
  price: PropTypes.number.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

// Custom components to be used inside CardProduct
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

// NOTE
// membuat component baru terpisah yang kemudian bisa di panggil pada bagian product berdasarkan part-partnya
