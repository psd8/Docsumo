import * as yup from 'yup';
import { ErrorMessages } from './constants';
export const addPropertyValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required(ErrorMessages.NAME_REQUIRED),
    address: yup.string().required(ErrorMessages.ADDRESS_REQUIRED),
    locality: yup.string().required(ErrorMessages.LOCALITY_REQUIRED),
    price: yup.number().required(ErrorMessages.PRICE_REQUIRED),
    carpet_area: yup.string().required(ErrorMessages.CARPET_AREA_REQUIRED),
    images: yup.mixed().required(ErrorMessages.IMAGES_REQUIRED)
  });