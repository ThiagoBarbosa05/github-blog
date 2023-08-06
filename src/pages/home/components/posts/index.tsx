import { useContext } from 'react'

import { PostCard, PostsContainer } from './styles'
import { PostsContext } from '../../../../contexts/PostsContext'
import { formatterDate } from '../../../../lib/formatterDate'

export function Posts() {
  const { posts } = useContext(PostsContext)

  return (
    <PostsContainer>
      {posts.map((post) => {
        const dateFromNow = formatterDate(new Date(post.created_at))

        return (
          <PostCard key={post.number} to={`/post/${post.number}`}>
            <header>
              <h4>{post.title}</h4>
              <time title={dateFromNow} dateTime={post.created_at}>
                {dateFromNow}
              </time>
            </header>

            <section>{post.body.substring(0, 200)}...</section>
          </PostCard>
        )
      })}
    </PostsContainer>
  )
}
