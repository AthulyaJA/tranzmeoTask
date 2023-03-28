import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { api } from "../../Library/api";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { LoginValidationSchema } from "./LoginValidation";
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

export default function LoginView() {
    const [password, setpassword] = useState<any>("password");
    const navigate = useNavigate()
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
        password: ""

    }
    const sendLoginData = (values: any, actions: any) => {

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({
                // username: values?.email,
                // password: values?.password,
                username: 'kminchelle',
                password: '0lelplR',
            })
        },)
            /* other user data */


            .then(res => res.json())
            .then(res => {
                console.log(res, "hjfgds")
                if (res?.message) {
                    toast.error(res?.message)
                }
                else {
                    let token=res?.token
                    localStorage.setItem("AUTH_TOKEN",token)
                    toast.success("Login sucessfully")
                    navigate("/dashboard")
                }


            }


            )
            .catch(err => {
                console.log(err, "aGHSDSGDAS")
                toast.error("Invalid credentials")
            }
            );

    }
    return (<>


        <Formik
            validationSchema={LoginValidationSchema}
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
                                <h3 className="Auth-form-title">Login</h3>
                                <div className="text-center">
                                    Not a user?{" "}
                                    <span className="link-primary" >
                                        <Link to="/sign_up"> Sign Up</Link>

                                    </span>
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