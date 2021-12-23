//Core
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Form, FormSelect, Modal, Toast } from 'react-bootstrap';

//Components
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

//APi Routes and Methods
import { multipartPost } from '../../api';
import { API_ROUTES } from '../../api/routes';

//Static and Constants
import { addPropertyValidationSchema } from '../../utils/validations.js';
import { ErrorMessages } from '../../utils/constants';

//Styles
import styles from './addProperty.scss';
import { isAllFilesValid } from '../../utils/helpers';

export default function addProperty(props) {
  const { show, onHide } = props;
  const [apiError, setApiError] = useState();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState('');
  let formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      locality: '',
      price: '',
      carpet_area: '',
      images: null,
    },
    validationSchema: addPropertyValidationSchema,
    onSubmit: async values => {
      setIsFormSubmitting(true);
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('address', values.address);
      formData.append('locality', values.locality);
      formData.append('price', values.price);
      formData.append('carpet_area', values.carpet_area);
      for (let i = 0; i < values.images.length; i++) {
        formData.append('images', values.images[i]);
      }
      try {
        let res = await multipartPost(API_ROUTES.ADD_PROPERTY, formData, true);
        document.getElementById("property_images").value = "";
        formik.resetForm();
        setShowSuccessMsg(res?.settings?.message);
        setIsFormSubmitting(false);
      } catch (err) {
        setIsFormSubmitting(false);
        setApiError(err.message);
      }
    },
  });

  /******************* 
  @purpose : show api error to null on formik values change
  @Parameter : {}
  @Author : Prashant
  ******************/
  useEffect(() => {
    apiError && setApiError('');
  }, [formik.values]);

  /******************* 
  @purpose : Render Add Property Model
  @Parameter : {}
  @Author : Prashant
  ******************/
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Property</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.login_form}>
          <TextField
            label="Property Name"
            inputProps={{
              type: 'text',
              name: 'name',
              value: formik.values.name,
              placeholder: 'Enter Property Name',
            }}
            formik={formik}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Property Address"
            inputProps={{
              type: 'text',
              name: 'address',
              value: formik.values.address,
            }}
            formik={formik}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Property Locality"
            inputProps={{
              type: 'text',
              name: 'locality',
              value: formik.values.locality,
            }}
            formik={formik}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Property Price"
            inputProps={{
              type: 'string',
              name: 'price',
              value: formik.values.price,
            }}
            formik={formik}
            onChange={e => {
              if (/^[0-9]+$/.test(e.target.value) || !e.target.value) {
                formik.handleChange(e);
              }
            }}
            onBlur={formik.handleBlur}
          />
          <div className={`position-relative ${styles.input_wrapper}`}>
            <Form.Label className={styles.input_label}>
              Select Carpet Area
            </Form.Label>
            <FormSelect
              name="carpet_area"
              className={styles.carpet_select}
              value={formik.values.carpet_area}
              onChange={formik.handleChange}
            >
              <option value="">Select Carpet Area</option>
              <option value="sq_ft">Square Ft.</option>
              <option value="sq_yd">Square Yd.</option>
              <option value="sq_mt">Square Mt.</option>
            </FormSelect>
            {formik.errors['carpet_area'] && formik.touched['carpet_area'] && (
              <p className={`${styles.input_error}`}>
                {formik.errors['carpet_area']}
              </p>
            )}
          </div>
          <div className={`position-relative ${styles.input_wrapper}`}>
            <Form.Label className={styles.input_label}>
              Select Property Images
            </Form.Label>
            <Form.Control
              type="file"
              required
              name="images"
              id="property_images"
              accept="image/*"
              onChange={e => {
                if (e.target.files.length > 5) {
                  formik.setFieldError('images', ErrorMessages.MAX_IMAGES);
                  return false;
                }
                if (!isAllFilesValid(e.target.files, 'image')) {
                  formik.setFieldError(
                    'images',
                    ErrorMessages.SELECT_VALID_IMAGE
                  );
                  return false;
                }
                formik.setFieldValue('images', e.target?.files);
              }}
              multiple
            />
            {formik.errors['images'] && formik.touched['images'] && (
              <p className={`${styles.input_error}`}>
                {formik.errors['images']}
              </p>
            )}
          </div>
          {isFormSubmitting && <Loader />}
          <Toast
            show={showSuccessMsg}
            onClose={() => setShowSuccessMsg('')}
            className="d-block m-auto w-100"
            bg={'success'}
            autohide
          >
            <Toast.Header className="bg-transparent text-white">
              <span className="me-auto">{showSuccessMsg}</span>
            </Toast.Header>
          </Toast>
          <div>
            <p className={styles.login_error_block}>{apiError}</p>
            <Button
              text={
                <div className="d-flex align-items-center">
                  <span>Add</span>
                </div>
              }
              onClick={() => formik.submitForm()}
              disabled={isFormSubmitting}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
