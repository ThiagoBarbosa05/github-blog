import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { SearchForm } from './components/searchForm'
import { HomeContainer, NumberOfPublications } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <NumberOfPublications>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </NumberOfPublications>
      <SearchForm />
      <Posts />
    </HomeContainer>
  )
}
