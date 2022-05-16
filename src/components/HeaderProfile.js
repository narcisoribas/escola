import styles from '../styles/HeaderProfile.module.css';
import {Link} from 'react-router-dom';

export function HeaderProfile(){
    return(
        <div className={styles.headerProfileContainer}>  
        <div>Logotipo</div>      
            <ul>  
                <li >   
                    <Link to="/">       
                         <a>Inicio</a>
                  </Link>
                </li>      

                <li >
                 <a  href="#">Narciso Ribas</a>
                </li>

                <li >
                    <a href="#">Sair</a>
                </li>   
                
            </ul>



        </div>
    )
}