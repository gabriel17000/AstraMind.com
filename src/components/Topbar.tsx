import { Bell, Search, ChevronDown, Settings, LogOut, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Topbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 rounded-[32px] bg-white/80 p-5 shadow-panel backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Buscar relatórios, documentos ou insights"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100">
            <Bell className="h-5 w-5" />
          </button>
          <motion.button
            onClick={() => setOpen((prev) => !prev)}
            className="group inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition hover:shadow-md"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-white">A</div>
            <div className="text-left">
              <p className="text-sm font-semibold">Aurora</p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-500 transition group-hover:text-slate-700" />
          </motion.button>
        </div>
      </div>

      {open ? (
        <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:mt-0 md:w-[280px]">
          <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50">
            <User className="h-4 w-4 text-slate-500" /> Perfil
          </button>
          <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50">
            <Settings className="h-4 w-4 text-slate-500" /> Configurações
          </button>
          <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50">
            <LogOut className="h-4 w-4 text-slate-500" /> Sair
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Topbar
