import classNames from 'classnames';
import {useState} from "react";

const Categories = ({onClickItem, items}) => {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {
          items?.map((name, index) => {
            return <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''} key={`${name}_${index}`}
            >
              {name}
            </li>
          })
        }
        {/*<li className="active">Все</li>*/}
        {/*<li>Мясные</li>*/}
        {/*<li>Вегетарианская</li>*/}
        {/*<li>Гриль</li>*/}
        {/*<li>Острые</li>*/}
        {/*<li>Закрытые</li>*/}
      </ul>
    </div>
  )
}

export default Categories