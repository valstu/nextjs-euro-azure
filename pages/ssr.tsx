import { Text } from "@mantine/core";
import type { GetStaticProps } from "next";

const Incremental = (props: any) => {
  return (
    <>
      <Text>
        This timestamp should update on every request since it is server side
        rendered
      </Text>
      <Text>Time is {props.time}</Text>
    </>
  );
};

export const getServerSideProps: GetStaticProps = async (context) => {
  return {
    props: {
      time: `${new Date().toDateString()} - ${new Date().toTimeString()}`,
    },
  };
};

export default Incremental;
