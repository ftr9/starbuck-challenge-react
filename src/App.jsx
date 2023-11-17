import { useAnimate } from 'framer-motion';
import './App.css';
import ProductDisk from './components/ProductDisk';
import Header from './components/Header';
import ContentDisplay from './components/ContentDisplay';

const rotationVALUEs = [-30, -120, -210, -300];
const rotationColors = ['#043927', '#4B2A21', '#EF133F', '#D10066'];

function App() {
  const [productDiskscope, productDiskAnimate] = useAnimate();
  const [backgroundScope, animateBackground] = useAnimate();

  const productImageClickHandler = currentIndex => {
    productDiskAnimate(
      productDiskscope.current,
      { rotate: rotationVALUEs[currentIndex] },
      { duration: 1 }
    );
    animateBackground(
      backgroundScope.current,
      { backgroundColor: rotationColors[currentIndex] },
      { duration: 0.5 }
    );
  };

  return (
    <div ref={backgroundScope} className="container">
      <Header />
      <ContentDisplay onProductImageClick={productImageClickHandler} />
      <ProductDisk ProductDiskScope={productDiskscope} />
    </div>
  );
}

export default App;
