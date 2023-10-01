import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

interface TdataCard {
  title: string;
  Image: string;
  desc: string;
  button1: string;
  button2?: string;
  new: string;
  favourite: string;
  featured: string;
}

export default function Detail() {
  const [dataCard, setDataCard] = useState<TdataCard>({ title: "", Image: "", desc: "", button1: "", button2: "", new: "", favourite: "", featured: "" });
  const { id } = useParams<string>();

  useEffect(() => {
    axios.get(`https://api.npoint.io/3e72c110229ae65ddcc7/${id}`).then((res) => {
      setDataCard(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar backgroundImage="radial-gradient(circle, #ff0000, #cd5800, #957200, #5b7d00, #008000)" />
      <Box
        maxW="800px"
        bg="gray"
        m="2rem auto"
        display={"grid"}
        boxSizing="border-box"
        padding="20px"
        borderRadius="20px"
        boxShadow="0 0 0 2px  orangeRed,0 0 0 4px yellow,0 0 0 7px green"
        gridTemplateAreas="'heading''image''text''btn'"
        gridTemplateColumns="1fr"
        gridTemplateRows="max-content 350px max-content max-content"
        gridRowGap="5px"
      >
        <Heading color="#dddddd" textAlign={"center"} gridArea="heading">
          {dataCard.title}
        </Heading>
        <Image h="100%" w={"100%"} borderRadius="20px" gridArea="image" src={dataCard.Image}></Image>
        <Text color="#dddddd" gridArea={"text"} textAlign={"justify"}>
          {dataCard.new && (
            <Button ml="auto" bg="red" color="white">
              {dataCard.new}
            </Button>
          )}
          {dataCard.featured && (
            <Button ml="auto" bg="#f78c0a" color="white">
              {dataCard.featured}
            </Button>
          )}
          {dataCard.favourite && (
            <Button ml="auto" bg="green" color="white">
              {dataCard.favourite}
            </Button>
          )}{" "}
          {dataCard.desc}
          {dataCard.desc}
          {dataCard.desc}
          {dataCard.desc}
          {dataCard.desc}
          {dataCard.desc}
        </Text>
        <Box gridArea={"btn"} display={"flex"} justifyContent={"left"}>
          <Button variant="unstyled" color={"green"} p="0">
            #{dataCard.button1}
          </Button>
          {dataCard.button2 && (
            <Button variant="unstyled" color={"red"} p="0 0 0 5px">
              #{dataCard.button2}
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
}
