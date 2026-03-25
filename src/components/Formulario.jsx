import { useState } from "react";
import { z } from "zod";

function Formulario() {
    
    const[nome, setNome] = useState("");
    const[classe, setClasse] = useState("");


    function handleSubmit(e) {
        e.prevenDefault();
        console.log(nome)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} method="post">
                <legend>Formulário</legend>

                <label htmlFor="">Nome</label>
                <input onChange={(e)=> setNome(e.target.value)} value={nome} type="text" placeholder="Digite o nome do seu personagem"/>

                <label htmlFor="">Classe</label>
                <input onChange={(e)=> setClasse(e.target.value)} value={classe} type="text" placeholder="Digite a classe do seu personagem"/>
            </form>
        </div>
    )
}

export default Formulario;