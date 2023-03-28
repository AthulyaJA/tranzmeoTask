import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { api } from "../../Library/api";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { SignUpValidationSchema } from "./SignUpValidation";
import { toast } from "react-toastify";
import TextError from "../../components/Error/TextError";
import {
    Button,
    Col,
    FormGroup,

    InputGroup,
    InputGroupText,
    Input,
    Label,
    Row,
    Spinner,
} from "reactstrap";

export default function SignUP() {
    const [password, setpassword] = useState<any>("password");
    const [eye, seteye] = useState(true);
    const handleSubmit = (values: any, actions: any) => {
        sendLoginData(values, actions);
    };
    const Eye = () => {
        if (password == "password") {
            setpassword("text");
            seteye(false);
        } else {
            setpassword("password");
            seteye(true);
        }
    };
    const init = {
        email: "",
        first_name: "",
        last_name: "",
        password: ""

    }
    const sendLoginData = (values: any, actions: any) => {

        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({
                email: values?.email,
                lirstName: values?.first_name,
                LirstName: values?.last_name,
                password: values?.password,
                age: 20,
            })
        },)
            /* other user data */


            .then(res => res.json())
            .then(res =>
                toast.success("User Created ")
            )
            .catch(err => console.error(err));

    }
    return (<>


        <Formik
            validationSchema={SignUpValidationSchema}
            initialValues={init}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions);
            }}
        >
            {({
                errors,
                values,
                isSubmitting,
                handleChange,
                touched,
            }) => (
                <>
                    {console.log(errors, "errors")}
                    <div className="Auth-form-container">

                        <Form className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign In</h3>
                                <div className="text-center">
                                    Already registered?{" "}
                                    <span className="link-primary" >
                                        <Link to="/"> Login</Link>

                                    </span>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name={"first_name"}
                                        onChange={handleChange}
                                        value={values?.first_name}
                                        className="form-control mt-1"
                                        placeholder="e.g Jane Doe"
                                    />
                                    <span className="text-danger">{errors?.first_name}</span>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name={"last_name"}
                                        onChange={handleChange}
                                        value={values?.last_name}
                                        className="form-control mt-1"
                                        placeholder="e.g Jane Doe"
                                    />
                                    <span className="text-danger">{errors?.last_name}</span>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Email Address"
                                        onChange={handleChange}
                                        value={values?.email}
                                        name="email"
                                    />
                                    <span className="text-danger">{errors?.email}</span>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control mt-1"
                                        placeholder="Password"
                                        value={values?.password}
                                        onChange={handleChange}
                                    />
                                    <span className="text-danger">{errors?.password}</span>
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={() => handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                                <p className="text-center mt-2">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </div>
                        </Form>
                    </div>

                </>)
            }


        </Formik >




    </>)


}