import * as yup from 'yup';

const FIELD_REQUIRED_ERROR = 'This field is required.';
const MIN_LENGHT_ERROR = (val, minLength) =>
  `${val} is too short. It should be at least ${minLength} long.`;

export const taskSubmitSchema = yup.object().shape({
  playerName: yup
    .string()
    .trim()
    .required(FIELD_REQUIRED_ERROR)
    .test('len', MIN_LENGHT_ERROR('Name', 3), (val) => val.length >= 3),
  solutionCode: yup.string().required(FIELD_REQUIRED_ERROR),
});
