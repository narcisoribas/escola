import styles from '../styles/CadastroDisciplina.module.css';


export function CadastroDisciplina(){
    return(
        <div className={styles.CadastroDisciplinaContainer}>
                <h1> Cadastro de disciplinas </h1>
                <form action="" method="post">
                

                <div>
                    <div className={styles.nomeDisciplinaInput}>
                            <label for="nomeDisciplina">Nome da disciplina</label>
                            <input type="text"  
                            name="nomeDisciplina" id="nomeDisciplina"/>
                    </div>
                </div>

                

                

                  
                 <div className={styles.buttonGroup}>
                     <button type="submit">Confrimar</button> 
                     <button type="button">Cancelar</button>
                </div>




            </form>




             <div className={styles.resultadoDaBuscaEstudanteConfirmacao}>


<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Nome da disciplina</th>
            <th>#</th>
        </tr>
        
    </thead>
    
    <tbody>
        <tr>
            <td>1</td>
            <td>Historia</td>
            
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