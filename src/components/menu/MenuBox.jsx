import '../../styles/menu.scss'
import { menuData } from './menuData'

export const MenuBox = () => {
   return (
      <div className="menu">
         <img className="menu-logo" src="/image/menu-icons/Logo.svg"/>
         <ul className='menu-list'>
            {menuData.map((item) => {
               return <li className='list-item' key={item.id}> 
                  <img className='list-item-img' src={`${item.src}`} alt={`${item.alt}`}/>
                  <p>{item.alt}</p>
               </li>
            })}
         </ul>
      </div>
   )
}