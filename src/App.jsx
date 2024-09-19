
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Home from './Components/Home'
import AddBook from './Components/AddBook'
import EditBook from './Components/EditBook'

function App() {

  return (
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BookList/>}  />
      <Route path='/add-book' element={<AddBook/>}  />
      <Route path='//edit-book/:id' element={<EditBook/>}  />


    </Routes>
    <Footer/>

    


 
    </>
  )
}

export default App
