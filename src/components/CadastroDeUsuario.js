import styles from '../styles/CadastroDeUsuario.module.css';
import {useState} from "react";

export function CadastroDeUsuario(){

        var [emailUsuario,setEmailUsuario]=useState('');
        var[senhaDeusuario,setSenhaUsuario]=useState('');
        var [nivelAcesso,setNivelAcesso]=useState('');


        function handleSubmit(){

         const data={
                email_usuario:emailUsuario,
                senha_usuario:senhaDeusuario,
                nivel_acesso:nivelAcesso
            }

            console.log(data)
        }

   

       
    return(
        <div className={styles.CadastroDeUsuarioContainer}>
                <form action="" method="">
                <div>
                    <div>
                        <label for="emailUsuario">E-mail</label>

                        <input type="email" 
                        name="emailUsuario" id="emailUsuario"
                        value={emailUsuario}
                        onChange={e=>setEmailUsuario(e.target.value)} />
                    </div>

                    <div>
                        <label for="senhaDeusuario">Senha</label>
                        <input type="password" name="senhaDeusuario"
                         id="senhaDeusuario"
                         value={senhaDeusuario}
                         onChange={e=>setSenhaUsuario(e.target.value)}
                        />
                    </div>                 
                   
                </div>

                <div>
                    <div className={styles.nivelAcesso}>
                            <label for="nivelAcesso">Nivel de acesso</label>
                            <input type="text" 
                            name="nivelAcesso" 
                            id="nivelAcesso"
                            value={nivelAcesso}
                            onChange={e=>setNivelAcesso(e.target.value)}
                            />
                    </div>
                </div>

                

                

                  
                 <div className={styles.buttonGroup}>
                     <button type="button" onClick={handleSubmit}>Confrimar</button> 
                     <button type="button">Cancelar</button>
                </div>




            </form>




             <div className={styles.resultadoDaBuscaEstudanteConfirmacao}>


<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>email</th>
            <th>Senha</th>
            <th>Nível de acesso</th>
            <th>estado</th>
            <th>#</th>
        </tr>
        
    </thead>
    
    <tbody>
        <tr>
            <td>Narciso Ribas</td>
            <td>{emailUsuario}</td>
            <td>{senhaDeusuario}</td>
            <td>{nivelAcesso}</td>
            <td>Activo</td>
            <td className={styles.ButtonEdit}>

               <input type="button" value='Editar'/>
                <input type="button" value='Eliminar'/> 
            </td>
      
        </tr>

        

    </tbody>

</table>


</div>
</div>
    )
}