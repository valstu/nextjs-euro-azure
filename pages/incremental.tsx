import { Text } from "@mantine/core";
import type { GetStaticProps } from "next";

const Incremental = (props: any) => {
  return (
    <>
      <Text>
        This timestamp should update on every 10 seconds it is using incremental
        static regeneration
      </Text>
      <Text>Time is {props.time}</Text>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      time: `${new Date().toDateString()} - ${new Date().toTimeString()}`,
    },
    revalidate: 10,
  };
};

export default Incremental;
