import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { api } from '../../services/api'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos')
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Cadastro realizado com sucesso')
                navigate(-1)
            })
            .catch(err => {
                if (err.response) {
                    alert(error.respose.data.message)
                } else {
                    alert('Não foi possível realizar o cadastro')
                }
            })
    }
    return (
        <Container>
            <Background />

            <Form>
                <h1>Annotation</h1>

                <p>Aplicação para salver e gerenciar suas notas e links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder='Email'
                    type='email'
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title='Cadastrar' onClick={handleSignUp} />

                <Link to='/'>Login</Link>
            </Form>
        </Container>
    )
}