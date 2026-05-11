import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, FilePlus, Search, Trash2, UploadCloud, Sparkles } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import Badge from '../components/ui/Badge'
import { documents } from '../data/mockData'

function AstraDocsPage() {
  const [query, setQuery] = useState('')
  const [selectedDoc, setSelectedDoc] = useState(documents[0])
  const [loading, setLoading] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)
  const [analysisOpen, setAnalysisOpen] = useState(false)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Todos')

  const categories = useMemo(
    () => ['Todos', 'Financeiro', 'Operações', 'Comercial', 'RH'],
    [],
  )

  const filteredDocuments = useMemo(
    () =>
      documents.filter((item) => {
        const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory
        const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
        return matchesCategory && matchesQuery
      }),
    [activeCategory, query],
  )

  function handleAction(action: 'summary' | 'analysis') {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (action === 'summary') setSummaryOpen(true)
      else setAnalysisOpen(true)
    }, 900)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">AstraDocs</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Documentos inteligentes</h2>
            </div>
            <Button onClick={() => setUploadOpen(true)}>
              <UploadCloud className="mr-2 h-4 w-4" /> Novo Documento
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Status</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">7 documentos</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="success">Analise concluída</Badge>
                <Badge variant="warning">Revisão pendente</Badge>
                <Badge variant="neutral">Enviar</Badge>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Insights</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">Resumo gerado automaticamente</p>
              <p className="mt-3 text-sm text-slate-600">Use o assistente para visualizar pontos-chave, inconsistências e relatórios rápidos.</p>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col justify-between gap-6 bg-brand text-slate-900">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Sugestão rápida</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">Aprimore a governança documental</h3>
            <p className="mt-4 text-sm text-slate-700">A integração entre AstraDocs e AstraFinance permite relatórios mais completos e decisões mais rápidas.</p>
          </div>
          <div className="rounded-[28px] bg-white/10 p-5">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <Sparkles className="h-5 w-5" />
              Analise automática ativada
            </div>
            <p className="mt-3 text-sm text-slate-700">Simule upload de documentos e explore respostas instantâneas no painel.</p>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-[420px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              placeholder="Buscar documento ou categoria"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-3xl px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-brand text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Card>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Arquivos recentes</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Biblioteca de documentos</h3>
              </div>
              <span className="rounded-3xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">{filteredDocuments.length} arquivos</span>
            </div>
            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <motion.div
                  key={doc.id}
                  layout
                  whileHover={{ y: -2 }}
                  className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{doc.name}</p>
                    <p className="mt-2 text-sm text-slate-700">{doc.category} • {doc.size}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant={doc.status === 'Concluído' ? 'success' : doc.status === 'Revisão' ? 'warning' : 'neutral'}>{doc.status}</Badge>
                    <button
                      onClick={() => setSelectedDoc(doc)}
                      className="rounded-3xl bg-white px-4 py-2 text-sm font-semibold text-brand shadow-sm transition hover:bg-slate-100"
                    >
                      Selecionar
                    </button>
                    <button className="rounded-3xl bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100">
                      <Trash2 className="mr-2 h-4 w-4 inline" /> Excluir
                    </button>
                  </div>
                </motion.div>
              ))}
              {filteredDocuments.length === 0 ? (
                <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  Nenhum documento encontrado para essa busca.
                </div>
              ) : null}
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Ações</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Simular análise</h3>
              </div>
              <span className="rounded-3xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">Documento ativo</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Button onClick={() => handleAction('analysis')} disabled={loading}>Analisar</Button>
              <Button variant="secondary" onClick={() => handleAction('summary')} disabled={loading}>Resumir</Button>
              <Button variant="ghost" onClick={() => setUploadOpen(true)}>Exportar</Button>
            </div>
            <div className="mt-6 rounded-[28px] bg-slate-950/5 p-5 text-slate-600">
              <p className="text-sm">Dica: use os botões para ver animações de carregamento, modais de feedback e simulações inteligentes.</p>
            </div>
          </Card>
        </div>

        <Card className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Documento selecionado</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">{selectedDoc.name}</h3>
          </div>
          <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-700">Categoria</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{selectedDoc.category}</p>
              </div>
              <Badge variant={selectedDoc.status === 'Concluído' ? 'success' : 'warning'}>{selectedDoc.status}</Badge>
            </div>
            <div className="space-y-3 text-slate-600">
              <p>Este documento contém informações financeiras e operacionais essenciais para projetos da equipe.</p>
              <p>O painel simula carregamento suave, ações instantâneas e respostas de IA em apenas alguns cliques.</p>
            </div>
          </div>
          <div className="grid gap-4 rounded-[28px] bg-slate-950/5 p-6 text-slate-700">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Resumo</p>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-800">35 sec</span>
            </div>
            <div className="rounded-3xl bg-white p-5 text-sm text-slate-700 shadow-sm">
              A análise verifica padrões financeiros e identifica possíveis inconsistências de fluxo de caixa e metas. A assistente sugere ações estratégicas com base em dados do documento.
            </div>
          </div>
        </Card>
      </div>

      <AnimatePresence>
        {summaryOpen && (
          <Modal
            key="summary-modal"
            open={summaryOpen}
            title="Resumo gerado pela IA"
            description="Uma síntese automática foi preparada para você."
            onClose={() => setSummaryOpen(false)}
          >
            <div className="space-y-4 text-slate-700">
              <p>O documento apresenta destaque no fluxo de receita recorrente e mostra margem operacional saudável, porém com espaço para otimização de custos variáveis.</p>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Resultado</p>
                <p className="text-sm text-slate-600">Documento analisado com sucesso. Resumo gerado pela IA.</p>
              </div>
            </div>
          </Modal>
        )}

        {analysisOpen && (
          <Modal
            key="analysis-modal"
            open={analysisOpen}
            title="Análise concluída"
            description="O sistema encontrou pontos importantes no documento selecionado."
            onClose={() => setAnalysisOpen(false)}
          >
            <div className="space-y-4 text-slate-700">
              <p>Possíveis inconsistências encontradas em linhas de custo. Recomenda-se validar categorias e prazos de pagamento.</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-600">
                <li>Variância de 9% em despesas operacionais.</li>
                <li>Documentos relacionados ao RH têm dados incompletos.</li>
                <li>Fluxo de caixa simulado indica saldo positivo nos próximos 30 dias.</li>
              </ul>
            </div>
          </Modal>
        )}

        {uploadOpen && (
          <Modal
            key="upload-modal"
            open={uploadOpen}
            title="Upload de documento"
            description="Arraste e solte ou selecione um arquivo para simular upload." 
            onClose={() => setUploadOpen(false)}
          >
            <div className="space-y-4 text-slate-700">
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
                <p className="text-lg font-semibold text-slate-900">Arraste o arquivo aqui</p>
                <p className="mt-2 text-sm">PDF, DOCX, XLSX ou imagens. Este é um protótipo visual.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <Button onClick={() => setUploadOpen(false)}>Selecionar arquivo</Button>
                <Button variant="secondary" onClick={() => setUploadOpen(false)}>Cancelar</Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AstraDocsPage
