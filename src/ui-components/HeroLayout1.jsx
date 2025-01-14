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
} from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { images, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eyebrow: {},
        Heading: {},
        Body: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        image: {},
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        Eyebrow: { color: "rgba(188,236,245,1)", children: "Full-stack" },
        Heading: { color: "rgba(255,255,255,1)" },
        Body: { color: "rgba(255,255,255,1)" },
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: { backgroundColor: "rgba(13,26,38,1)" },
        image: { width: "unset", alignSelf: "stretch" },
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(64,170,191,1)"
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
              {...getOverrideProps(overrides, "Eyebrow")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
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
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
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
              {...getOverrideProps(overrides, "Body")}
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
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Right")}
      >
        <Image
          width="720px"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          src="https://realmedia-stockstorage51b97-staging.s3.eu-central-1.amazonaws.com/public/Alexandru-Grigore-2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAZDZTCBMAQ522WV7M%2F20250109%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250109T153101Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQD6d5QA30SF%2B%2FvMWiwzLJ270F42jyFGTv%2BFCevaS2a92AIhAIvUVzFkSABJs1MZJz7J45muYRGAfGoS9QszM6nM82R2Kt8ECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjI2NjM1NDQyOTQ1IgzRar%2FCitEPC643TxcqswTCQZqlxpTULQvnrrnJ2KHy%2B%2BvEwSKY3icmtzCc5MkCDBkyAFio3IvYDXRNz1Y%2FkBFRw%2FomyGq6uXjVK0KZhc9uNaYY5jBaVYfZ8pEV7UY5tyKdcBS%2BLfCBFxsImtvF7TQ0u6COJxHW2ZDhtZpb5m%2FFtqacQYKfX42XTWPgK2MC61BAYY0rRw06fsaFewFcDcnGUntaFs2WNEACMOXIC3dMS92UQ7Ej1M21yzWx2hAfZVBca5SQ1R1xyO7%2BaqZJ29Hwlsxkim4gSniblwksjE6mUsAZljp5r5rFUaBZILWdJ91Pl9vUgnnYfgS1zAb6IqcS1tHu6qkRV3Q6H887JPty0Szru0Z%2BBxhGRhyskj72Mqwxwo8PKvfI5N2pkXdPwXQmeelnSFeHIJZv5OjDoIhpf%2BIrnA0NK94akAxwwmGsjPuFHPcCjQcjAJcFT8YV1grr2E9EnbH9K8pdsnsBFBCQolEIsA4Ubv1CP65giOz9tdO9lG2w5qJic7SLIpl5O7R1l1KzayTVwNRKChVq8WJAUwyD%2B5AJh386aUEDfYISV9Wx%2FJ%2B2An52OXFrIR%2FNft8OzXRMA9pFSwQmrGpeKEDHOxvbzws4dvXvA2uHqH%2BTnOxXC9%2BR2wtahOiIWh02dYrDBnEjxkCroULQiqKet9%2FvAHk8vlrbmTC5pYadFTmZIHMYfhVjkOGht2IDYMJL9s8rfqCdLBbk0pdy4dR6N6vZAAJ7qZ6zLlY%2Fu8hjXrNBwE9XTDC3zv%2B7BjqEApdonh50FBxure9Z7y5vT0xoKM78EXvE1tGww%2BbdvFBYcFTj3cse7P0kBm78naPPncgaP8gZQ1qbbGB1xLPiy5S728%2B5AG34pLwNj0j%2BQzJ9BCs9l58p9NoAuZUi3AMxtaDejYWbK4euh5VhbCDaaDhshpYr8uAxOx05NLyY833KA56ql8UuekplCmFzGy%2Bq%2FBcGwCUFomnaZR0FE1koWbsK%2Fh7WPIcP4HnNQB4SaYhvmiiBs7QPKTdd7WOYCGlFubvhq0dMAeJF5nPIk6FQ3OGatk6kKQ1wbRTfSG4rM1VCxXdMTrmsMyrc%2F9Fon%2F75ywc84dNowE9VEyfF8oaT2tNxy7VC&X-Amz-Signature=74e80d63758226960421351aef4f85a6245c4ffc740dfdf1b0c0f5fe67284311&X-Amz-SignedHeaders=host"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
