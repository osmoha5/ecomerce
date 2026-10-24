import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Products from './pages/Products.jsx'
import Contacts from './pages/Contacts.jsx'
import Cart from './pages/Cart.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PersistGate} from 'redux-persist/integration/react'
import store from './redux/store/store.js'
import { persistStore } from 'redux-persist'
const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children:[
      {
        path: "/", element: <Home/>
      },
      {
        path: "/AboutUs", element: <AboutUs/>
      },
      {
        path: "/Products", element: <Products/>
      },
      {
        path: "/Contacts", element: <Contacts/>
      },
      {
        path: "/Cart", element: <Cart/>
      },
    ]
  }
])
const persist = persistStore(store)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate persistor = {persist}>
   <Provider store={store} >

   <RouterProvider router={router}/>
    </Provider>
    </PersistGate>
  </StrictMode>,
)
