/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout2(props) {
  const { images, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Full stack": {},
        "Build full-stack web and mobile apps in hours. Easy to start, easy to scale":
          {},
        "AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed.":
          {},
        "Main Body": {},
        Button: {},
        "Type Lock Up": {},
        HeroLayout2: {},
      },
      variantValues: { colorMode: "Default" },
    },
    {
      overrides: {
        "Full stack": { color: "rgba(249,184,249,1)" },
        "Build full-stack web and mobile apps in hours. Easy to start, easy to scale":
          { fontSize: "24px", color: "rgba(233,249,252,1)" },
        "AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed.":
          {
            fontSize: "16px",
            color: "rgba(188,236,245,1)",
            letterSpacing: "0.01px",
          },
        "Main Body": { height: "unset" },
        Button: {},
        "Type Lock Up": { height: "unset", shrink: "1", grow: "1", basis: "0" },
        HeroLayout2: {
          height: "548px",
          justifyContent: "center",
          backgroundColor: "rgba(0,64,77,1)",
        },
      },
      variantValues: { colorMode: "dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({ type: "url", url: "/contact" });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="800px"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout2")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="228px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(4,125,149,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Full stack"
          {...getOverrideProps(overrides, "Full stack")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="148px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Build full-stack web and mobile apps in hours. Easy to start, easy to scale"
            {...getOverrideProps(
              overrides,
              "Build full-stack web and mobile apps in hours. Easy to start, easy to scale"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."
            {...getOverrideProps(
              overrides,
              "AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."
            )}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Get started"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
