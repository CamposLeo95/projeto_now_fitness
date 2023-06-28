//import styles
import '../styles/components/product.scss'

//import fake database
import produtos from '../services/produtos.json'

//import images
import choco from '../assets/img/products/whey_choco.png'
import suisse from '../assets/img/products/whey_suisse.png'
import cream from '../assets/img/products/whey_cream.png'
import { useState } from 'react'

export default function product(){

    const [imageProduct, setImageProduct] = useState(choco)
    const [titleProduct, setTitleProduct] = useState(produtos.name.chocolatinho)

    const [quantity, setQuantity] = useState(0)

    const handleProduct = (sabor) =>{
        switch (sabor) {
            case 'chocolatinho':
                setImageProduct(choco)
                setTitleProduct(produtos.name.chocolatinho)
                break;
            case 'suisse':
                setImageProduct(suisse)
                setTitleProduct(produtos.name.morango)
                break;
            case 'cream':
                setImageProduct(cream)
                setTitleProduct(produtos.name.cream)
                break;
        
            default:
                break;
        }
    }

    const handleBuy = () =>{
        const qtd = localStorage.getItem("compra")
        if(qtd !== null){
            const qtdLocalStorage= Number(JSON.parse(qtd))
            const total = Number(qtdLocalStorage) + Number(quantity)
            console.log(typeof(total))
            localStorage.setItem("compra", JSON.stringify(total))
        }else{
            localStorage.setItem("compra", JSON.stringify(quantity))
        }
        
    }

    return(
            <main className='main'>
                <div className='card_image'>
                    <img className="image_main" src={imageProduct} alt="" />
                    <div className='controller'>
                        <button 
                            className='btn_controller'
                            onClick={() => handleProduct('chocolatinho')}
                        >
                            <img src={choco} alt="chocolatinho" width="50px"/>
                        </button>
                        <button 
                            className='btn_controller'
                            onClick={() => handleProduct('suisse')}
                        >
                            <img src={suisse} alt="suisse" width="50px"/>
                        </button>
                        <button 
                            className='btn_controller'
                            onClick={() => handleProduct('cream')}
                        >
                            <img src={cream} alt="cream" width="50px"/>
                        </button>
                    </div>
                </div>
                <div className='product-info'>
                    <h1 className='text_main'>{titleProduct}</h1>
                    <div className='promotion'>
                        <h2 className='old_price'>de: R$299,90</h2> 
                        <h2 className='new_price'>por: R${produtos.preco}</h2> 
                    </div>
                    <div className='buy'>
                        <input 
                            className="input_buy" 
                            type="number"  
                            placeholder='Qtd.'
                            onChange={(e) => setQuantity(e.target.value)}
                            />  
                        <button className='btn_buy' onClick={handleBuy}>Compre Agora</button>  
                    </div>  
                    <p>{produtos.name.chocolate}</p>
                </div>
            </main>
    )
}