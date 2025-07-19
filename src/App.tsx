
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import Countries from './pages/Countries';
import Country from './pages/Country';
function App() {

  return (
<ThemeProvider>
       <BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='countries' element={<Countries/>}/>
          <Route path='/country/:code' element={<Country/>}/>
        </Route>
</Routes>
</BrowserRouter>
</ThemeProvider>
  )
}

export default App
