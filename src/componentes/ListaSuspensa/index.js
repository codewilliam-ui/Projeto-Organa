import './ListaSuspensa.css'
const ListaSuspensa = (props)=>{
    console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })} {/* Fazer uma recaptulação da aula 03.Lista dos times para entender melhor o <select> */}
            </select>
        </div>
    )
}

export default ListaSuspensa