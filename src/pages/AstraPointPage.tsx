import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { Clock3, Download, Filter, FileText, Users } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { patients } from '../data/mockData'
import { useClock } from '../hooks/useClock'

const statusMap: Record<string, 'success' | 'warning' | 'neutral' | 'danger'> = {
  Presente: 'success',
  Ausente: 'danger',
  Atrasado: 'warning',
  'Em pausa': 'neutral',
}

const weeklyProductivity = [
  { name: 'Seg', value: 68 },
  { name: 'Ter', value: 78 },
  { name: 'Qua', value: 84 },
  { name: 'Qui', value: 91 },
  { name: 'Sex', value: 100 },
  { name: 'Sáb', value: 76 },
  { name: 'Dom', value: 66 },
]

function AstraPointPage() {
  const now = useClock()
  const [activityMessage, setActivityMessage] = useState('Nenhuma ação recente.')
  const [presentCount, setPresentCount] = useState(3)
  const [reportOpen, setReportOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('Todos')

  const filteredStaff = useMemo(
    () => patients.filter((employee) => selectedStatus === 'Todos' || employee.status === selectedStatus),
    [selectedStatus],
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">AstraPoint</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Controle de ponto inteligente</h2>
            </div>
            <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">Relógio em tempo real: {now.toLocaleTimeString()}</div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Presente</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{presentCount}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Atrasos</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">1</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Produtividade</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">84%</p>
            </div>
          </div>
        </Card>

        <Card className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Resumo rápido</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Status de presença</h3>
            </div>
            <Button variant="secondary" onClick={() => setReportOpen(true)}>
              <FileText className="mr-2 h-4 w-4" /> Ver relatório
            </Button>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <p>Os dados mostram uma presença consistente com leve aumento de produtividade durante a semana.</p>
            <p>Use filtros e exporte relatórios para compartilhar com sua liderança.</p>
          </div>
          <div className="grid gap-3 rounded-[28px] bg-slate-50 p-5">
            <div className="flex items-center gap-3 text-slate-700">
              <Clock3 className="h-4 w-4" /> Registro de entrada automático e alertas de atraso em tempo real.
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Users className="h-4 w-4" /> Acompanhe até 20 colaboradores no protótipo com dados corporativos fictícios.
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Download className="h-4 w-4" /> Exporte relatórios com um clique para simular o fluxo financeiro.
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Painel de ações</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Registros rápidos</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => { setActivityMessage('Entrada registrada com sucesso.'); setPresentCount((prev) => prev + 1) }}>Registrar Entrada</Button>
              <Button variant="secondary" onClick={() => setActivityMessage('Saída registrada. Até amanhã!')}>Registrar Saída</Button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Última atividade</p>
              <p className="mt-3 text-lg font-semibold text-slate-950">{activityMessage}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Filtro</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Todos', 'Presente', 'Ausente', 'Atrasado', 'Em pausa'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${
                      selectedStatus === status
                        ? 'bg-brand text-white'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Produtividade semanal</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Tendência operacional</h3>
            </div>
            <span className="rounded-3xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">Detalhado</span>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer>
              <BarChart data={weeklyProductivity} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94A3B8" />
                <YAxis axisLine={false} tickLine={false} stroke="#94A3B8" />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tabela de funcionários</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">Visão geral do time</h3>
          </div>
          <Button variant="secondary" onClick={() => setReportOpen(true)} className="text-slate-900">
            <Download className="mr-2 h-4 w-4" /> Exportar
          </Button>
        </div>
        <div className="space-y-4 md:hidden">
          {filteredStaff.map((person) => (
            <div key={person.id} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-950">{person.name}</p>
                  <p className="mt-2 text-sm text-slate-500">{person.hours} • {person.productivity}</p>
                </div>
                <Badge variant={statusMap[person.status as keyof typeof statusMap]}>{person.status}</Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden overflow-hidden rounded-[28px] border border-slate-200 md:block">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Horas</th>
                <th className="px-6 py-4">Produtividade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredStaff.map((person) => (
                <tr key={person.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{person.name}</td>
                  <td className="px-6 py-4">
                    <Badge variant={statusMap[person.status as keyof typeof statusMap]}>{person.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{person.hours}</td>
                  <td className="px-6 py-4 text-slate-700">{person.productivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="rounded-[32px] bg-slate-950 text-white">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Notificação do RH</p>
            <h3 className="mt-3 text-2xl font-semibold">Alerta de eficiência</h3>
          </div>
          <Badge variant="warning">Revisar</Badge>
        </div>
        <div className="mt-4 rounded-[28px] bg-white/10 p-5 text-slate-200">
          <p>O fluxo de ponto indica que 29% da equipe terá horário estendido na próxima semana. Considere compartilhar relatórios com líderes antes do fechamento do mês.</p>
        </div>
      </Card>

      {reportOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Relatório fictício</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Relatório de Ponto</h3>
              </div>
              <button className="text-slate-400 transition hover:text-slate-900" onClick={() => setReportOpen(false)}>
                Fechar
              </button>
            </div>
            <div className="mt-6 space-y-4 text-slate-700">
              <p><strong>Visão geral:</strong> 3 colaboradores presentes, 1 ausente e 1 em pausa. O sistema indexou os tempos de registro para apresentar uma produtividade de 84%.</p>
              <p><strong>Ações recomendadas:</strong> validar horários de entrada e saída, ajustar meta de horas extras e compartilhar o relatório com operações.</p>
              <Button className="mt-2">Baixar relatório</Button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  )
}

export default AstraPointPage
