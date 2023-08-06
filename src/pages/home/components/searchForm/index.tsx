import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, reset } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchPosts } = useContext(PostsContext)

  const handleSearchPost = async (data: searchFormInputs) => {
    await fetchPosts(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
