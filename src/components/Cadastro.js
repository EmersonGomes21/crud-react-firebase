import React, { useState, useEffect } from 'react';
import FormularioCadastro from './FormularioCadastro';
import fireDb from '../database/firebase';
const Cadastro = () => {

  let [dadosPacientes, setDadosPacientes] = useState({});
  let [idAtual, setIdAtual] = useState('');

  useEffect(() => {

    fireDb.child('pacientes').on('value', dbPhoto => {
      if (dbPhoto.val() != null) {
  
        setDadosPacientes({
          ...dbPhoto.val()
        })
      }else{
        setDadosPacientes({})
      }

    })
  }, [])



  const addEedit = obj => {


     if(idAtual === ''){
       fireDb.child('pacientes').push(
         obj,
         error => {
           if (error) {
             console.log('Erro push pacientes', error)
           }
         }
       )
     }else{
       fireDb.child(`pacientes/${idAtual}`).set(
         obj,
         err =>{
          if (err) {
            console.log('Erro no set pacientes', err)
          }
         }
       )
     }
  }
const deletePaciente = key =>{
  if(window.confirm('Deseja Realmente deletar esse cadastro?')){
    fireDb.child(`pacientes/${key}`).remove(
      err =>{
        if (err) {
          console.log('Erro ao deletar paciente', err)
        }
      }
    );
  }
}

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Cadastro de Pacientes</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormularioCadastro {...({addEedit, idAtual, dadosPacientes})} />
        </div>

        <div className="col-md-7">
          <table className="table table-boderless table-stripper"> 
              <thead className="thead-light"></thead> 

              <tr>
                <td>Nome Completo</td>
                <td>Telefone</td>
                <td>E-mail</td>
                <td>Ações</td>
              </tr>
             <tbody>
               {
                 Object.keys(dadosPacientes).map( id => {
                    return <tr key={id}>
                      <td>{dadosPacientes[id].nomeCompleto}</td>
                      <td>{dadosPacientes[id].telefone}</td>
                      <td>{dadosPacientes[id].email}</td>
                      <td>
                        <a className="btn btn-primary" onClick={ ()=> setIdAtual(id)} >
                            <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a className="btn btn-danger" onClick={ ()=> deletePaciente(id)}>
                            <i className="fas fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                 })
               }
             </tbody>

          </table>
         
        </div>
      </div>

    </>
  );
}

export default Cadastro;