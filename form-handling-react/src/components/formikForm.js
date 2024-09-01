import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function formikForm() {

    const validateSchema = () => {
        username: Yup.string().required("User Name is required");
        email: Yup.string().email('invalid Email').required("Email is required");
        Password: Yup.string().password('invalid Password').required("Password is required");
    }
    return (
        <>
            <h1>formik Form</h1>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <label>Username:</label>
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" />
                    <br />
                    <label>Email:</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <label>Password:</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </>

    )
}
