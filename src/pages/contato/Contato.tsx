import React from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import MaskedInput from "react-text-mask";


import Schema from "../../schema/schema";
import { numberCpf, numberNascimento, numberPhone } from "../../utils/validates";

import styles from "../../styles/Contato.module.scss";

interface IFormikValues {
    name: string;
    email: string;
    cpf: string;
    data: string;
    telefone: string;
    instagram: string;
}



const initialValues = {
    name: "",
    email: "",
    cpf: "",
    data: "",
    telefone: "",
    instagram: "",
};

const onSubmit = (values: IFormikValues, actions: FormikHelpers<IFormikValues>) => {
    actions.setSubmitting(true);
    actions.resetForm()

}



function Contato() {

    return (
        <div className={styles["contato__container"]}>
            <h2 className={styles["contato__title"]}>PREENCHA O FORMULÁRIO </h2>

            <Formik className={styles["form__formik"]} onSubmit={onSubmit} initialValues={initialValues} validationSchema={Schema}>
                {({ errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <div className={styles["form__container"]}>
                            <label htmlFor="name">Nome</label>
                            <Field
                                name="name"
                            />
                            <ErrorMessage component="span"
                                name="name"
                                className={styles["form__invalid"]} />
                        </div>
                        <div className={styles["form__container"]}>
                            <label htmlFor="email">E-mail</label>
                            <Field className={errors.email && touched.email && "invalid"} placeholder="Seu e-mail" id="email" name="email" />
                            <ErrorMessage component="span"
                                name="email"
                                className={styles["form__invalid"]} />
                        </div>
                        <div className={styles["form__container"]}>
                            <label htmlFor="cpf">CPF</label>
                            <Field
                                name="cpf"
                                render={(field: any) => (
                                    <MaskedInput
                                        {...field}
                                        mask={numberCpf}
                                        id="cpf"
                                        placeholder="000.000.000-00"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                )}
                            />
                            <ErrorMessage component="span"
                                name="cpf"
                                className={styles["form__invalid"]} />
                        </div>

                        <div className={styles["form__container"]}>
                            <label htmlFor="data">Data de Nascimento:</label>
                            <Field
                                name="data"
                                render={(field: any) => (
                                    <MaskedInput
                                        {...field}
                                        mask={numberNascimento}
                                        id="data"
                                        placeholder="00/00/0000"
                                        type="text"
                                        className={errors.data && touched.data && "invalid"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                )}
                            />
                            <ErrorMessage component="span"
                                name="data"
                                className={styles["form__invalid"]} />
                        </div>
                        <div className={styles["form__container"]}>
                            <label htmlFor="tel">Telefone:</label>

                            <Field
                                name="tel"
                                render={(field: any) => (
                                    <MaskedInput
                                        {...field}
                                        mask={numberPhone}
                                        id="tel"
                                        placeholder="(00)00000-0000"
                                        type="text"
                                        className={errors.telefone && touched.telefone && "invalid"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                )}
                            />
                            <ErrorMessage component="span"
                                name="tel"
                                className={styles["form__invalid"]} />
                        </div>
                        <div className={styles["form__container"]}>
                            <label htmlFor="insta">Instagram</label>
                            <Field className={errors.instagram && touched.instagram && "invalid"} placeholder="@seuuser" id="insta" name="insta" />
                            <ErrorMessage component="span"
                                name="insta"
                                className={styles["form__invalid"]} />
                        </div>

                        <div className={styles["form__check"]}>
                            <label htmlFor="checkbox">*Declaro que li e aceito</label>
                            <input type="checkbox" id="checkbox" name="checkbox"></input>
                        </div>

                        <button className={styles["form__button"]} type="submit">CADASTRE-SE</button>

                    </Form>

                )}
            </Formik>

        </div>

    )
}


export default Contato;
