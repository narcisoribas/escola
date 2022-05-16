import styles from '../styles/Sidebar.module.css';
import {Link} from 'react-router-dom';
export function Sidebar(){

  
    return(
        
            <div className={styles.sidebarContainer}>            
                    <ul>
                        <li>Cadastros
                            
                         <ul>
                             <li>
                               <Link to="/CadastroEstudante">
                                    <a>Estudante</a>    
                                 </Link>                        
                             </li>
                            <li>   
                                <Link to="/CadastroDeUsuario">                         
                                    <a>Usuarios</a>  
                                </Link>                             
                            </li>
                            <li>
                                <Link to="/CadastroDisciplina">
                                    <a>Disciplinas</a>
                                </Link>
                            </li>

                            <li>
                                <Link to="/CadastroCurso">
                                    <a>Cursos</a>
                                </Link>
                            
                            </li>
                                
                            </ul>
                        </li>

                        <li>Operacões
                            <ul>
                                <li>
                                    <Link to="/Matricula">
                                         <a href="">Matriculas</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/ConfirmacaoMatricula">
                                    <a href="">Confirmacão</a>
                                    </Link>
                                    </li>


                                <li>
                                    <Link to="/Pagamento">
                                    <a href="">Pagamento</a>
                                    </Link>
                                </li>  




                            </ul>
                        </li>


                        <li>
                            Relatorios

                            <ul>
                                <li>Financeiro</li>
                                <li>Financeiro</li>
                                <li>Financeiro</li>
                            </ul>
                        </li>
                        
                    </ul>
            </div>

    )
}