import React, { useState, useEffect } from "react";
import { Form, Input, Typography } from "antd";
import { Formik } from "formik";
import { useParams, useLocation } from "react-router-dom";

import { PRODUCTS } from "./../../data/products";
import QS from "qs";

const ProductForm = () => {
  const params = useParams();
  const location = useLocation();
  const [mode, setMode] = useState("create");
  const [selectedProduct, setSelectedProduct] = useState({});
  const queryParams = QS.parse(location.search, { ignoreQueryPrefix: true });

  console.log({ location, queryParams });

  useEffect(() => {
    if (params.productEditId) {
      const product = PRODUCTS.find((el) => +el.id === +params.productEditId);
      setMode("edit");
      setSelectedProduct(product);
    } else {
      setMode("create");
    }

    return () => {};
  }, [params]);

  useEffect(() => {
    // APIs call

    return () => {
      // before remove
      // active listeners, unsubscribe
    };
  }, []);

  //   useEffect(() => {
  //     if (!validateEmail(counter)) {
  //       console.log("Invalid Email");
  //     } else {
  //       alert("Valid Email.");
  //     }
  //   }, [counter]);

  if (mode === "create") {
    return (
      <>
        <Typography.Title>Create Product</Typography.Title>
        <Formik
          initialValues={{
            title: "",
            desacription: "",
            image: "",
            tags: "",
            category: "",
            size: "",
          }}
          validate={(values) => {
            const errors = {};

            // title validation
            if (!values.title) {
              errors.title = "Title is Required.";
            } else if (values.title.length < 10) {
              errors.title = "Title should be greater then 10 chars.";
            }

            //   description validation
            if (!values.description) {
              errors.description = "Description is Required.";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            /* and other goodies */
          }) => (
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <Form.Item label="Title">
                <Input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && errors.title}{" "}
              </Form.Item>
              <Form.Item label="Desacription">
                <Input
                  type="text"
                  name="desacription"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desacription}
                />
                {errors.desacription &&
                  touched.desacription &&
                  errors.desacription}{" "}
              </Form.Item>
              <Form.Item label="Image">
                <Input
                  type="text"
                  name="image"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image}
                />
                {errors.image && touched.image && errors.image}
              </Form.Item>
              <Form.Item label="Tags">
                <Input
                  type="text"
                  name="tags"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tags}
                />
                {errors.tags && touched.tags && errors.tags}
              </Form.Item>
              <Form.Item label="Category">
                <Input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                />
                {errors.category && touched.category && errors.category}
              </Form.Item>
              <Form.Item label="Size">
                <Input
                  type="text"
                  name="size"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.size}
                />
                {errors.size && touched.size && errors.size}
              </Form.Item>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </>
    );
  } else if (mode === "edit") {
    if (selectedProduct) {
      return (
        <>
          <Typography.Title>Edit Product</Typography.Title>

          <Formik
            initialValues={{
              title: selectedProduct.title,
              desacription: selectedProduct.description,
              image: "",
              tags: "",
              category: "asdasdasd",
              size: "",
            }}
            validate={(values) => {
              const errors = {};

              // title validation
              if (!values.title) {
                errors.title = "Title is Required.";
              } else if (values.title.length < 10) {
                errors.title = "Title should be greater then 10 chars.";
              }

              //   description validation
              if (!values.description) {
                errors.description = "Description is Required.";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              resetForm,
              /* and other goodies */
            }) => {
              return (
                <form
                  onSubmit={(event) => {
                    console.log(event);
                    handleSubmit(event);
                  }}
                >
                  <Form.Item label="Title">
                    <Input
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                    {errors.title && touched.title && errors.title}{" "}
                  </Form.Item>
                  <Form.Item label="Desacription">
                    <Input
                      type="text"
                      name="desacription"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desacription}
                    />
                    {errors.desacription &&
                      touched.desacription &&
                      errors.desacription}{" "}
                  </Form.Item>
                  <Form.Item label="Image">
                    <Input
                      type="text"
                      name="image"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                    />
                    {errors.image && touched.image && errors.image}
                  </Form.Item>
                  <Form.Item label="Tags">
                    <Input
                      type="text"
                      name="tags"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tags}
                    />
                    {errors.tags && touched.tags && errors.tags}
                  </Form.Item>
                  <Form.Item label="Category">
                    <Input
                      type="text"
                      name="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                    />
                    {errors.category && touched.category && errors.category}
                  </Form.Item>
                  <Form.Item label="Size">
                    <Input
                      type="text"
                      name="size"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.size}
                    />
                    {errors.size && touched.size && errors.size}
                  </Form.Item>
                  <button type="submit">Submit</button>
                </form>
              );
            }}
          </Formik>
        </>
      );
    } else {
      return <Typography.Title>Invalid Product.</Typography.Title>;
    }
  } else {
    return <Typography.Title>Invalid Mode.</Typography.Title>;
  }
};

export default ProductForm;
