import {createPortal} from 'react-dom'
const Modal=({setModal})=>{
    const myStyle = {
        color: "black",
        backgroundColor: "white",
        padding: "20px 20px",
        fontFamily: "Sans-Serif",
        top:"10%",
        marginLeft:"clamp(10px,30vw,600px)",
        textAlign:"center",
        alignContent:"center",
        height:"200px",
        width:"clamp(300px, 600px, 600px)" ,
        position:"fixed"
      };
      const myButton = {
        color: "black",
        backgroundColor: "pink",
        padding: "15px",
        textAlign:"center",
        height:"40px",
        width:"100px"
      };
      const underLine={
          backgroundColor:"black",
          margin:"auto",
          height:"1px",
          width:"500px"
      }
    return (
        createPortal(
            <div style={myStyle}>
              <p >Hey buddy!! <br></br></p>
              <div style={underLine}></div>
              <p style={{margin:"20px"}}>Please login to make your wish delivered home</p>  
                <button onClick={()=>{setModal(false)}}>close</button>
            </div>,
            document.getElementById('modal')
        )
    )
}
export default Modal