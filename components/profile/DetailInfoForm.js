import React from 'react';
import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import * as Form from 'components/formFields';
import * as imports from 'components/Imports';
import {professions} from 'store/data/professions';


const schema = yup.object().shape({
        self_summary: yup.string(),
        want: yup.string(),
        interest: yup.string(),
        status: yup.string(),
        education: yup.string(),
        profession: yup.string(),
        religion: yup.string(),
        f_music: yup.string(),
        f_movies: yup.string(),
        f_shows: yup.string(),
        f_books: yup.string(),
        height: yup.string(),
         eye_color: yup.string(),
         hair_color: yup.string(),
      });

export default function DetailInfoForm() {
    const {authUser} = imports.useSelector(imports.usersSelector);
    const [loading, setLoading] = React.useState();

    const cookies = new imports.Cookies();
  const {register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(schema),   
        });

const dispatch = imports.useDispatch();
    const submit = (data) => {
        setLoading(true);
        dispatch(imports.addUserMeta({url: `/api/update-meta`, body: data,
         cookie: cookies.get("token")}))
        .then(imports.unwrapResult).then(() => {
            setLoading(false);
            imports.notify.show('Saved successfully', 'success', 2000)
        })
        .catch(() => setLoading(false));
    }      
        

    return (
        <div className="detail-info-form">
         <imports.SpinLoader loading={loading}/>
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
                    defaultValue={authUser?.meta?.self_summary ?? ''}
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
                defaultValue={authUser?.meta?.want ?? ''}
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
                defaultValue={authUser?.meta?.interest ?? ''}
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
                    defaultValue={authUser?.meta?.status ?? ''}
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
                    defaultValue={authUser?.meta?.education ?? ''}
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
                defaultValue={authUser?.meta?.profession ?? ''}
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
                defaultValue={authUser?.meta?.religion ?? ''}
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
                defaultValue={authUser?.meta?.height ?? ''}
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
                defaultValue={authUser?.meta?.eye_color ?? ''}
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
                defaultValue={authUser?.meta?.hair_color ?? ''}
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
                defaultValue={authUser?.meta?.f_music ?? ''}
                type="text"
                ref={register}
                />
                </div>

                </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="label">Your favorite movies</div>
                    </div>
                    <div className="col-md-6">
                    <div className="value">
                <Form.TextArea 
                errors={errors}
                name="f_shows"
                defaultValue={authUser?.meta?.f_shows ?? ''}
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
                defaultValue={authUser?.meta?.f_movies ?? ''}
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
                defaultValue={authUser?.meta?.f_books ?? ''}
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
                        <button className="save-btn btn">Save</button>
                        <a className="cancel-btn btn">Cancel</a>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
