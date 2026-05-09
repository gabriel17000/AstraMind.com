import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, FileText, Activity, Wallet, Bot, Sparkles } from 'lucide-react'
import { navLinks } from '../data/mockData'

const iconMap = {
  dashboard: LayoutDashboard,
  astradocs: FileText,
  astrapoint: Activity,
  astrafinance: Wallet,
  assistant: Bot,
}

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="hidden w-72 shrink-0 overflow-hidden rounded-[32px] bg-slate-950 px-6 py-8 text-slate-100 shadow-panel xl:flex xl:flex-col">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AstraMind</p>
          <p className="text-xl font-semibold">Painel SaaS</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navLinks.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap] ?? LayoutDashboard
          const active = location.pathname === item.path

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm transition-all ${
                active
                  ? 'bg-brand text-white shadow-[0_18px_50px_rgba(59,130,246,0.18)]'
                  : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-5"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Próxima meta</p>
        <p className="mt-3 text-sm font-semibold text-white">Aumentar NPS para 93%</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-4/5 rounded-full bg-brand" />
        </div>
      </motion.div>
    </aside>
  )
}

export default Sidebar
