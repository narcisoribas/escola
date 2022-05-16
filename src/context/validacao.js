import {createContext} from 'react'

export var listaCurso = Array();

const cursoContext = createContext()

export function validarDisciplina(){
    var nomeCurso = document.getElementById('nomeCurso')
    if(nomeCurso.value===''){
        console.log('preencha o campo embranco')
        document.getElementById('nomeCurso').focus();
    }else{
        listaCurso.push(nomeCurso.value);
        
        for(var i=0; i<listaCurso.length;i++){
            
            console.log("cursos cadastrados "+listaCurso[i])
        }

        console.log('nome Curso=>'+nomeCurso.value);
    }

    

    


}