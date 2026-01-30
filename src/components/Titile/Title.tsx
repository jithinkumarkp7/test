type Props = {
  text: string
}

export function Title({ text }: Props) {
  return <h1 className="text-xl font-bold">{text}</h1>
}
