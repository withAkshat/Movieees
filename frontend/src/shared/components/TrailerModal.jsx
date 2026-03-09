export default function TrailerModal({ trailerKey, onClose }) {

  if (!trailerKey) {
    return (
      <div style={modalStyle}>
        <div style={contentStyle}>
          <h2>Trailer not available</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  return (

    <div style={modalStyle}>

      <div style={contentStyle}>

        <iframe
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer"
          allowFullScreen
        />

        <button onClick={onClose}>Close</button>

      </div>

    </div>

  )

}

const modalStyle = {
  position:"fixed",
  top:0,
  left:0,
  width:"100%",
  height:"100%",
  background:"rgba(0,0,0,0.8)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}

const contentStyle = {
  background:"#000",
  padding:"20px"
}