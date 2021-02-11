import React, { useEffect, useState } from 'react';

const FormularioCadastro = (props) => {

  const camposIniciaisDeValores = {
    nomeCompleto: '',
    telefone: '',
    email: '',
    endereco: ''
  };

  let [values, setValues] = useState(camposIniciaisDeValores);

  useEffect(() => {
    if (props.idAtual === '') {
      setValues({
        ...camposIniciaisDeValores
      })
    } else {
      setValues({
        ...props.dadosPacientes[props.idAtual]
      })

    }

  }, [props.idAtual, props.dadosPacientes, camposIniciaisDeValores]);

  const InputChange = e => {
    let { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  };
  const formEnvio = e => {
    e.preventDefault()

    props.addEedit(values)
  };
  return (
    <form action="" autoComplete="off" onSubmit={formEnvio}>
      <div className="form-group input-group">
        <div className="input-grou-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>

        <input type="text" className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} onChange={InputChange} />
      </div>

      <div className="row">
        <div className="form-group input-group col-md-6">
          <div className="input-grou-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>

          <input type="text" className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} onChange={InputChange} />
        </div>


        <div className="form-group input-group col-md-6">
          <div className="input-grou-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>

          <input type="text" className="form-control" placeholder="Seu melhor email" name="email" value={values.email} onChange={InputChange} />
        </div>

      </div>

      <div className="form-group ">
        <textarea className="form-control"
          name="endereco" value={values.endereco} onChange={InputChange} placeholder="endereço" >
        </textarea>
      </div>

      <div className="form-group">
        <input type="submit" value={props.idAtual === '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block" />
      </div>

    </form>
  );
}

export default FormularioCadastro;