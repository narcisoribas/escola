import './styles/global.css'
import styles from './styles/Home.module.css';
import {HeaderProfile} from './components/HeaderProfile'
import {Sidebar} from './components/Sidebar';
import {Rotas} from './components/Rotas'
import {BrowserRouter} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
        <div className={styles.container}>        
          <HeaderProfile/>   
          <Sidebar/>
          
          <section >
              <Rotas/>                 
          </section>

        </div>  
    </BrowserRouter>
  );
}

export default App;
