//import styles
import '../styles/components/header.scss'

//import imagens
import carrinho from '../assets/img/icons/carrinho.png'
import logo from '../assets/img/logo.png'
import lupa from '../assets/img/icons/lupa.png'

//Hooks
import { useEffect, useState } from 'react'

export default function Header(){

    const [compras, setCompras] = useState(0)
    const [windowWidth] = useState(window.innerWidth)
    const [showSearch, setShowSearch] = useState(true)

    const handleSearch = () =>{
        setShowSearch(!showSearch)
    }

    useEffect(()=>{
        if(windowWidth < 768){
            setShowSearch(false)
        }
    },[])

    useEffect(()=>{
        const itens = localStorage.getItem("compra")
        if(itens === null ){
            setCompras(0)
        }else{
            const qtdCompras = JSON.parse(itens)
            setCompras(qtdCompras)
        }

    },[compras])

    return(
        <header className='header'>
            <img className='logo' src={logo} alt="logo" />
            <div className='search'>
            {showSearch &&
                <input 
                className='input-search mobile' 
                type="text" 
                placeholder="pesquisar..."/>
            }  
                <button className='button btn-search'>
                    <img 
                        className="icons" 
                        src={lupa} 
                        alt="pesquisa" 
                        onClick={handleSearch}
                    />
                </button>
                <button className='button btn-car'>
                    <img className='icons' src={carrinho} alt="carrinho" />
                    {compras !== 0 && <div className='itens_car'>{compras}</div>}
                </button>         
            </div>
        </header>

    )
}