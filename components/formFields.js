import {forwardRef} from 'react';
import Select from 'react-select';
import {Controller } from "react-hook-form";



const Input = forwardRef(({title, name, c_class, step, type, placeholder, errors, defaultValue, required}, ref) => {
    return(
        <>
        <div className="form-field">
            <label htmlFor={name} className="label">{title}</label>
            <input 
            className={c_class}
            id={null}
            name={name}
            step={step}
            defaultValue={defaultValue}
            type={type} 
            placeholder={placeholder}
            required={required}
            ref={ref}/>
            <span className="error">{errors[name]?.message}</span>
        </div>
        </>
    )
})

const Radio = forwardRef(({title, c_class, errors, name, options, required, defaultChecked}, ref) => {
    return(
        <>
         <div>
            <label htmlFor={name} className="label">{title}</label><br />
           {options.map(option => (
            <div className="form-check form-check-inline ml-2" key={option}>
             <label className="form-check-label">
            <input type="radio" 
            className={`form-check-input ${c_class}`} 
            name={name} 
            id={option}
            value={option} 
            required={required}
            defaultChecked={defaultChecked }
            ref={ref}/>{option}
            
             </label>
            </div>
           ))}
            <span className="error">{errors[name]?.message}</span>
            </div>
        </>
    )
})

const TextArea = forwardRef(({name, title, c_class, defaultValue, placeholder, errors, required}, ref) => {
    return(
        <>
         <div className="form-field">
            <label htmlFor={name} className="label">{title}</label>
           <textarea className={c_class}
            name={name} type="text"
            placeholder={placeholder}
            required={required}
            defaultValue={defaultValue}
            rows="3" ref={ref} >
         
           </textarea>
            <span className="error">{errors[name]?.message}</span>
            </div>
        </>
    )
})

const CheckBox = forwardRef(({name, title, c_class, errors, options, required, defaultChecked}, ref) => {

    return(
        <>
         <div>
            <label htmlFor={name} className="label">{title}</label><br />
           {options.map(option => (
            <div className="form-check form-check-inline ml-2" key={option}>
             <label className="form-check-label">
            <input type="checkbox" 
            className={`form-check-input ${c_class}`}
            required={required}
            name={name} 
            id={`${option}-1`}
            value={option} 
            defaultChecked={defaultChecked}
            ref={ref}/>{option}
            
             </label>
            </div>
           ))}
            <span className="error">{errors[name]?.message}</span>
            </div>
        </>
    )
})

const SelectOption = ({name, title, errors, control,
                     options, instanceId, placeholder, defaultValue}) => {       
    return(
        <>
        <div className="form-field select-option">
        <label className="label">{title}</label><br />
        <Controller
            control={control}
            defaultValue={defaultValue}
            name={name}
            render={({onChange}) => (
            <Select
            onChange={(e) => {
              onChange(e.value)
            }}
            options={options?.map(option => ({
                label: option,
                value: option
            }))}
            name={name}
            instanceId={instanceId}
            placeholder={placeholder}
            defaultValue={{label: defaultValue, value: defaultValue}}
            className="select-box"
          />
          
            )}
        />
         <span className="error">{errors[name]?.message}</span>
        </div>
        </>
    )
}

export {
    Input,
    CheckBox,
    Radio,
    TextArea,
    SelectOption
}