import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-backdrop px-4 py-10 text-center">
      <div className="rounded-[32px] border border-slate-200/80 bg-white p-10 shadow-panel">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-slate-950">Página não encontrada</h1>
        <p className="mt-4 max-w-xl text-slate-600">Parece que você tentou acessar um caminho que ainda não existe no protótipo. Volte ao painel para continuar explorando.</p>
        <Link to="/">
          <Button className="mt-8">Ir para Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
