import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FormikForm() {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email('Invalid email').required("Email is required"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
    });

    return (
        <>
            <h1>Formik Form</h1>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
}
