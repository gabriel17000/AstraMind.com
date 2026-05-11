import { AnimatePresence, motion } from 'framer-motion'
import { Bell, Menu, Search, X, LayoutDashboard, FileText, Activity, Wallet, Sparkles, User, ChevronDown, Settings, LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { navLinks } from '../data/mockData'

interface MainLayoutProps {
  children: React.ReactNode
}

const mobileBottomNav = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { id: 'astradocs', label: 'Docs', path: '/astradocs', icon: FileText },
  { id: 'astrafinance', label: 'Finance', path: '/astrafinance', icon: Wallet },
  { id: 'assistant', label: 'IA', path: '/assistant', icon: Sparkles },
  { id: 'profile', label: 'Perfil', path: '/astrapoint', icon: Activity },
]

const mobileIconMap = {
  dashboard: LayoutDashboard,
  astradocs: FileText,
  astrapoint: Activity,
  astrafinance: Wallet,
  assistant: Sparkles,
}

function MainLayout({ children }: MainLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const location = useLocation()
  const profileRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.35em] text-slate-500">AstraMind</span>
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">Plataforma IA</span>
              </div>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
            {navLinks.map((item) => {
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'bg-slate-100 text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-brand'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Buscar insights, relatórios ou módulos"
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10"
              />
            </div>
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
              >
                <Bell className="h-5 w-5" />
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 top-12 z-50 w-80 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
                  <p className="text-sm font-semibold text-slate-900">Notificações</p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-sm text-slate-700">3 documentos aguardam análise</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-sm text-slate-700">Relatório financeiro gerado</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-sm text-slate-700">Nova sugestão da IA disponível</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" ref={profileRef}>
              <motion.button
                onClick={() => setProfileOpen(!profileOpen)}
                className="group inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition hover:shadow-md"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <User className="h-5 w-5" />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold">Gabriel</p>
                  <p className="text-xs text-slate-500">Admin</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-500 transition group-hover:text-slate-700" />
              </motion.button>
              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-56 rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
                  <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50">
                    <User className="h-4 w-4 text-slate-500" /> Ver perfil
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50">
                    <Settings className="h-4 w-4 text-slate-500" /> Configurações
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50">
                    <LogOut className="h-4 w-4 text-slate-500" /> Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {children}
        </motion.div>
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
              className="fixed inset-y-0 left-0 z-50 w-[260px] max-w-full bg-white p-6 shadow-2xl xl:hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">AstraMind</p>
                    <p className="text-lg font-semibold text-slate-950">Menu</p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                >
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
                        active ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
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
