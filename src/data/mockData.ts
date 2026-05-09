export const navLinks = [
  { id: 'dashboard', label: 'Dashboard', path: '/' },
  { id: 'astradocs', label: 'AstraDocs', path: '/astradocs' },
  { id: 'astrapoint', label: 'AstraPoint', path: '/astrapoint' },
  { id: 'astrafinance', label: 'AstraFinance', path: '/astrafinance' },
  { id: 'assistant', label: 'Assistente', path: '/assistant' },
]

export const quickMetrics = [
  { title: 'Receita', value: 'R$ 742.500', delta: '+12.4%', trend: 'up' },
  { title: 'Lucro', value: 'R$ 312.200', delta: '+8.7%', trend: 'up' },
  { title: 'Meta mensal', value: 'R$ 950.000', delta: '78%', trend: 'neutral' },
  { title: 'Produtividade', value: '84%', delta: '+6%', trend: 'up' },
]

export const cashSeries = [
  { name: 'Jan', receita: 120, despesa: 75 },
  { name: 'Fev', receita: 135, despesa: 90 },
  { name: 'Mar', receita: 155, despesa: 100 },
  { name: 'Abr', receita: 168, despesa: 105 },
  { name: 'Mai', receita: 182, despesa: 120 },
  { name: 'Jun', receita: 210, despesa: 135 },
]

export const growthSeries = [
  { name: 'Seg', value: 72 },
  { name: 'Ter', value: 88 },
  { name: 'Qua', value: 94 },
  { name: 'Qui', value: 105 },
  { name: 'Sex', value: 118 },
  { name: 'Sáb', value: 125 },
  { name: 'Dom', value: 132 },
]

export const patients = [
  { id: '001', name: 'Mariana Santos', status: 'Presente', hours: '8h 12m', productivity: '92%' },
  { id: '002', name: 'Lucas Oliveira', status: 'Atrasado', hours: '6h 20m', productivity: '78%' },
  { id: '003', name: 'Eduardo Lima', status: 'Ausente', hours: '0h 00m', productivity: '0%' },
  { id: '004', name: 'Bruna Melo', status: 'Em pausa', hours: '4h 45m', productivity: '54%' },
]

export const documents = [
  { id: 'd-001', name: 'Relatório Q1.pdf', category: 'Financeiro', status: 'Concluído', size: '2.1 MB' },
  { id: 'd-002', name: 'Plano de Vendas.docx', category: 'Operações', status: 'Revisão', size: '1.4 MB' },
  { id: 'd-003', name: 'Proposta de Cliente.pdf', category: 'Comercial', status: 'Analisado', size: '3.8 MB' },
  { id: 'd-004', name: 'Avaliação de Risco.xlsx', category: 'RH', status: 'Pendente', size: '1.0 MB' },
]

export const transactions = [
  { id: 'T-421', label: 'Assinatura AstraMind', amount: '+R$ 18.400', status: 'Receita', date: '12 Mai', category: 'SaaS' },
  { id: 'T-422', label: 'Pagamento fornecedor', amount: '-R$ 4.800', status: 'Despesa', date: '11 Mai', category: 'Operacional' },
  { id: 'T-423', label: 'Renovação cliente', amount: '+R$ 23.200', status: 'Receita', date: '10 Mai', category: 'Comercial' },
  { id: 'T-424', label: 'Investimento em marketing', amount: '-R$ 6.100', status: 'Despesa', date: '09 Mai', category: 'Marketing' },
]

export const chatHistory = [
  { from: 'ai', text: 'Olá! Em que posso ajudar hoje?' },
  { from: 'user', text: 'Como estão minhas vendas?' },
  { from: 'ai', text: 'As vendas cresceram 12% este mês comparado ao período anterior.' },
  { from: 'user', text: 'Mostre os gastos da semana.' },
  { from: 'ai', text: 'Os gastos aumentaram 8%, principalmente na categoria operacional.' },
]
