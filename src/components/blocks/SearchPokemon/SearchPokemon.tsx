import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/elements';
// import { Container } from './styles';

const SearchPokemon: React.FC = () => {
  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={Yup.object({
        search: Yup.string().required('requred field'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        // isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.search}
            touched={touched.search}
            errors={errors.search}
          />
        </form>
      )}
    </Formik>
  );
};

export default SearchPokemon;
