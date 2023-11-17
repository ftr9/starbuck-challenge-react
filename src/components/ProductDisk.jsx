import './ProductDisk.css';
import CaramelBr from '../assets/CaramelBr.png';
import PepperMint from '../assets/Peppermint.png';
import PepperMintMoc from '../assets/PepperMintMoc.png';
import HotChocolate from '../assets/HotChocolate.png';

// eslint-disable-next-line react/prop-types
const ProductDisk = ({ ProductDiskScope }) => {
  return (
    <div ref={ProductDiskScope} className="main">
      <img src={CaramelBr} alt="caramelbr" />
      <img src={PepperMint} alt="peppermint" />

      <img src={PepperMintMoc} alt="pepper mint moc" />
      <img src={HotChocolate} alt="hot chocolate" />
    </div>
  );
};

export default ProductDisk;
