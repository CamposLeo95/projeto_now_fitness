// import styles
import '../styles/components/footer.scss'

// import images
import insta from '../assets/img/icons/instagram.png'
import face from '../assets/img/icons/facebook.png'
import youtube from '../assets/img/icons/youtube.png'

export default function Footer(){
    return(
        <footer className='footer'>
                <form className='form'>
                    <h2>Tire sua dúvida</h2>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id='nome'/>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email'/>
                    <label htmlFor="msg">Dúvida: </label>
                    <textarea placeholder='digite sua dúvida...' id="msg"/>
                </form>
                <div className='contato'>
                    <div className='fale_conosco'>
                        <h3>Fale Conosco</h3>
                        <h3>(99) 99999-9999</h3>
                        <p>emailfake@email.com.br</p>
                    </div>
                    <div className='social_media'>
                        <img src={insta} alt="" />
                        <img src={face} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
        </footer>
    )
}