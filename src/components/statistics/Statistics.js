import s from './Statistics.module.css'
export function Statistics(p) {
    return <section className={s.statistics}>
      <h2 className={s.title}>{ p.title && 'Upload stats'}</h2>
        

  <ul className={s.statList}>
        {p.stats.map(el => {
          return (
            <li key={el.id} className={s.statItem} style={{
                        backgroundColor: `rgb(${105 + 150 * Math.random()}, ${105 + 150 * Math.random()}, ${105 + 150 * Math.random()})`,
                    }}>
              <span className="label">{el.label} </span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
</section>
}
