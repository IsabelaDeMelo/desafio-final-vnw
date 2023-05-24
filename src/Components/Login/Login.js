import React from 'react'
import NavBar from '../Header/NavBar/NavBar'
import { FormContainer, Form, EmailPassword, CheckBox, ButtonContainer } from "./LoginStyle"

export default function Login() {
    return (
        <section>
            <NavBar />
            <FormContainer>
                <Form> 
                    <h2>LOGIN</h2>
                    <EmailPassword>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required/>
                    <label htmlFor="password" >Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
                    </EmailPassword>
                    <CheckBox>
                        <div>
                            <input type="checkbox" />
                            <span>Lembrar de mim</span>
                        </div>
                        <a href="#">Esqueci minha senha</a>
                    </CheckBox>
                    <ButtonContainer>
                        <button>Entrar</button>
                        <p>Não tem uma conta? <a href="#">Inscrever-se</a></p>
                    </ButtonContainer>
                </Form>
            </FormContainer>
        </section>
    )
}
