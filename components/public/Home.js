import React from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import * as Form from "components/formFields";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { PhoneIcon, MoneyIcon } from "components/Icons";
import * as imports from "components/Imports";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import { ageMin } from "../helpers/minAge";
import { styled } from "styled-components";
import { colors, device } from "../styleVars";
import userTimezone from "../helpers/timezone";

const TopItems = styled.div`
  justify-content: center;
  width: 100%;
  flex-direction: row;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const TopItem = styled.div`
  border: 2px solid ${colors.gray400};
  border-radius: 5px;
  padding: 5px 7px;
  margin: 10px;
`;

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  gender: yup.string().required(),
  birth_date: yup.date().max(ageMin).required(),
  country: yup.string().required(),
  city: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  c_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password")]),
});

export default function Home() {
  const { countries, cities } = imports.useSelector(imports.usersSelector);
  const [startDate, setStartDate] = React.useState(ageMin);

  const dispatch = imports.useDispatch();
  const cookies = new imports.Cookies();
  const router = useRouter();

  const handleCities = (e) => {
    dispatch(imports.setCities(e));
  };
  const { register, reset, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    data.timezone = userTimezone();
    dispatch(imports.register({ url: "/api/clients", body: data }))
      .then(imports.unwrapResult)
      .then((res) => {
        if (cookies.get("token")) {
          reset({});
          router.push("/profile");
        }
      })
      .catch((e) => e.message);
  };
  return (
    <div>
      <div className="background-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <TopItems>
                <TopItem>
                  <Link href="/">
                    <a>Dating tips</a>
                  </Link>
                </TopItem>
                <TopItem>
                  <Link href="/#signup">
                    <a>Signup</a>
                  </Link>
                </TopItem>
              </TopItems>
              <div className="welcome-text">
                <h1>
                  Meet The Hottest
                  <br /> Person In Your
                  <br />
                  Area Today
                </h1>
                <h3>It is quick and easy!</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="registration-form" id="signup">
                <h2 className="text-center">JOIN FREE NOW!</h2>
                <form onSubmit={handleSubmit(submit)}>
                  <div className="name-fields">
                    <div>
                      <Form.Input
                        errors={errors}
                        name="first_name"
                        type="text"
                        placeholder="First name"
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
                        title="Last name"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div>
                    <Form.SelectOption
                      errors={errors}
                      name="gender"
                      title="Gender"
                      defaultValue={""}
                      options={["Male", "Female"]}
                      control={control}
                      instanceId="gender_id"
                      placeholder="Who are you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="birth_date" className="label">
                      Date of birth
                    </label>

                    <Controller
                      control={control}
                      defaultValue={startDate}
                      name="birth_date"
                      render={({ onChange }) => (
                        <DatePicker
                          dateFormat="yyyy-MM-dd"
                          maxDate={ageMin}
                          showIcon
                          selected={startDate}
                          onChange={(date) => {
                            onChange(date);
                            setStartDate(date);
                          }}
                        />
                      )}
                    />
                    <span className="error">{errors.birth_date?.message}</span>
                  </div>

                  <div className="place-fields">
                    <div>
                      <label htmlFor="country" className="label">
                        Country
                      </label>
                      <Controller
                        control={control}
                        defaultValue={""}
                        name="country"
                        render={({ onChange }) => (
                          <Select
                            onChange={(e) => {
                              onChange(e.value);
                              handleCities(e.value);
                            }}
                            options={countries?.map((country) => ({
                              label: country,
                              value: country,
                            }))}
                            name="country"
                            instanceId="country_id"
                            isSearchable
                            placeholder="Search countries..."
                            defaultValue={""}
                            className="select-box"
                          />
                        )}
                      />
                      <span className="error">{errors.country?.message}</span>
                    </div>
                    <div>
                      <label htmlFor="city" className="label">
                        City
                      </label>
                      <Controller
                        control={control}
                        defaultValue={""}
                        name="city"
                        render={({ onChange }) => (
                          <Select
                            onChange={(e) => {
                              onChange(e.value);
                            }}
                            options={cities?.map((city) => ({
                              label: city,
                              value: city,
                            }))}
                            name="city"
                            instanceId="city_id"
                            isSearchable
                            placeholder="Search cities..."
                            defaultValue={""}
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
                    <small>
                      By joining you agree to our{" "}
                      <b>
                        <Link href="/terms">
                          <a>Terms</a>
                        </Link>
                      </b>{" "}
                      &{" "}
                      <b>
                        <Link href="/privacy">
                          <a>Privacy</a>
                        </Link>
                      </b>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="info">
              <h2>
                <PhoneIcon />
              </h2>
              <h3>Discover & communicate</h3>
              <p>
                The Best Social Network and Dating Site for Live Chatting and
                Making New Friends. Meet thousands of like-minded singles
                virtually and connect with lightning speed.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="info">
              <h2>
                <MoneyIcon />
              </h2>
              <h3>Save time & money</h3>
              <p>
                Attempts of finding a partner in various entertainment venues or
                specialized groups for individuals looking to marry frequently
                result in a waste of time and frustration. With the experience
                of such unsuccessful dates, the loneliness syndrome worsens, and
                the desire to begin them in this manner diminishes. We make it
                simple to meet people and get a feel for them first, so that
                when you do go on that first date or meet for coffee without
                spending a dime, you can relax and be yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
