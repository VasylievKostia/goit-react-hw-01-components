import { Children } from "react"


export function Statistics( props) {
    console.log(props)
    return <section className="statistics">
        <h2 classNameName="title">Upload stats</h2>
        

  <ul className="stat-list">
    <li className="item">
      <span className="label"></span>
      <span className="percentage"></span>
    </li>
    <li className="item">
      <span className="label"></span>
      <span className="percentage"></span>
    </li>
    <li className="item">
      <span className="label"></span>
      <span className="percentage"></span>
    </li>
    <li className="item">
      <span className="label"></span>
      <span className="percentage"></span>
    </li>
  </ul>
</section>
}