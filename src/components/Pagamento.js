import styles from './../styles/Pagamento.module.css';

export function Pagamento(){
    return(
        <div className={styles.containerPagamento}>
            <h1>Pagamento</h1>

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
                                    <th>Meses</th>
                                    <th>Valor da propina</th>
                                    <th>Multa</th>
                                    <th>valor pago</th>
                                    <th>Data de pagamento</th>
                                    <th>estado</th>
                                    <th>pagar</th>
                                </tr>
                                
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>Fevereiro</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>

                                <tr>
                                    <td>Março</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Abril</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Maio</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Junho</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Julho</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Agosto</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Setembro</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>

                                <tr>
                                    <td>Outubro</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Novembro</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
                                </tr>


                                <tr>
                                    <td>Dezembro</td>
                                    <td>36000</td>
                                    <td>1000</td>
                                    <td>37000</td>
                                    <td>10/10/2021</td>
                                    <td>Pago</td>
                                    <td>Nao</td>
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