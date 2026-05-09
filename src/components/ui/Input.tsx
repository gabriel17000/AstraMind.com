interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

function Input({ label, className = '', ...props }: InputProps) {
  return (
    <label className="block text-sm text-slate-700">
      {label ? <span className="mb-2 block font-medium">{label}</span> : null}
      <input
        className={`w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 ${className}`}
        {...props}
      />
    </label>
  )
}

export default Input
