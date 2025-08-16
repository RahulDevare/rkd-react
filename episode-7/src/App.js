import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/body/About';
import ContactUs from './components/body/ContactUs';
import RestaurantMenu from './components/body/restaurant/RestaurantMenu';
import Error from './components/body/Error';


const App = () => {
  return (
    <div className="app"> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },

]);

const rootScriptElement = ReactDOM.createRoot(document.getElementById('swiggy-root'));

rootScriptElement.render(<RouterProvider router={appRouter} />);