import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'UX e Design',
        'Inovação e Gestão',
    ]
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Telefone" placeholder="Digite seu e-mail" type="number"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" type="url"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
            
    )
}
export default Formulario