import React from "react";
import { Box, Button, Input, FormLabel } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default function SignIn() {
  return (
    <Box
      w="50%"
      m="0 auto"
      bg="#39BEF8"
      color="#fff"
      px="100px"
      py="40px"
      mt="10px"
      borderRadius="20px"
      boxShadow="0px 0px 10px #000"
    >
      <Formik
        initialValues={{
          FullName: "",
          MobNo: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          FullName: Yup.string().max(15, "Too Long").required("Required"),
          MobNo: Yup.string()
            .max(10, "Invalid Number")
            .min(10, "Invalid Number")
            .required("Required"),
          email: Yup.string().email("Enter Valid Email").required("Required"),
          password: Yup.string()
            .min(8, "Minimum 8 Characters Required")
            .max(15, "Maximum 15 Characters Required")
            .required("Required"),
          conPassword: Yup.string(),
        })}
      >
        {({ errors, touched }: any) => (
          <Form>
            <Box textAlign="center" as="h1" fontSize="5xl">
              Sign In
            </Box>
            <Box py="10px">
              <FormLabel htmlFor="FullName" fontSize="20px" fontWeight="600">
                Full Name
              </FormLabel>
              <Field
                as={Input}
                name="FullName"
                id="FullName"
                bg="#fff"
                color="#333"
                type="text"
              />
              {errors.FullName && touched.FullName ? (
                <Box as="p" color="red">
                  {errors.FullName}
                </Box>
              ) : null}
            </Box>
            <Box py="10px">
              <FormLabel htmlFor="MobNo" fontSize="20px" fontWeight="600">
                Mobile Number
              </FormLabel>
              <Field
                as={Input}
                name="MobNo"
                id="MobNo"
                bg="#fff"
                color="#333"
                type="number"
              />
              {errors.MobNo && touched.MobNo ? (
                <Box as="p" color="red">
                  {errors.MobNo}
                </Box>
              ) : null}
            </Box>
            <Box py="10px">
              <FormLabel htmlFor="email" fontSize="20px" fontWeight="600">
                Email
              </FormLabel>
              <Field
                as={Input}
                name="email"
                id="email"
                bg="#fff"
                color="#333"
                type="email"
              />
              {errors.email && touched.email ? (
                <Box as="p" color="red">
                  {errors.email}
                </Box>
              ) : null}
            </Box>
            <Box py="10px">
              <FormLabel htmlFor="password" fontSize="20px" fontWeight="600">
                Create Password
              </FormLabel>
              <Field
                as={Input}
                name="password"
                id="password"
                bg="#fff"
                color="#333"
                type="password"
              />
              {errors.password && touched.password ? (
                <Box as="p" color="red">
                  {errors.password}
                </Box>
              ) : null}
            </Box>
            <Box textAlign="center" mt="20px">
              <Button bg="#FFC803" w="60%" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
