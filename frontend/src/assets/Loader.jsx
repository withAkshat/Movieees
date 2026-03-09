export default function Loader(){

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(5,1fr)",
      gap:"20px"
    }}>
      {Array.from({length:10}).map((_,i)=>(
        <div key={i} style={{
          height:"300px",
          background:"#ddd",
          borderRadius:"8px"
        }} />
      ))}
    </div>
  )
}