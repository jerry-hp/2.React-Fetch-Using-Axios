import { Box, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface TdataCard {
  title: string;
  Image: string;
  desc: string;
}

export default function Detail() {
  const [dataCard, setDataCard] = useState<TdataCard>({ title: "", Image: "", desc: "" });
  const { id } = useParams<string>();

  useEffect(() => {
    axios.get(`https://api.npoint.io/15a3da86315e932c0d44/${id}`).then((res) => {
      setDataCard(res.data);
    });
  }, []);

  return (
    <div>
      <Box
        bg="#dddddd"
        maxW="992px"
        m="0 auto"
        boxSizing="border-box"
        padding={"20px"}
        display={"grid"}
        gridTemplateAreas="
          'heading '
          'image'
          'paragraft'
        "
        gridTemplateColumns="1fr"
        gridTemplateRows="0.02fr 0.2fr 1fr"
        h="fit-content"
      >
        <Heading gridArea="heading" textAlign={"center"}>
          {dataCard.title}
        </Heading>
        <Image gridArea="image" w="70%" h={"400px"} m="0 auto" borderRadius="20px" src={dataCard.Image} />
        <Box gridArea="paragraft" boxSizing="border-box" padding="20px" borderRadius="0 20px 20px 0">
          <Text textAlign={"justify"}>
            {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc}{" "}
            {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc} {dataCard.desc}
          </Text>
        </Box>
      </Box>
    </div>
  );
}
