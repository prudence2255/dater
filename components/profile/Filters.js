import React from "react";
import * as Form from "components/formFields";
import * as imports from "components/Imports";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import Select from "react-select";

const schema = yup.object().shape({});

export default function Filters({
  filtersModal,
  setFiltersModal,
  setQueryLoading,
  setHasMore,
}) {
  const { countries, cities } = imports.useSelector(imports.usersSelector);

  const { register, reset, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = imports.useDispatch();
  const cookies = new imports.Cookies();

  const handleCities = (e) => {
    dispatch(imports.setCities(e));
  };

  const submit = (data) => {
    setQueryLoading(true);
    setFiltersModal(false);
    let paramsString = "";
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        paramsString += `${key}=${value}&`;
      }
    }
    dispatch(imports.setQueryParams(paramsString));
    dispatch(imports.resetUsers());
    setHasMore(true);
    dispatch(
      imports.getUsers({
        url: `/api/clients?${paramsString}`,
        cookie: cookies.get("token"),
      })
    ).then((res) => setQueryLoading(false));
  };

  return (
    <>
      <div
        className={`filters-container w3-modal ${
          filtersModal ? "show-filters-modal" : ""
        }`}
      >
        <div className="w3-modal-content w3-animate-zoom">
          <div className="card">
            <div className="card-header filters-header">
              <h5 className=" text-center"> Filters</h5>
            </div>
            <div className="card-body">
              <form
                className="w3-container pt-1"
                onSubmit={handleSubmit(submit)}
              >
                <div className="mb-3">
                  <Form.Radio
                    title="Gender"
                    errors={errors}
                    name="gender"
                    options={["Male", "Female"]}
                    ref={register}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <Form.Input
                      title="Minimum age"
                      errors={errors}
                      name="min_age"
                      type="number"
                      placeholder="Minimum age"
                      ref={register}
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Input
                      title="Maximum age"
                      errors={errors}
                      name="max_age"
                      type="number"
                      placeholder="Maximum age"
                      ref={register}
                    />
                  </div>
                </div>
                <div className="mb-3">
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
                </div>
                <div className="mb-3">
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
                </div>
                <div className="action-btns mt-3">
                  <button className="save-btn btn">Filter</button>
                  <a
                    className="btn cancel-btn ml-5"
                    onClick={() => setFiltersModal(false)}
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
