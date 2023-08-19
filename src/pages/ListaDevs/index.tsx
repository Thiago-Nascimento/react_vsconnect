import { useEffect, useState } from "react"
import CardDev from "../../components/CardDev"
import "./style.css"

import api from "../../utils/api";

export default function ListaDevs() {

    const [devs, setDevs] = useState<any[]>([]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);

    useEffect( () => {
        document.title = "Lista de Devs - VSConnect"

        listarDesenvolvedores()
    }, [] )
    
    function buscarPorSkill(event: any){
        event.preventDefault();

        const devsFiltrados = devs.filter((dev: any) => dev.hardSkills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltrados.length === 0){
            alert("Nenhum desenvolvedor(a) com essa skill")
        }else{
            setListaDevsFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            listarDesenvolvedores()
        }
        setSkillDigitada(event.target.value)
    }

    function listarDesenvolvedores() {

        api.get("users").then( (response: any) => {
            console.log(response.data)
            setDevs(response.data)
        } )

    }



    return (
        <main id="lista-devs">
            <div className="container container_lista_devs">
                <div className="lista_devs_conteudo">
                    <h1>Lista de Devs</h1>
                    <hr/>
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" 
                                    placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral} />
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {devs.map((dev: any, index: number) => {
                                    return <li key={index}>
                                          <CardDev 
                                          id={dev.id}
                                          foto={dev.user_img}
                                          nome={dev.nome}
                                          email={dev.email}
                                          techs={dev.hardSkills}
                                           />
                                    </li>
                                }
                                )}
                            </ul>
                        </div>
                </div>
            </div>
        </main>
    )
}