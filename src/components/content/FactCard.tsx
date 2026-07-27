interface FactCardProps {
  label: string
  value: string
}

export function FactCard({ label, value }: FactCardProps) {
  return (
    <div className="fact-card">
      <span className="fact-label">{label}</span>
      <span className="fact-value">{value}</span>
    </div>
  )
}
