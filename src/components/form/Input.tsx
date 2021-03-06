import React from 'react'

const Input: React.FC<{
  label?: string,
  id?: string,
  name?: string,
  placeholder?: string,
  register?: any,
  type?: string,
  required?: string,
  autoComplete?: string,
  rows?: number
}> = ({label="", register, type="text", children = null, ...props}) => {

  return <>
  {
    !children || ["select"].includes(type)  ? (
      <div className="mb-2">
        <label className="" htmlFor={props?.id}>
          {label}
        </label>
        {
          type === "select" ? 
          <select className="form-select" {...register} {...props}>
            {children}
          </select>
          :
          type === "textarea" ?
          <textarea className="form-control" {...register} {...props}></textarea> 
          :
          <input className="form-control" type={type} {...register} {...props}/>
        }
      </div>
    )
    :
    children
  }
  </>
}

export default Input;
