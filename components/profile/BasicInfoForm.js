import React from 'react';
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
    const {countries, cities, authUser} = imports.useSelector(imports.usersSelector);
    const [loading, setLoading] = React.useState();
    const dispatch = imports.useDispatch();

  const handleCities= (e) => {
    dispatch(imports.setCities(e));
  }

  const cookies = new imports.Cookies();
  const {register, reset, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(schema),   
        })
    
  const submit = (data) => {
      setLoading(true);
      dispatch(imports.updateUser({url: `/api/update-auth-user`, body: data,
       cookie: cookies.get("token")}))
      .then(imports.unwrapResult).then(() => {
          setLoading(false)
          imports.notify.show('Saved successfully', 'success', 2000)
      })
      .catch(() => setLoading(false));
  }      

    return (
        <div className="basic-info-form">
        <imports.SpinLoader loading={loading}/>
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
                defaultValue={authUser?.first_name}
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
                defaultValue={authUser?.last_name}
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
                defaultValue={authUser?.gender}
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
                     defaultValue={authUser?.age}
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
                defaultValue={authUser?.country}
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
                defaultValue={{label: authUser?.country, value: authUser?.country}}
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
                    defaultValue={authUser?.city}
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
                    defaultValue={{label: authUser?.city, value: authUser?.city}}
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
                        <a className="cancel-btn btn">Cancel</a>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
