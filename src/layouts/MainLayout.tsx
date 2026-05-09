import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-backdrop px-4 py-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-[1600px] gap-6 xl:gap-8">
        <Sidebar />
        <div className="flex-1">
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
    </div>
  )
}

export default MainLayout
