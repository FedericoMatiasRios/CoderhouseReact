import { Routes, Route} from 'react-router-dom';
import { Home, ItemDetailContainer, ItemList, Category } from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/category/:id' element={<Category />} />
            <Route exact path='/cart' element={<ItemList />} />
        </Routes>
    )
} 

export default Router;