interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-panel ${className}`}>{children}</div>
  )
}

export default Card
