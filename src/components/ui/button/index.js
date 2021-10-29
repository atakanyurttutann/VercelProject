const Button  =({type,onClick,value})=>{

return(
<button  onClick={onClick}  type={type} className="w-full  pt-2 pb-2 bg-black text-white">{value}</button>

)
}
export default Button