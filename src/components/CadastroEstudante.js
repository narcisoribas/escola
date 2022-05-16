import styles from '../styles/Matricula.module.css'
export function CadastroEstudante(){
    return(
        <div className={styles.matriculaContainer}>
            <h1>Cadastro de estudante</h1>
            <form action="" method="post">
                <div>
                    <div>
                        <label for="nome">Nome</label>
                        <input type="text" 
                        name="nomeEstudante" id="nome" />
                    </div>

                    <div>
                        <label for="sobrenomeEstudante">Sobrenome</label>
                        <input type="text"  
                        name="sobrenomeEstudante" id="sobrenomeEstudante"/>
                    </div>
                </div>

                <div>
                    <div>
                        <label for="dataNascimento">Data de nascimento</label>
                        <input type="date" 
                        name="dataNascimento" id="dataNascimento" />
                    </div>

                    <div>
                        <label for="genero">Genero</label>
                        
                        <select name="genero" id="genero">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                </div>


                <div>
                    <div>
                        <label for="nacionalidade">Nacionalidade</label>
                        <input type="text" 
                        name="nacionalidade" id="nacionalidade" />
                    </div>

                    <div>
                        <label for="paisDeOrigem">País de origem</label>
                        <input type="text"  
                        name="paisDeOrigem" id="paisDeOrigem"/>
                    </div>
                </div>

                <div>
                    <div>
                        <label for="provincia">Província</label>
                        <input type="text" 
                        name="provincia" id="provincia" />
                    </div>

                    <div>
                        <label for="municipio">Município</label>
                        <input type="text"  
                        name="municipio" id="municipio"/>
                    </div>
                </div>

                <div>
                    <div>
                        <label for="bairro">Bairro</label>
                        <input type="text" 
                        name="bairro" id="bairro" />
                    </div>

                    <div>
                        <label for="numeroDaCasa">Número da casa</label>
                        <input type="text"  
                        name="numeroDaCasa" id="numeroDaCasa"/>
                    </div>
                </div>

                <div>
            
                 <label for="fotoEstudante" 
                    className={styles.labelFotoEstudante}>Carregar foto</label>

                 <input type="file" name="fotoEstudante" id="fotoEstudante" />
                    

                    
                </div>      


                    <h1>Dados academicos</h1>


                <div>
                    <div>
                        <label for="classe">Classe</label>
                        <select name="classe" id="classe">
                            <option value="iniciacao">Inicilção</option>
                            <option value="Primeira">1ª classe</option>
                            <option value="segunda">2ª classe</option>
                        </select>
                    </div>

                    <div>
                        <label for="curso">Curso</label>
                        
                        <select name="curso" id="curso">
                            <option value="cej">Ciências económicas e jurídicas</option>
                            <option value="cfb">Ciências físicas e biológicas</option>
                        </select>
                    </div>
                </div>


                <div>
                    <div>
                        <label for="periodo">Período</label>
                        <select name="periodo" id="periodo">
                            <option value="manha">Manhã</option>
                            <option value="tarde">Tarde</option>
                            <option value="noite">Noite</option>
                        </select>
                    </div>

                    <div>
                        <label for="turma">Turma</label>
                        
                        <select name="turma" id="turma">
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                        </select>
                    </div>
                </div>


                 
                 <div className={styles.buttonGroup}>
                     <button type="button">Confrimar</button> 
                     <button type="button">Cancelar</button>
                </div>




            </form>
        </div>
    )
}