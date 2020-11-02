import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, BurgersBlock, LoadingBlock} from "../components";
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchBurgers} from "../redux/actions/burgers";
import {addBurderToCart} from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Рыбные'];
const sortItems = [
  {
    name: 'популярности',
    type: 'popular',
    order: 'desc'
  },
  {
    name: 'цене',
    type: 'price',
    order: 'desc'
  },
  {
    name: 'алфавиту',
    type: 'name',
    order: 'asc'
  }]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({burgers}) => burgers.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({burgers}) => burgers.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)
console.log(cartItems)
  useEffect(() => {
    dispatch(fetchBurgers(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onSelectSortType = useCallback((type) => {
    console.log(type)
    dispatch(setSortBy(type))
  }, [dispatch])

  const handleAddBurderToCart = obj => {
    dispatch(addBurderToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все бургеры</h2>
      <div className="content__items">
        {isLoaded ? (items?.map(obj => <BurgersBlock
            onClickAddBurger={handleAddBurderToCart}
            key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
            {...obj} />)
        ) : (
          Array(10).fill(<LoadingBlock/>)
        )
        }
      </div>
    </div>
  )
}

export default Home