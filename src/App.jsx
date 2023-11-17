import { useAnimate } from 'framer-motion';
import './App.css';
import ProductDisk from './components/ProductDisk';
import Header from './components/Header';
import ContentDisplay from './components/ContentDisplay';

const ROTATION_VALUES = [-30, -120, -210, -300];
const ROTATION_COLORS = ['#043927', '#4B2A21', '#EF133F', '#D10066'];

function App() {
  const [productDiskscope, productDiskAnimate] = useAnimate();
  const [backgroundScope, animateBackground] = useAnimate();

  const productImageClickHandler = currentIndex => {
    productDiskAnimate(
      productDiskscope.current,
      { rotate: ROTATION_VALUES[currentIndex] },
      { duration: 1 }
    );
    animateBackground(
      backgroundScope.current,
      { backgroundColor: ROTATION_COLORS[currentIndex] },
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
