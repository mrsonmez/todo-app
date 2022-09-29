import * as Yup from "yup";

const validations = Yup.object().shape({
  todo: Yup.string().required("This field is required"),
});
export default validations;
