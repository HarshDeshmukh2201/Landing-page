import React from "react";
import { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   
      localStorage.setItem('data', JSON.stringify(data));
  
    reset();
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="contact bg-light py-5">
      <div className="container">
        <div className="text-center my-5">
          <h1 data-aos="fade-up" data-aos-offset="200">
            Feel Free <span className="text-primary">to Connect</span>
          </h1>
          <hr className="w-25 m-auto"></hr>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-6 "
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <form
              className="row g-3"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  name="name"
                  onClick={() => {
                    trigger("name")
                  }}
                  {...register("name", { required: "name is required" })}
                />
                {errors.name && (
                  <span className="text-danger" > {errors.name.message}</span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  email
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  name="email"
                  onClick={() => {
                    trigger("email")
                  }}
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger"
                 > {errors.email.message}</span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  {...register("address", { required: "address is required" })}
                />
                {errors.address && (
                  <span className="text-danger"> {errors.address.message}</span>
                )}
              </div>

              <div className="col-12">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  
                  {...register("message", {
                    required: "message is required",
                    minLength: { value: "10", message: "min 10 char" },
                    maxLength: { value: 50, message: "max 50 char" },
                  })}
                />
                {errors.message && (
                  <span className="text-danger "  > {errors.message.message}</span>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  {...register("city")}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  name="state"
                  {...register("state")}
                >
                  <option selected="">Choose...</option>
                  <option>mp</option>
                  <option>up</option>
                  <option>Hp</option>
                </select>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              src={require("../img/contact.jpg")}
              className="img-fluid img-thumbnail p-2"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
