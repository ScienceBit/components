import React from 'react';
import './style.css';

const SigInUm = () => {
    return (
        <div className='container'>
                        <i className="fas fa-code" />

            <div className="card-body" id='cardyb'>

                <fieldset>
                    <div className="log">
                        <h1>

                            Login
                        </h1>
                    </div>
                    <div className='form'>
                    <div className="form-group">
                        <label htmlFor="nickName">Usuário</label>
                        <br/>
                        <input
                            type="text"
                            className="form-control"
                            id="nickName"
                            placeholder="Usuário" />
                    </div>
                    <br/>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <br/>

                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Senha" />
                    </div>
                    <div className="password">
                        <br/>

                        <a href='/'>Esqueci minha senha</a>
                    </div>
                    <button type="submit" className="btn-primary">Entrar</button>
                    <button type="submit" className="btn-danger"><i className="fa fa-google" aria-hidden="true"/> Entrar com o google</button>
                    </div>
                </fieldset>
            </div>
            <br/>
            <div className="card-body">
                <fieldset className='f2'>
                    <div className="logT">
                        <h1>

                            Cadastrar-se
                        </h1>
                    </div>
                    <div className='form'>
                    <div className="form-group">
                        <label htmlFor="nickName">E-mail</label>
                        <br/>
                        <input
                            type="text"
                            className="form-control"
                            id="nickName"
                            placeholder="E-mail" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <br/>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Nome" />
                    </div>

                    <button type="submit" className="btn-primaryT">Cadastrar-se</button>
                    <button type="submit" className="btn-danger"><i className="fa fa-google" aria-hidden="true"/> Cadastre-se com o google</button>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default SigInUm;