import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import * as Form from 'components/formFields';
import Select from 'react-select';
import * as imports from 'components/Imports';


const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    gender: yup.string().required(),
    age: yup.number().required(),
    country: yup.string().required(),
    city: yup.string().required(),
      });

export default function BasicInfoForm() {
    const {countries, cities} = imports.useSelector(imports.usersSelector);
const dispatch = imports.useDispatch();
  const handleCities= (e) => {
    dispatch(imports.setCities(e));
  }
  const {register, reset, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(schema),   
        })
    
  const submit = (data) => {
      console.log(data);
      reset({});
  }      

    return (
        <div className="basic-info-form">
            <div className="basic-info">
                <form onSubmit={handleSubmit(submit)}>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">First Name</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                 <Form.Input 
                errors={errors}
                name="first_name"
                type="text"
                placeholder="First Name"
                ref={register}
                c_class="info-input"
                />
                </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Last Name</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.Input 
                errors={errors}
                name="last_name"
                type="text"
                placeholder="Last name"
                ref={register}
                c_class="info-input"
                />
                </div> 
                </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Gender</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                    <Form.SelectOption 
                errors={errors}
                name="gender"
                defaultValue={null}
                options={['Male', 'Female']}
                control={control}
                instanceId="gender_info_id"
                placeholder="Who are you?"
                    />
                 </div>
            </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Age</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                    <Form.Input 
                     errors={errors}
                     name="age"
                    type="number"
                    placeholder="How old are you?"
                    ref={register}
                    c_class="info-input"
                 />
            </div> 
            </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Country</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Controller
                control={control}
                defaultValue={null}
                name="country"
                render={({onChange}) => (
                <Select
                onChange={(e) => {
                    onChange(e.value)
                handleCities(e.value)
                }}
                options={countries?.map(country => ({
                    label: country,
                    value: country
                }))}
                name="country"
                instanceId="country_info_id"
                isSearchable
                placeholder="Search countries..."
                defaultValue={null}
                className="select-box"
                />
                
                )}
            />
            <span className="error">{errors.country?.message}</span>
                    </div>
 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">City</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Controller
                    control={control}
                    defaultValue={null}
                    name="city"
                    render={({onChange}) => (
                    <Select
                    onChange={(e) => {
                    onChange(e.value)
                    }}
                    options={cities?.map(city => ({
                    label: city,
                    value: city
                    }))}
                    name="city"
                    instanceId="city_info_id"
                    isSearchable
                    placeholder="Search cities..."
                    defaultValue={null}
                    isDisabled={cities?.length > 0 ? false : true}
                    className="select-box"
                />
                    )}
                />
                <span className="error">{errors.city?.message}</span>  
                    </div>
                </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-6">
                    <div className="action-btns">
                        <button className="save-btn">Save</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
