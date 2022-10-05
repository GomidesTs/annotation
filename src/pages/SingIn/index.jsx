import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingIn() {
    return (
        <Container>
            <Form>
                <h1>Annotation</h1>

                <p>Aplicação para salver e gerenciar suas notas e links úteis</p>

                <h2>Faça seu login</h2>

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

                <Button title='Entrar' />

                <Link to='/register'>Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}