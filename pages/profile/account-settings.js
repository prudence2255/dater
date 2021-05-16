import React from 'react';
import * as Imports from 'components/Imports';
import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import * as Form from 'components/formFields';

const schema = yup.object().shape({
    current_password: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
    confirm_password: yup.string().required().oneOf([yup.ref("password")]),
      });
    
     
    
    function AccountSettings() {

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),   
        })

        const submit = (data) => {

        }

    return (
      <Imports.Layout>
        <div className="container account-settings">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="text-center">Account Settings</h4>
                        </div>
                        <div className="card-body">
                        <form onSubmit={handleSubmit(submit)}>
                          <div className="name-fields">
                          <div>
                            <Form.Input 
                              errors={errors}
                              name="current_password"
                              type="password"
                              placeholder="Current password"
                              title="Current password"
                              ref={register}
                            />
                            </div>
                            <div>
                            <Form.Input 
                              errors={errors}
                              name="password"
                              type="password"
                              placeholder="New password"
                              title="New password"
                              ref={register}
                            />
                            </div>
                            <div>
                            <Form.Input 
                              errors={errors}
                              name="confirm_password"
                              type="password"
                              placeholder="Confirm new password"
                              title="Confirm new password"
                              ref={register}
                            />
                            </div>
                            <div className="action-btns">
                              <button className="save-btn btn">Update</button>
                              <a className="cancel-btn btn">Cancel</a>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </Imports.Layout>
    )
}

export default Imports.Auth(AccountSettings);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
    }
  );