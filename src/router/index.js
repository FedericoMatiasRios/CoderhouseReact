import { Routes, Route} from 'react-router-dom';
import { Home, Detail, Cart, Category } from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/item/:id' element={<Detail />} />
            <Route exact path='/category/:id' element={<Category />} />
            <Route exact path='/cart' element={<Cart />} />
        </Routes>
    )
} 

export default Router;