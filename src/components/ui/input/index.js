const Input =({name,placeholder,type="text",required=false})=>{
  return(
    <input
    className="pl-5  pt-2 pb-2 w-full  border-black border  placeholder-[#00000066]  font-bold text-[16px]"
    placeholder={placeholder}
    type={type}
    name={name}
    required={required}

  />
  )

}
export default Input