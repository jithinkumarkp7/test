type Props = {
  label: string
  disabled?: boolean
}

export function Button({ label, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white disabled:opacity-50"
    >
      {label}
    </button>
  )
}
