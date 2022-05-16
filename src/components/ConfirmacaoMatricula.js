import styles from './../styles/ConfirmacaoMatricula.module.css';

export function ConfirmacaoMatricula(){
    return(
        <div className={styles.containerConfirmacaoMatricula}>
            <h1>Confirmação de matrícula</h1>

            <div className={styles.pesquisa}>
                <input 
                    type="text"
                    placeholder ='Digite o numero de bilhete o de estudante'         
                
                />
                 <button>Pesquisar</button>
            </div>

            <div>
                <div className={styles.imagemEstudemPesquisa}>
                    <img src="./img/avatar.jpg" alt=""/>
                </div>

                <div className={styles.nomeEstudante}>
                    <strong>Narciso Fragoso Antonio Ribas</strong>
                </div>


                <div className={styles.resultadoDaBuscaEstudanteConfirmacao}>


                        <table>
                            <thead>
                                <tr>
                                    <th>Numero de esutdante</th>
                                    <th>bilhete</th>
                                    <th>sexo</th>
                                    <th>Idade</th>
                                    <th>Classe</th>
                                    <th>Curso</th>
                                    <th>ano lectivo</th>
                                    <th>Estado da matricula</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>1234567la123456</td>
                                    <td>1234567la1LA08799</td>
                                    <td>MasculinoMaculino</td>
                                    <td>19 anos de idade</td>
                                    <td>10ª classe</td>
                                    <td>Economicas e juridicas</td>
                                    <td>2021/2022</td>
                                    <td>ACTIVO</td>
                                </tr>

                            </tbody>

                        </table>


                </div>
            </div>


                <form>
                     <h1>Pagamento</h1>
                        <div>
                            <div>
                                <label for="ValorApagar">Valor a pagar</label>
                                <input type="text" name="ValorApagar" id="ValorApagar"/>
                            </div>


                            <div>
                                <label for="multa">Multa</label>
                                <input type="text" name="multa" id="multa"/>
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