import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from './../../components/Section'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Annotation</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title='Todos' isActive /></li>
                <li><ButtonText title='React' /></li>
                <li><ButtonText title='Node' /></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
            </Search>

            <Content>
                <Section title='Minhas Notas'>
                    <Note data={{
                        title: 'Estudos de Front-End',
                        tags: [
                            { id: '1', name: 'HTML' },
                            { id: '4', name: 'NPM' },
                            { id: '6', name: 'Styles' }
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}