import { Link } from 'react-router-dom'
import { ArrowUpRight, Briefcase, FileText, Wallet, Activity, Sparkles } from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Line, LineChart } from 'recharts'
import Card from '../components/ui/Card'
import { cashSeries, growthSeries, quickMetrics } from '../data/mockData'

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-6 shadow-panel">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Olá, Aurora</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Acompanhe resultados e tendências</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">Uma visão rápida e elegante para as métricas mais importantes do seu negócio.</p>
          </div>
          <div className="inline-flex flex-wrap gap-3">
            <button className="rounded-3xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark">Últimos 7 dias</button>
            <button className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50">Últimos 30 dias</button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {quickMetrics.map((metric) => (
          <Card key={metric.title} className="group overflow-hidden">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-700">{metric.title}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{metric.value}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">{metric.delta}</div>
            </div>
            <div className="mt-6 flex items-center justify-between text-slate-600">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">Visão geral</span>
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Receita vs despesas</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">Tendência do mês</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-brand hover:text-brand">
              Ver histórico
            </button>
          </div>
          <div className="h-[260px] sm:h-72 w-full">
            <ResponsiveContainer>
              <AreaChart data={cashSeries} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="receita" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.24} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.03} />
                  </linearGradient>
                  <linearGradient id="despesa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F172A" stopOpacity={0.16} />
                    <stop offset="95%" stopColor="#0F172A" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94A3B8" />
                <YAxis axisLine={false} tickLine={false} stroke="#94A3B8" />
                <Tooltip />
                <Area type="monotone" dataKey="receita" stroke="#3B82F6" fill="url(#receita)" strokeWidth={3} />
                <Area type="monotone" dataKey="despesa" stroke="#0F172A" fill="url(#despesa)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Painel rápido</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">Ações prioritárias</h3>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-600">Nova meta</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">Reunião com equipe de vendas às 16h</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-5">
              <p className="text-sm text-slate-600">Atividade recente</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="font-semibold">Atualização de relatório financeiro concluída</p>
                <p>Dados sincronizados com o módulo AstraFinance.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Performance</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Produtividade</h3>
            </div>
            <div className="rounded-3xl bg-brand/10 px-3 py-2 text-sm font-semibold text-brand">+14%</div>
          </div>
          <div className="mt-6 h-48">
            <ResponsiveContainer>
              <LineChart data={growthSeries} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94A3B8" />
                <YAxis axisLine={false} tickLine={false} stroke="#94A3B8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={4} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Equipe</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Colaborações</h3>
            </div>
            <div className="rounded-3xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">4 novos</div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p className="leading-7">A integração com AstraDocs e AstraPoint melhora o ciclo de workflows e reduz retrabalho em 22%.</p>
            <p className="rounded-3xl bg-slate-50 p-4 text-slate-600">Prioridade: Ajustar os KPIs de produtividade e alinhar o próximo sprint de engenharia.</p>
          </div>
        </Card>

        <Card className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Módulos</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Acesso rápido</h3>
            </div>
          </div>
          <div className="grid gap-3">
            {[
              { label: 'AstraDocs', icon: FileText, path: '/astradocs' },
              { label: 'AstraPoint', icon: Activity, path: '/astrapoint' },
              { label: 'AstraFinance', icon: Wallet, path: '/astrafinance' },
              { label: 'Assistente', icon: Sparkles, path: '/assistant' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center justify-between rounded-3xl border border-slate-200 px-4 py-4 transition hover:border-brand hover:bg-brand/5"
                >
                  <div className="flex items-center gap-3 text-slate-900">
                    <Icon className="h-5 w-5 text-brand" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </Link>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage
