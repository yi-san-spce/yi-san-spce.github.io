interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}>
      <div className="section-kicker">
        <span>{index}</span>
        <span className="section-kicker__line" />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
