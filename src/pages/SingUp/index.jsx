import { Link } from 'react-router-dom'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingUp() {
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
                />

                <Input
                    placeholder='Email'
                    type='email'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Cadastrar' />

                <Link to='/'>Login</Link>
            </Form>
        </Container>
    )
}