import {memo} from "react";

const Categories = memo( ({activeCategory, items, onClickCategory}) => {

    return (
      <div className="categories">
        <ul>
          <li
            onClick={() => onClickCategory(null)}
            className={activeCategory === null ? 'active' : ''}>
            Все
          </li>
          {
            items?.map((name, index) => {return <li
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? 'active' : ''} key={`${name}_${index}`}
              >
                {name}
              </li>
            })
          }
        </ul>
      </div>
    )
  }

)


export default Categories