import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';


import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import './App.css';
import { loadUser } from './actions/authActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('LOADING USER')
    dispatch(loadUser())    
  }, [])
  return (
      <div className="App">
        <AppNavbar title='my nav bar'/>
        <Container className='search-body-block'>
          {/*<ItemModal search={false}/>*/}          
          <ItemModal search={true} collection="books"/>
          <ItemModal search={true} collection="authors"/>
          {/*<ShoppingList/>*/}
          <BookList/>
          <AuthorList/>
        </Container>
      </div>

  );
}

export default App;
