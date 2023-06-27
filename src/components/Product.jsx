import '../styles/components/product.scss'

import produtos from '../services/produtos.json'

import choco from '../assets/img/products/whey_choco.png'

export default function product(){
    return(

            <div className='main'>
                <div className='card_image'>
                    <img className="image_main" src={choco} alt="" />
                    <div className='controller'>
                        <button className='btn_controller'>
                            <img src={choco} alt="" width="50px"/>
                        </button>
                        <button className='btn_controller'>
                            <img src={choco} alt="" width="50px"/>
                        </button>
                        <button className='btn_controller'>
                            <img src={choco} alt="" width="50px"/>
                        </button>
                    </div>
                </div>
                <div className='product-info'>
                    <h1 className='text_main'>{produtos.name.chocolate}</h1>
                    <div className='promotion'>
                    <h2 className='old_price'>R$299,90</h2> 
                    <h2 className='new_price'>R${produtos.preco}</h2> 
                    </div>
                    <div className='buy'>
                        <input className="input_buy" type="number" />  
                        <button className='btn_buy'>Compre Agora</button>  
                    </div>  
                    <p>{produtos.name.chocolate}</p>
                </div>
            </div>
    )
}