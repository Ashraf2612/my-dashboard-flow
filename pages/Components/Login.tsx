import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Router from "next/router";

export default function Login() {
  return (
    <Box>
      <Button onClick={() => Router.push("/Components/SignIn")}>Sign In</Button>
    </Box>
  );
}
