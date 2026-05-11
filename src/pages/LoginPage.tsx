import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Modal from '../components/ui/Modal'
import { LogIn, Sparkles } from 'lucide-react'

function LoginPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [forgotOpen, setForgotOpen] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 1000)
  }

  function handleGoogle() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 1100)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_#f8fbff,_#f5f7fb)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-[40px] border border-slate-200/80 bg-white/95 p-10 shadow-panel sm:p-14 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-950 px-4 py-3 text-slate-300 shadow-lg shadow-slate-950/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Sparkles className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">AstraMind</p>
              <h2 className="text-2xl font-semibold">Seu SaaS de IA em um painel premium.</h2>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-4xl font-semibold text-slate-950 sm:text-5xl">Entrar na plataforma</p>
            <p className="max-w-xl text-slate-600">Acesse o painel de operações, análises e assistente AI sem código. Perfeito para protótipos empresariais.</p>
          </div>
          <div className="grid gap-4 rounded-[32px] border border-slate-200/80 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-sm">
              <div>
                <p className="text-sm text-slate-500">Demo login</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">hello@astramind.com</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Sem backend</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recursos</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>Dashboard interativo</li>
                  <li>AstraDocs inteligente</li>
                  <li>AstraPoint e RH</li>
                  <li>AstraFinance sofisticado</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-brand text-white p-5 shadow-lg">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Design proposital</p>
                <p className="mt-4 text-lg font-semibold">Layouts, animações e UX idealizados para SaaS premium.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div className="w-full max-w-md rounded-[32px] bg-slate-950 px-8 py-10 text-slate-300 shadow-2xl shadow-slate-950/20 sm:px-10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Login</p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-100">Entre na sua conta</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input label="Email" type="email" placeholder="Digite seu email" required />
            <Input label="Senha" type="password" placeholder="Digite sua senha" required />
            <div className="flex items-center justify-between text-sm text-slate-300">
              <button type="button" onClick={() => setForgotOpen(true)} className="hover:text-slate-200">
                Esqueceu a senha?
              </button>
              <Link to="/signup" className="hover:text-slate-200">
                Cadastrar-se
              </Link>
            </div>
            <div className="space-y-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Carregando...' : 'Sign in'}
              </Button>
              <Button type="button" variant="secondary" className="w-full text-slate-700" onClick={handleGoogle}>
                <LogIn className="mr-2 h-4 w-4" /> Sign in with Google
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      <Modal open={forgotOpen} title="Recuperar senha" description="Envie um link simulado para redefinir sua senha." onClose={() => setForgotOpen(false)}>
        <p className="text-sm text-slate-600">Digite seu email e receba um link de recuperação fictício.</p>
        <div className="mt-5 flex flex-col gap-4">
          <Input label="Email" type="email" placeholder="hello@astramind.com" />
          <Button onClick={() => setForgotOpen(false)}>Enviar link</Button>
        </div>
      </Modal>
    </div>
  )
}

export default LoginPage
