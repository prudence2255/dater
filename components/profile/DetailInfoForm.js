import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import * as Form from 'components/formFields';
import Select from 'react-select';
import * as imports from 'components/Imports';
import {professions} from 'store/data/professions';


const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    gender: yup.string().required(),
    age: yup.number().required(),
    country: yup.string().required(),
    city: yup.string().required(),
      });

export default function DetailInfoForm() {

  const {register, reset, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(schema),   
        })
    
  const submit = (data) => {
      console.log(data);
      reset({});
  }      

    return (
        <div className="detail-info-form">
            <div className="detail-info">
                <form onSubmit={handleSubmit(submit)}>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Summary Profile</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                     <Form.TextArea 
                    errors={errors}
                    name="self_summary"
                    type="text"
                     ref={register}
                     placeholder="Describe yourself in few words"
                    />
                </div>
                 </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Looking for</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.SelectOption 
                errors={errors}
                name="want"
                defaultValue={null}
                options={[
                    'Friendship', 'Dating',
                    'Marriage', 'Network'
                ]}
                control={control}
                instanceId="want_id"
                    />
                </div>
                </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Interested in</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.SelectOption 
                errors={errors}
                name="interest"
                defaultValue={null}
                options={[
                    'Women', 'Men',
                    'Both'
                ]}
                control={control}
                instanceId="interest_id"
            />
            </div>
             </div>
            </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Relationship status</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                     <Form.SelectOption 
                    errors={errors}
                     name="status"
                    defaultValue={null}
                    options={[
                    'Single',
                    'In a relationship',
                    'Married',
                    'Divorced'
                ]}
                control={control}
                instanceId="interest_id"
            />
            </div>
             </div>
            </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Education</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                    <Form.SelectOption 
                     errors={errors}
                    name="education"
                    defaultValue={null}
                options={[
                    'Elementary school',
                    'High school',
                    'Some college',
                    'Bachelor\'s degree',
                    'JD / PhD / Postdoctoral'
                ]}
                control={control}
                instanceId="education_id"
            />
            </div>

            </div>
            </div>
                
                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Profession</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.SelectOption 
                errors={errors}
                name="profession"
                defaultValue={null}
                options={professions}
                control={control}
                instanceId="profession_id"
            />
            </div>
             </div>
            </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Religion</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.SelectOption 
                errors={errors}
                name="religion"
                defaultValue={null}
                options={[
                    'Christian',
                    'Muslim',
                    'Spiritual',
                    'Other'
                ]}
                control={control}
                instanceId="religion_id"
            />
            </div>
            </div>
             </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="label select-label">Height</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.SelectOption 
                errors={errors}
                name="height"
                defaultValue={null}
                options={[
                    '< 4\'6"(137cm)', '4\'10"(147cm)',
                    '5\'2"(157cm)', '5\'6"(168cm)',
                    '5\'10"(178cm)', '6\'2"(188cm)',
                    '> 6\'6"(198cm)',
                ]}
                control={control}
                instanceId="height_id"
            />
            </div>
            </div>
             </div>

                <div className="row">
                <div className="col-md-4">
                <div className="label select-label">Eye color</div>
                </div>
                <div className="col-md-6">
                <div className="value">
                <Form.SelectOption 
                errors={errors}
                name="eye_color"
                defaultValue={null}
                options={[
                    'Blue', 'Brown', 'Gray', 'Green',
                    'Hazel', 'Black'
                ]}
                control={control}
                instanceId="eye_color_id"
            />
            </div>
             </div>
            </div>
            <div className="row">
             <div className="col-md-4">
            <div className="label select-label">Hair color</div>
            </div>
            <div className="col-md-6">
            <div className="value">
            <Form.SelectOption 
                errors={errors}
                name="hair_color"
                defaultValue={null}
                options={[
                    'Blond', 'Dark blond', 'Light brown',
                    'Dark brown', 'Red', 'Gray',
                    'Silver', 'Bald', 'Black'
                ]}
                control={control}
                instanceId="hair_color_id"
            />
            </div>
             </div>
            </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Your favorite music</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.TextArea 
                errors={errors}
                name="f_music"
                type="text"
                ref={register}
                />
                </div>

                </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Your favorite </div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.TextArea 
                errors={errors}
                name="f_shows"
                type="text"
                ref={register}
                />
                </div>

                </div>
                </div>
               
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Your favorite TV shows</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.TextArea 
                errors={errors}
                name="f_movies"
                type="text"
                ref={register}
                />
                </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Your favorite books</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.TextArea 
                errors={errors}
                name="f_books"
                type="text"
                ref={register}
                />
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
