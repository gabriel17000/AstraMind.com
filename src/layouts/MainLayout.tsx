import { AnimatePresence, motion } from 'framer-motion'
import { Bell, Menu, X, LayoutDashboard, FileText, Activity, Wallet, Bot, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { navLinks } from '../data/mockData'

interface MainLayoutProps {
  children: React.ReactNode
}

const mobileBottomNav = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { id: 'astradocs', label: 'Módulos', path: '/astradocs', icon: FileText },
  { id: 'assistant', label: 'IA', path: '/assistant', icon: Sparkles },
  { id: 'astrafinance', label: 'Perfil', path: '/astrafinance', icon: Wallet },
]

const mobileIconMap = {
  dashboard: LayoutDashboard,
  astradocs: FileText,
  astrapoint: Activity,
  astrafinance: Wallet,
  assistant: Bot,
}

function MainLayout({ children }: MainLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-backdrop px-4 py-4 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1600px] gap-6 xl:gap-8 pb-24 xl:pb-0">
        <Sidebar />
        <div className="flex-1">
          <div className="sticky top-0 z-30 mb-4 flex items-center justify-between rounded-[28px] bg-white/95 px-4 py-3 shadow-panel backdrop-blur-xl xl:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex-1 px-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">AstraMind</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">Aplicativo inteligente</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200">
                <Bell className="h-5 w-5" />
              </button>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white">A</div>
            </div>
          </div>

          <div className="mb-6 flex flex-col gap-4 rounded-[32px] bg-white/80 p-6 shadow-panel backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Bem-vindo ao AstraMind</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">Painel de inteligência artificial empresarial</h1>
            </div>
            <Link
              to="/astrafinance"
              className="inline-flex items-center justify-center rounded-3xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
            >
              Ver projeções financeiras
            </Link>
          </div>

          <Topbar />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {children}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm xl:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto rounded-r-[32px] border-r border-slate-200/80 bg-white p-6 shadow-2xl xl:hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">AstraMind</p>
                    <p className="text-lg font-semibold text-slate-950">Menu</p>
                  </div>
                </div>
                <button onClick={() => setMenuOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="space-y-2">
                {navLinks.map((item) => {
                  const Icon = mobileIconMap[item.id as keyof typeof mobileIconMap] ?? LayoutDashboard
                  const active = location.pathname === item.path
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                        active ? 'bg-brand text-white shadow-[0_18px_50px_rgba(59,130,246,0.18)]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
              <div className="mt-8 rounded-[28px] bg-slate-50 p-5 text-slate-700">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dica</p>
                <p className="mt-3 text-sm leading-6">Use o menu para navegar rapidamente entre os módulos e mantenha o foco nas informações mais importantes.</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-soft backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          {mobileBottomNav.map((item) => {
            const Icon = item.icon
            const active = location.pathname === item.path
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`group flex flex-col items-center gap-1 rounded-3xl px-3 py-2 text-xs font-semibold transition ${
                  active ? 'text-brand' : 'text-slate-400 hover:text-brand'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
