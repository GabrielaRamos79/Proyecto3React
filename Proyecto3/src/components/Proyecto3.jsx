import './proyecto3.css'
import Imagen1 from '../img/logo.png';



function Proyecto3() {

    return (
        <>
        <div className='navbar'>

        <img src={Imagen1} alt='Imagen 1' className='logo' />

        <h1 className='titleNavbar'>Arrabal School</h1>

        <button className="buttonNavbar">Añadir lista</button>
        <button className="buttonNavbar">Editar lista</button>
        <button className="buttonNavbar">Eliminar lista</button>
        
        </div>
        </>
    )


}

export default Proyecto3;