import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';

import { Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>

  );
}

export default App;
