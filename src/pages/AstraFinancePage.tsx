import { useMemo, useState } from 'react'
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line, AreaChart, Area } from 'recharts'
import { Download, Plus, Filter, ChevronRight } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { cashSeries, transactions } from '../data/mockData'

const categories = ['Todos', 'SaaS', 'Operacional', 'Comercial', 'Marketing']

function AstraFinancePage() {
  const [filter, setFilter] = useState('Todos')
  const [reportOpen, setReportOpen] = useState(false)
  const [sampleLoading, setSampleLoading] = useState(false)

  const filteredTransactions = useMemo(
    () => transactions.filter((transaction) => filter === 'Todos' || transaction.category === filter),
    [filter],
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">AstraFinance</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Gestão financeira avançada</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
              <Button onClick={() => { setSampleLoading(true); setTimeout(() => setSampleLoading(false), 900) }}>
                Atualizar Dados
              </Button>
              <Button variant="secondary" onClick={() => setReportOpen(true)}>
                Gerar Relatório
              </Button>
              <Button variant="ghost" className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                Nova Transação
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Receita total', value: 'R$ 1.24M', delta: '+18.2%' },
              { title: 'Despesas', value: 'R$ 428K', delta: '-4.1%' },
              { title: 'Lucro líquido', value: 'R$ 812K', delta: '+22.8%' },
              { title: 'Meta mensal', value: 'R$ 950K', delta: '83%' },
            ].map((metric) => (
              <div key={metric.title} className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{metric.title}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-600">{metric.delta}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[32px] bg-slate-950 text-white">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Indicador</p>
            <h3 className="text-3xl font-semibold">Crescimento financeiro sólido</h3>
            <p className="text-sm text-slate-300">Foco em aumentar margem e reduzir despesas fixas com uma visão estratégica integrada.</p>
            <div className="rounded-[28px] bg-white/10 p-5">
              <div className="flex items-center justify-between gap-4 text-sm text-slate-200">
                <span>Taxa de conversão de receita</span>
                <span className="font-semibold">14.2%</span>
              </div>
              <div className="mt-4 h-4 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[70%] rounded-full bg-brand" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fluxo de caixa</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Projeção mensal</h3>
            </div>
            <div className="rounded-3xl border border-slate-200 px-4 py-2 text-sm text-slate-700">Atualizado</div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer>
              <LineChart data={cashSeries} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94A3B8" />
                <YAxis axisLine={false} tickLine={false} stroke="#94A3B8" />
                <Tooltip />
                <Line type="monotone" dataKey="receita" stroke="#3B82F6" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="despesa" stroke="#0F172A" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="grid gap-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Resumo</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Metas financeiras</h3>
              </div>
              <Button variant="ghost">Ver detalhes</Button>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-500">Meta atingida</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">83%</p>
                </div>
                <Badge variant="success">No caminho</Badge>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[83%] rounded-full bg-brand" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">
              <p>Use as projeções para ajustar o orçamento e priorizar investimentos em áreas de alto crescimento.</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Histórico financeiro</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Últimas transações</h3>
            </div>
            <div className="flex items-center gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${
                    filter === item
                      ? 'bg-brand text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 md:hidden">
            {filteredTransactions.map((item) => (
              <div key={item.id} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.category} • {item.date}</p>
                  </div>
                  <div className={`rounded-3xl px-3 py-2 text-sm font-semibold ${item.status === 'Receita' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{item.amount}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden overflow-hidden rounded-[28px] border border-slate-200 md:block">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4">Transação</th>
                  <th className="px-6 py-4">Categoria</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredTransactions.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.label}</td>
                    <td className="px-6 py-4 text-slate-700">{item.category}</td>
                    <td className="px-6 py-4 text-slate-700">{item.date}</td>
                    <td className={`px-6 py-4 font-semibold ${item.status === 'Receita' ? 'text-emerald-600' : 'text-rose-600'}`}>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Painel de comparação</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Receitas x Despesas</h3>
            </div>
            <div className="h-72">
              <ResponsiveContainer>
                <AreaChart data={cashSeries} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="areaReceita" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.03} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94A3B8" />
                  <YAxis axisLine={false} tickLine={false} stroke="#94A3B8" />
                  <Tooltip />
                  <Area type="monotone" dataKey="receita" stroke="#3B82F6" fill="url(#areaReceita)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">O crescimento apresenta consistência com ajustes estratégicos em custo. Visualize variações no próximo trimestre para planejar investimentos.</p>
            </div>
            <div className="flex justify-end">
              <Button variant="ghost">Ver todas as métricas <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        </Card>
      </div>

      {reportOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <div className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Relatório financeiro</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Sumário de resultados</h3>
              </div>
              <button className="text-slate-400 transition hover:text-slate-900" onClick={() => setReportOpen(false)}>
                Fechar
              </button>
            </div>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>Os indicadores mostram um crescimento sustentável da receita com redução leve de despesas operacionais. A projeção mantém margem saudável para investimento em novos produtos.</p>
              <p>Não deixe de revisar as transações de marketing e ajustar metas de faturamento com base nos relatórios semanais.</p>
              <Button className="mt-2">Exportar PDF</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AstraFinancePage
