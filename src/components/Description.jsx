//import styles
import '../styles/components/description.scss'

//import fake dataBase
import produtos from '../services/produtos.json'

export default function Description(){
    return(
        <div className="main_description">
            <span className='title'>WHEY PROTEIN EVO 900g</span>
            <div className="description">
                {produtos.descricao_evo}
            </div>
            <span className='title'>SAIBA MAIS SOBRE WHEY</span>
            <span className='sub_title'>Whey Concentrado:</span>
            <div className='description'>
                {produtos.concentrado}
            </div>
            <span className='sub_title'>Whey Isolado:</span>
            <div className='description'>
                {produtos.isolado}
            </div>
            <span className='title'>Tabela Nutricional</span>
            <div className='description'>
                Porção Diária de 30 g ou 1 dosador diluído em 200ml de água
            </div>
            <div className='table_nutrition'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <span>Quantidade por porção</span>
                        </th>
                        <th>
                            <span>Água</span>
                        </th>
                        <th>
                            <span>%VD(*)</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.tabela_nutricional.map((produto, index) =>(
                        <tr key={index}>
                            <td>
                                <span>{produto.name}</span>
                            </td>
                            <td>
                                <span>{produto.agua}</span>
                            </td>
                            <td>
                                <span>{produto.vd}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}