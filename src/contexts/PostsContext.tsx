import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/api'

export interface IPostInfo {
  title: string
  html_url: string
  number: number
  user: { login: string }
  created_at: string
  comments: number
  body: string
}

interface IPostContextType {
  posts: IPostInfo[]
  fetchPosts: (query?: string) => void
}

interface IPostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as IPostContextType)

export function PostsContextProvider({ children }: IPostsProviderProps) {
  const [posts, setPosts] = useState<IPostInfo[]>([])

  const fetchPosts = async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query}repo:ThiagoBarbosa05/github-blog`,
    )

    const post = response.data.items.map((item: IPostInfo[]) => {
      return item
    })

    setPosts(post)
  }

  useEffect(() => {
    fetchPosts('')
  }, [])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
