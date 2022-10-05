import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Excluir nota' />

          <h1>Introcucao ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt exercitationem, nulla doloribus eos iusto odio.
            Voluptate veritatis dolorum tempora repellat dolores.
            Laudantium, accusamus. Repudiandae, aspernatur? Minus
            recusandae rem deleniti cum!
          </p>
          <Section title='Links úteis'>
            <Links>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">https://www.tuliogomides.com.br/</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">https://www.tuliogomides.com.br/</a></li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='Node' />
            <Tag title='Gomides' />
            <Tag title='Estudos' />
            <Tag title='Teste' />
          </Section>

          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  )
}