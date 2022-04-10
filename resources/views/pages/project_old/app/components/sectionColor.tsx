import * as CSS from '../styles'

export default function SectionColor({ content }) {
  return (
    <div className={CSS.SectionColor}>
      {content.map((v: any, i: number) => (
        <div key={i} style={{ backgroundColor: v.codeColor }}>
          <button
            style={{
              color: v.textColor,
              border: `1px solid ${v.textColor}`,
            }}
          >
            {v.codeColor}
          </button>
          <h6 style={{ color: v.textColor }}>{v.name}</h6>
        </div>
      ))}
    </div>
  )
}
