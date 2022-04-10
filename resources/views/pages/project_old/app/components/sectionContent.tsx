import * as React from 'react'
import * as CSS from '../styles'

export default function SectionContent({ content }) {
  return (
    <div className={CSS.Section}>
      <div className={CSS.SectionTitle}>
        <h2>
          <span>/{content.number}</span>
          {content.title}
        </h2>
      </div>
      <div className={CSS.SectionContent}>
        {content.content.map((v: any, i: number) => {
          const ref = React.useRef(null)
          React.useEffect(() => {
            ref.current.innerHTML = v.html
          }, [v.html])
          return <div key={i} ref={ref}></div>
        })}
      </div>
    </div>
  )
}
