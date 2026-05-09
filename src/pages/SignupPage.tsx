import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

function SignupPage() {
  return (
    <div className="min-h-screen bg-backdrop px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-slate-200/80 bg-white p-10 shadow-panel sm:p-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Cadastro de protótipo</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950">Crie sua conta AstraMind</h1>
          </div>
          <Link to="/login" className="text-sm font-semibold text-brand transition hover:text-brand-dark">
            Voltar ao login
          </Link>
        </div>

        <div className="grid gap-6 rounded-[32px] border border-slate-200/90 bg-slate-50 p-8 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Nome completo" placeholder="Ana Silva" />
            <Input label="Empresa" placeholder="AstraMind Tech" />
          </div>
          <Input label="Email" type="email" placeholder="hello@astramind.com" />
          <Input label="Senha" type="password" placeholder="Crie uma senha forte" />
          <Button className="w-full">Continuar</Button>
          <p className="text-center text-sm text-slate-500">Este é um protótipo visual. Não enviaremos dados reais.</p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
