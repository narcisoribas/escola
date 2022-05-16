import styles from '../styles/CadastroDisciplina.module.css';
import { validarDisciplina,listaCurso } from './../context/validacao';

import {useState} from'react';

export function CadastroCurso(){
    var [nomeCurso,setNomeCurso]=useState('');
    var listaCurso = new Array();
  
    

        function salvarDados(){
            if(document.getElementById('nomeCurso').value==''){
                alert('preecha o campo');
                
            }else{
                if(listaCurso.indexOf(document.getElementById('nomeCurso').value)==-1){
                    listaCurso.push(document.getElementById('nomeCurso').value)
                    localStorage.setItem('nomeCurso',document.getElementById('nomeCurso').value);
                  
                    console.log(listaCurso)
                     console.log('Esta na posica'+ listaCurso.indexOf(document.getElementById('nomeCurso').value));
                }else{
                    console.log('o elemento ja existe')
                }
            }           
        }

        function EditarCurso(){
            alert(nomeCurso)
        }


    return(
        <div className={styles.CadastroDisciplinaContainer}>
                <h1> Cadastro de cursos </h1>
                <form action="" method="post">
                

                <div>
                    <div className={styles.nomeDisciplinaInput}>
                            <label for="nomeCurso">Nome do curso</label>
                            <input type="text"  
                            name="nomeCurso" id="nomeCurso"
                           value={nomeCurso}
                           onChange={e=>setNomeCurso(e.target.value)}
                            />
                    </div>
                </div>

                

                

                  
                 <div className={styles.buttonGroup}>
                     <button type="button" onClick={salvarDados}>Confrimar</button> 
                     <button type="button">Cancelar</button>
                </div>




            </form>




             <div className={styles.resultadoDaBuscaEstudanteConfirmacao}>


<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Nome do curso</th>
            <th>#</th>
        </tr>
        
    </thead>
    
    <tbody>
        <tr>
            <td>1</td>
            <td id="nomeCursoListagem">{nomeCurso}</td>
            
            <td className={styles.ButtonEdit}>

               <input type="button" value='Editar'
                    onClick={EditarCurso}
               />
                <input type="button" value='Eliminar'/> 
            </td>
     
        </tr>

       

    </tbody>

</table>


</div>
   
    
</div>
    )
}

