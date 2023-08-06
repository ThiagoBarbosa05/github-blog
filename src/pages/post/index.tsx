/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PostInfo } from './components/postInfo'
import { PostContainer, PostDetailsContainer } from './styles'
import { IPostInfo } from '../../contexts/PostsContext'
import { api } from '../../lib/api'
import { useParams } from 'react-router-dom'
import { formatterDate } from '../../lib/formatterDate'

export function Post() {
  const [post, setPost] = useState<IPostInfo>({} as IPostInfo)
  const { number } = useParams()

  const fetchPost = async () => {
    const response = await api.get(
      `repos/ThiagoBarbosa05/github-blog/issues/${number}`,
    )

    const postWithDataFormatted = {
      ...response.data,
      created_at: formatterDate(new Date(response.data.created_at)),
    }

    setPost(postWithDataFormatted)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo
        title={post.title}
        url={post.html_url}
        user={post.user}
        createdAt={post.created_at}
        comments={post.comments}
      />
      <PostDetailsContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </PostDetailsContainer>
    </PostContainer>
  )
}
