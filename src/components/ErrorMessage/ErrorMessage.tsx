type Props = {
  error?: any
}

export function ErrorMessage({ error }: Props) {
  if (!error) return null

  return <p className="text-red-500">{error}</p>
}
