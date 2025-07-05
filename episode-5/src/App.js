import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="app"> 
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const rootScriptElement = ReactDOM.createRoot(document.getElementById('swiggy-root'));

rootScriptElement.render(<App />);