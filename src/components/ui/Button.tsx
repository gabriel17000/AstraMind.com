import { motion } from 'framer-motion'

const MotionButton = motion.button

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const styles =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
      : variant === 'ghost'
      ? 'bg-transparent text-brand hover:bg-brand/10'
      : 'bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark'

  return (
    <MotionButton
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...(props as any)}
    >
      {children}
    </MotionButton>
  )
}

export default Button
