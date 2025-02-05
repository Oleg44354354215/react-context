import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { authContext } from "../AuthProvide/AuthProvide";
import s from "./AuthForm.module.css";

const AuthForm = () => {
  const { vhod } = useContext(authContext);
  const initialValues = {
    login: "",
    password: "8888",
  };
  const handleSubmit = (values) => {
    console.log(values);
    vhod(values.login);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field className={s.input} name="login" placeholder="put name" />
        <Field className={s.input} name="password" placeholder="put password" />
        <button className={s.but} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default AuthForm;
