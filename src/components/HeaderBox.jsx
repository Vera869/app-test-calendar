import '../styles/header.scss'

export const HeaderBox = () => {
   return (<div className='header-box'>
      <div className="header">
         <h1 className="header-head">Добро пожаловать, <span className="header-span"> Михаил!</span>
         </h1>
         <div className="header-img">
            <img className="img-chat" src='/image/header-icons/chat icon.svg' alt='chat'/>
            <div className="img-user">
               <img className="img-avtar" src='/image/header-icons/avatar.svg' alt='avatar'/>
               <img className="img-arrow" src='/image/header-icons/Arrow.svg' alt='other'/>
            </div>
           
         </div>
         
      </div>
      <div className='header-shadow'></div>
       </div>
   )
}