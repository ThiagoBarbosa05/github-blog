import { useContext } from 'react'
import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { SearchForm } from './components/searchForm'
import { HomeContainer, NumberOfPublications } from './styles'
import { PostsContext } from '../../contexts/PostsContext'

export function Home() {
  const { posts } = useContext(PostsContext)
  const postsQuantity = posts.length

  return (
    <HomeContainer>
      <Profile />
      <NumberOfPublications>
        <strong>Publicações</strong>
        <span>
          {postsQuantity === 1
            ? `${postsQuantity} publicação`
            : `${postsQuantity} publicações`}
        </span>
      </NumberOfPublications>
      <SearchForm />
      <Posts />
    </HomeContainer>
  )
}
