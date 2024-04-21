import React from "react";
import { Box, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, useColorModeValue, Container, AspectRatio } from "@chakra-ui/react";

import { FaChartLine, FaUserFriends, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Container maxW="container.xl" py={5}>
      <Heading as="h1" size="xl" mb={6}>
        Analytics Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
        <StatsCard icon={<FaChartLine size="3em" />} title="Total Visitors" stat="34,254" progress={{ value: 70, label: "Since last month" }} />
        <StatsCard icon={<FaUserFriends size="3em" />} title="New Users" stat="1,200" progress={{ value: 30, label: "Since last month" }} />
        <StatsCard icon={<FaShoppingCart size="3em" />} title="Total Sales" stat="938" progress={{ value: 80, label: "Since last month" }} />
        <StatsCard icon={<FaDollarSign size="3em" />} title="Total Revenue" stat="$48,390" progress={{ value: 45, label: "Since last month" }} />
      </SimpleGrid>
      <Heading as="h2" size="lg" my={6}>
        Growth in Days
      </Heading>
      <Flex direction="column" mt={10}>
        <Heading as="h3" size="md">
          Growth Over Days
        </Heading>
        <SimpleGrid columns={7} spacing={5} mt={5}>
          {["65", "59", "80", "81", "56", "55", "40"].map((value, index) => (
            <Box key={`day-${index}`} bg="teal.500" height={`${value}px`} borderRadius="md" />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

const StatsCard = ({ title, stat, icon, progress }) => {
  const { value, label } = progress;
  return (
    <Stat px={{ base: 4, md: 8 }} py={"5"} shadow={"xl"} border={"1px solid"} borderColor={useColorModeValue("gray.800", "gray.500")} rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
          <StatHelpText>
            <StatArrow type={value > 50 ? "increase" : "decrease"} />
            {label}
          </StatHelpText>
        </Box>
        <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
      <Box>
        <Progress size="sm" colorScheme={value > 50 ? "green" : "red"} value={value} />
      </Box>
    </Stat>
  );
};

export default Index;
