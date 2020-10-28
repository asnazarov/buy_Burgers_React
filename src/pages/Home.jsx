import {Categories, SortPopup} from "../components";
import BurgersBlock from "../components/BurgersBlock";


const Home = ({items}) => {
console.log(items)
  return(
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => {
            console.log(name)
          }}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Рыбные']}
        />
        <SortPopup
          items={['популярности', 'цене', 'алфавиту']}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map(obj => <BurgersBlock
          key={obj.id}
          {...obj}
          />)
        }

      </div>
    </div>
  )
}

export  default Home