import React from 'react';
import {useFormik} from 'formik';
import {useAppDispatch} from "../../app/hooks/hooks";
import {loginTC} from "../../redux/authReducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Should be more 3';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        },
    });

    return (
        <div>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'} rel="noreferrer"> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        type="email"
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ?
                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                <div>
                    <input
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                </div>
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                <div>
                    <input
                        type="checkbox"
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps('rememberMe')}
                    />
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};


