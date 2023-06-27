//import styles
import '../styles/components/header.scss'

//import imagens
import carrinho from '../assets/img/icons/carrinho.png'
import logo from '../assets/img/logo.png'
import lupa from '../assets/img/icons/lupa.png'

//Hooks
import { useState } from 'react'

export default function Header(){

    const [showInput, setShowInput] = useState(false)

    const handleInput = () =>{
        setShowInput(!showInput)
    }


    return(
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <div className='pesquisa'>
                {showInput 
                ?<input className='input-pesquisa mobile' type="text" placeholder='Pesquisar' />
                : <input className='input-pesquisa mobile hidden' type="text" placeholder='Pesquisar' />
                }
                <button className='button btn-pesquisa' onClick={() => handleInput()}>
                    <img className="icons" src={lupa} alt="pesquisa" />
                </button>
                <button className='button btn-carrinho'>
                    <img className='icons carrinho' src={carrinho} alt="carrinho" />
                </button>
                
            </div>
        </div>

    )
}