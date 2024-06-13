import '../styles/header.scss'

export const HeaderBox = () => {
   return (<>
      <div className="header">
         <h1 className="header-head">Добро пожаловать, <span className="header-span"> Михаил!</span>
         </h1>
         <div className="header-img">
            <img className="img-chat" src='../../public/image/icons/chat icon.svg'/>
            <div className="img-user">
               <img className="img-avtar" src='../../public/image/icons/avatar.svg'/>
               <img className="img-arrow" src='../../public/image/icons/Arrow.svg'/>
            </div>
           
         </div>
        
      </div>
       <div className='header-shadow'></div>
       </>
   )
}