import "../src/App";
const Button = ({changemode})=>{
  return <>
    <button className="btn" onClick={changemode}>Click to change the Mode</button>
  </>
}
export default Button 