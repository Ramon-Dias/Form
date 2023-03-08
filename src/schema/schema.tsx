import * as Yup from "yup";


export default Yup.object().shape({
  name: Yup.string().min(3).required("Campo obrigatório"),

  email: Yup.string().required("Campo obrigatório").email("Email inválido"),

  cpf: Yup.string().matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido").required("Campo obrigatório"),

  data: Yup.string().matches(/\d{2,}\/\d{2,}\/\d{4,}/, "Data de nascimento inválida").required("Campo obrigatório"),

  tel: Yup.string().matches(/\(\d{2}\)\d{5}\-\d{4}/, "Número de telefone inválido").required("Campo obrigatório"),

  insta: Yup.string(),

});
