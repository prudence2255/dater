import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import * as Form from 'components/formFields';
import Select from 'react-select';
import { PhoneIcon, MoneyIcon } from 'components/Icons';
import * as imports from 'components/Imports';
import {useRouter} from 'next/router';


const schema = yup.object().shape({
first_name: yup.string().required(),
last_name: yup.string().required(),
gender: yup.string().required(),
age: yup.number().required(),
country: yup.string().required(),
city: yup.string().required(),
email: yup.string().email().required(),
password: yup.string().min(6).required(),
c_password: yup.string().required().oneOf([yup.ref("password")]),
  });

export default function Home() {

const {countries, cities} = imports.useSelector(imports.usersSelector);
const dispatch = imports.useDispatch();
const cookies = new imports.Cookies();
const router = useRouter();

const handleCities= (e) => {
    dispatch(imports.setCities(e));
  }
  const {register, reset, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(schema),   
        })
    
  const submit = (data) => {
    dispatch(imports.register({url: '/api/clients', body: data}))
    .then(imports.unwrapResult).then(res => {
      if(cookies.get("token")){
        reset({});
        router.push('/profile');
      }
    }).catch(e => e.message)
     
  }      
    return (
        <div>
            <div className="background-content">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                   <div className="welcome-text">
                   <h1>
                        Meet The Hottest<br /> Person 
                        In Your
                        <br />
                         Area Today
                    </h1>
                    <h3>It is quick and easy!</h3>
                   </div>
                </div>
                <div className="col-md-4">
                    <div className="registration-form">
                        <h2 className="text-center">JOIN FREE NOW!</h2>
                        <form onSubmit={handleSubmit(submit)}>
                          <div className="name-fields">
                            <div>
                              <Form.Input 
                              errors={errors}
                              name="first_name"
                              type="text"
                              placeholder="First Name"
                              title="First name"
                              ref={register}
                                />
                            </div>
                            <div>
                            <Form.Input 
                              errors={errors}
                              name="last_name"
                              type="text"
                              placeholder="Last name"
                              title="Last Name"
                              ref={register}
                            />
                            </div>
                          </div>
                          <div>
                            <Form.SelectOption 
                              errors={errors}
                              name="gender"
                              title="Gender"
                              defaultValue={null}
                              options={['Male', 'Female']}
                              control={control}
                              instanceId="gender_id"
                              placeholder="Who are you?"
                            />
                          </div>
                          <div>
                            <Form.Input 
                              errors={errors}
                              name="age"
                              type="number"
                              placeholder="How old are you?"
                              title="Your Age"
                              ref={register}
                            />
                            </div>
                          <div className="place-fields">
                              <div>
                              <label htmlFor="country" className="label">Country</label>
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
                            instanceId="country_id"
                            isSearchable
                            placeholder="Search countries..."
                            defaultValue={null}
                            className="select-box"
                          />
                          
                            )}
                        />
                        <span className="error">{errors.country?.message}</span>
                              </div>
                              <div>
                              <label htmlFor="city" className="label">City</label>
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
                              instanceId="city_id"
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
                          <div>
                            <Form.Input 
                              errors={errors}
                              name="email"
                              type="email"
                              placeholder="Your email"
                              title="Email"
                              ref={register}
                            />
                            </div>
                            <div>
                            <Form.Input 
                              errors={errors}
                              name="password"
                              type="password"
                              placeholder="Password"
                              title="Password"
                              ref={register}
                            />
                            <small>minimum of 6 characters</small>
                            </div>
                            <div>
                            <Form.Input 
                              errors={errors}
                              name="c_password"
                              type="password"
                              placeholder="Confirm password"
                              title="Confirm password"
                              ref={register}
                            />
                            </div>
                            <div>
                              <button>Register</button>
                              <small>By joining you agree to our <b>Terms</b> & <b>Privacy</b></small>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
           </div>
          </div>
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="info">
                       <h2>
                         <PhoneIcon />
                       </h2>  
                          <h3>
                              Discover & communicate
                          </h3>
                       <p>
                       The Best Social Network & Dating Site For Live
                        Chatting and Finding New Friends. 
                        Virtually meet thousands of like-minded singles and connect at lightning speed.
                       </p>     
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="info">
                        <h2>
                          <MoneyIcon />
                        </h2>
                        <h3>
                        Save time & money
                        </h3>
                        <p>
                        Here we make it easy to meet folks and feel things out first–so
                         when you do go on that first date, or meet for coffee without spending a penny,
                          you can relax and be yourself.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
