import './ContentDisplay.css';
import CaramelBr from '../assets/CaramelBr.png';
import Peppermint from '../assets/Peppermint.png';
import PepperMintMoc from '../assets/PepperMintMoc.png';
import HotChocolate from '../assets/HotChocolate.png';
import { useAnimate } from 'framer-motion';
import { useState } from 'react';

const products = [
  {
    index: 1,
    name: 'Caramel',
    subName: 'Brulee latte',
    description:
      "The Caramel Brulée Latte is a seasonal beverage offered by Starbucks during the winter holiday season. It's a delightful espresso-based drink that combines shots of espresso with steamed milk and a flavor syrup reminiscent of caramelized sugar, evoking the taste of caramel brulée, a type of burnt or caramelized sugar often used as a dessert topping.",
  },
  {
    index: 2,
    name: 'Signature',
    subName: 'Hot Chocolate',
    description:
      'A signature hot chocolate is a classic and indulgent beverage made with steamed milk and rich, high-quality chocolate. It"s often sweetened with sugar or another sweetener and can be customized with additions like whipped cream, marshmallows, or a dusting of cocoa powder. Some variations might include a touch of vanilla.',
  },
  {
    index: 3,
    name: 'PepperMint',
    subName: 'Mocha',
    description:
      'Peppermint mocha is a popular seasonal coffee beverage typically served during the winter holidays. It combines rich espresso or coffee with steamed milk, chocolate syrup or cocoa powder, and a hint of peppermint flavoring. Topped with whipped cream and sometimes garnished with crushed candy canes or chocolate shavings.',
  },
  {
    index: 4,
    name: 'Peppermint',
    subName: 'Mocha Frappuccino',
    description:
      'The Peppermint Mocha Frappuccino is a beloved Starbucks drink that combines the refreshing essence of peppermint with the rich flavors of chocolate and coffee. This icy treat features a blend of espresso, milk, chocolate syrup, and peppermint flavoring, creating a smooth and creamy texture. ',
  },
];

// eslint-disable-next-line react/prop-types
const ContentDisplay = ({ onProductImageClick }) => {
  const [sliderScope, sliderAnimate] = useAnimate();
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const imgClickHandler = (slidePercentage, currentIndex) => {
    return () => {
      onProductImageClick(currentIndex);
      sliderAnimate(
        sliderScope.current,
        { left: slidePercentage },
        { duration: 1 }
      );
      setSelectedProduct(products[currentIndex]);
    };
  };

  return (
    <div className="content">
      <h1>{selectedProduct.name}</h1>
      <h2>{selectedProduct.subName}</h2>
      <p>{selectedProduct.description}</p>
      <div className="content_drinks">
        <img
          onClick={imgClickHandler('0%', 0)}
          src={CaramelBr}
          alt="carammelbr"
        />
        <img
          onClick={imgClickHandler('25%', 1)}
          src={HotChocolate}
          alt="hot chocolate"
        />
        <img
          onClick={imgClickHandler('50%', 2)}
          src={Peppermint}
          alt="peppermint"
        />
        <img
          onClick={imgClickHandler('75%', 3)}
          src={PepperMintMoc}
          alt="pepper mint moc"
        />
      </div>
      <div className="slider_container">
        <div ref={sliderScope} className="slide_notation"></div>
      </div>
    </div>
  );
};

export default ContentDisplay;
