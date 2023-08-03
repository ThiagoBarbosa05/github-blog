import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function LayoutDefault() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
