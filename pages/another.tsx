import { Title, Text } from "@mantine/core";
import Image from "next/future/image";

import camerapic from "../public/camera.jpeg";

const Another = () => {
  return (
    <>
      <Title order={1}>Hello world</Title>
      <div style={{ overflow: "hidden" }}>
        <Text>Here is another image</Text>
        <div
          style={{
            width: "100%",
            height: "400px",
            position: "relative",
          }}
        >
          <Image
            alt="hello"
            src={`https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80`}
            sizes="(min-width: 75em) 33vw,
            (min-width: 48em) 50vw,
            100vw"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <Text>And another</Text>
        <div style={{ width: "200px", position: "relative", height: 200 }}>
          <Image
            alt="hello2"
            sizes="100vw"
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
};

export default Another;
