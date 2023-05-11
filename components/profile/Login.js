import React from "react";
import * as Form from "components/formFields";
import * as imports from "components/Imports";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import Link from "next/dist/client/link";
import { colors } from "../styleVars";

const ActionButton = styled.a`
  color: ${colors.blue};
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${colors.blue};
  }
`;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login({ loginModal, setLoginModal }) {
  const { register, reset, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = imports.useDispatch();
  const cookies = new imports.Cookies();
  const router = useRouter();

  const submit = (data) => {
    dispatch(imports.login({ url: "/api/client-login", body: data }))
      .then(imports.unwrapResult)
      .then((res) => {
        if (cookies.get("token")) {
          reset({});
          setLoginModal(false);
          imports.notify.show("Successfully logged in", "success", 2000);
          router.push("/profile");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div
        className={`login-container w3-modal ${
          loginModal ? "show-login-modal" : ""
        }`}
      >
        <div className="w3-modal-content w3-animate-zoom">
          <div className="card">
            <div className="card-header login-header">
              <h5 className=" text-center"> Login</h5>
            </div>
            <div className="card-body">
              <form
                className="w3-container pt-1"
                onSubmit={handleSubmit(submit)}
              >
                <div>
                  <Form.Input
                    errors={errors}
                    name="email"
                    type="text"
                    placeholder="Email"
                    ref={register}
                  />
                </div>

                <div className="mt-4">
                  <Form.Input
                    errors={errors}
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register}
                  />
                </div>
                <div className="action-btns">
                  <button className=" login-btn">Login</button>
                  <a
                    className="btn cancel-btn ml-5"
                    onClick={() => setLoginModal(false)}
                  >
                    Cancel
                  </a>
                </div>
                <div className="mt-2">
                  <ActionButton className="btn">Forgot password?</ActionButton>
                  <Link href="/#signup">
                    <ActionButton>Not registered?</ActionButton>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
