import { useEffect, useMemo, useState } from 'react'
import { Send, Sparkles, MessageCircle, Search, Repeat } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { chatHistory } from '../data/mockData'

const initialMessages = chatHistory.map((item) => ({ ...item, id: `${item.from}-${item.text.slice(0, 10)}` }))

const conversationOptions = [
  { question: 'Como estão minhas vendas?', answer: 'As vendas cresceram 12% este mês comparado ao período anterior.' },
  { question: 'Mostre os gastos da semana.', answer: 'Os gastos aumentaram 8%, principalmente na categoria operacional.' },
  { question: 'Qual é o status da receita?', answer: 'A receita permanece estável com um pico no último ciclo mensal.' },
]

function AssistantPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const recommended = useMemo(() => conversationOptions[0], [])

  useEffect(() => {
    if (!isTyping) return
    const timer = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `ai-${prev.length}`, from: 'ai', text: recommended.answer },
      ])
      setIsTyping(false)
      setDraft('')
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [isTyping, recommended.answer])

  function handleSend() {
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { id: `user-${prev.length}`, from: 'user', text: draft }])
    setIsTyping(true)
  }

  function handleExample(question: string, answer: string) {
    setMessages((prev) => [...prev, { id: `user-${prev.length}`, from: 'user', text: question }])
    setDraft('')
    setIsTyping(true)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Assistente IA</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Converse com o AstraMind</h2>
            </div>
            <Button variant="secondary" onClick={() => setDraft(recommended.question)}>
              <Repeat className="mr-2 h-4 w-4" /> Repetir sugestão
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-between rounded-[32px] border border-slate-200 bg-slate-50 p-5">
            <div>
              <p className="text-sm text-slate-700">Pergunte sobre vendas, custos ou performance.</p>
              <p className="mt-2 text-sm text-slate-600">O assistente responde com dados simulados e insights rápidos.</p>
            </div>
            <Sparkles className="h-8 w-8 text-brand" />
          </div>
        </Card>

        <Card className="space-y-5">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Histórico</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">Conversas recentes</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {conversationOptions.map((item) => (
              <button
                key={item.question}
                onClick={() => handleExample(item.question, item.answer)}
                className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand hover:bg-brand/5"
              >
                {item.question}
              </button>
            ))}
          </div>
        </Card>
      </div>

      <Card className="rounded-[32px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Chat</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">Conversa de negócios</h3>
          </div>
          <div className="rounded-3xl bg-slate-50 px-4 py-2 text-sm text-slate-700">Simulação interativa</div>
        </div>
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {conversationOptions.map((item) => (
            <button
              key={item.question}
              onClick={() => handleExample(item.question, item.answer)}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand hover:bg-brand/5"
            >
              {item.question}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`rounded-[28px] p-5 ${message.from === 'user' ? 'bg-brand/10 self-end text-slate-900' : 'bg-slate-100 text-slate-800'}`}
            >
              <p className="text-sm leading-7">{message.text}</p>
            </div>
          ))}
          {isTyping ? (
            <div className="flex items-center gap-3 rounded-[28px] bg-slate-100 p-5 text-slate-600">
              <div className="h-3 w-3 animate-pulse rounded-full bg-brand" />
              <span>Digitando...</span>
            </div>
          ) : null}
        </div>
        <div className="mt-6 rounded-[32px] border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                className="w-full rounded-3xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Envie uma pergunta para o assistente..."
              />
            </div>
            <Button onClick={handleSend} className="w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" /> Enviar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AssistantPage
