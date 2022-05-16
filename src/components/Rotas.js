
import {Switch,Route} from 'react-router-dom';
import {Matricula} from './Matricula';
import {CadastroEstudante} from './CadastroEstudante'
import {Sidebar} from './Sidebar';
import {HeaderProfile} from './HeaderProfile'
import {ConfirmacaoMatricula} from './ConfirmacaoMatricula'
import {Pagamento} from './Pagamento';
import { CadastroDeUsuario } from './CadastroDeUsuario';
import { CadastroDisciplina } from './CadastroDisciplina';
import { CadastroCurso } from './CadastroCurso';



export function Rotas(){
    return(
       
            <Switch>

                <Route exact path="/CadastroDeUsuario">
                    <CadastroDeUsuario/>
                </Route>

                <Route exact path="/CadastroDisciplina">
                    <CadastroDisciplina/>
                </Route>

                <Route exact path="/CadastroCurso">
                    <CadastroCurso/>
                </Route>


                <Route exact path="/ConfirmacaoMatricula">
                     <ConfirmacaoMatricula/>
               </Route>

               <Route exact path="/Matricula">
                     <Matricula/>
               </Route>
                <Route exact path="/CadastroEstudante">
                    <CadastroEstudante/>
                </Route>

                 <Route exact path="/Pagamento">
                     <Pagamento/>
               </Route>

            </Switch>
        

    )
}

export default Rotas;