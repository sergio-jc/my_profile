import "../../css/Smooth.css"

interface Section {
    id : number
}
const Smooth = ({id}:Section) => {
  return (
    <>
        <a href={`#sec${id}`}>
            <div className="triangle_shape"/>
        </a>
    </>
  )
}

export default Smooth