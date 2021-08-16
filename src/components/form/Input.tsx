import React from 'react'

const Input: React.FC<{
  title: string,
  form?: any,
  name: string,
  setForm: {(x: any): any}
}> = ({title, form={}, name, setForm=(x)=>{}, children = null, ...props}) => {
  
  const handleChange = (e: any)=>{
    setForm({...form, [name]:e.target.value});
  }

  return <>
  {
      !children ? <div className="mb-4">
      <label className="">
        {title}
      </label>
      <input className="form-control" {...props} onChange={handleChange} value={form[name]}/>
    </div>
    :
    children
  }
  </>
}

export default Input;
