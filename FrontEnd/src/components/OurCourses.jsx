import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import bgimg from "../Data/bgimg.jpg";
import basics from "../Data/Basics.png";
import fundamenta from "../Data/funda.png";
import technical from "../Data/technical.png";
import derivative from "../Data/derivative.png";
import { Carousel } from "antd";
import Lottie from "lottie-react";
import Reading from '../Data/Reading.json'
import ManMoving from '../Data/ManMoving.json'
import Girl from '../Data/Girl.json'
import Derivative from '../Data/Derivative.json'



const contentStyle = {
    paddingTop:20,
    fontSize:16,
    fontFamily:"roboto",
    color:'#171945',
    textAlign: "center",
    background: "transparent",
  };


const OurCourses = () => {
  return (
    <>
      <Box bgImage={bgimg} fontFamily={"roboto"} color={'#0a2472'} py={8}>

        {/******************************* Heading *************************************/}

        <Box width={"50%"} margin={"auto"} textAlign={'center'} pb={2} color={'#171945'}>
          <Heading fontFamily={'roboto'} fontWeight={500} fontSize={{base:24, sm:28, md:32, lg:32}}>Our Courses</Heading>
        </Box>


        {/* ***************** Course carousel for Mobile *************************** */}

        <Box display={{base:'block', sm:'block', md:'block', lg:'none'}}>
        
        <Carousel 
        autoplay 
        loop 
        autoplaySpeed={3500}
        >
          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'70%'} >
              {/* <Image margin={'auto'} src={basics} /> */}
              <Lottie animationData={Reading}/>
            </Box>

            <Stack 
            style={contentStyle}
            gap={4} 
            width={'90%'} 
            margin={'auto'} 
            textAlign={'center'}
            >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Basics Of Stock Market</Heading>
              <Text justifyContent={'center'}>
                Grasp the fundamentals, from understanding stocks and stock
                exchanges to decoding market terminology and setting clear
                investment goals
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'68%'} >
              {/* <Image margin={'auto'} src={fundamenta} /> */}
              <Lottie animationData={ManMoving}/>
            </Box>

            <Stack style={contentStyle} gap={4} width={'90%'} margin={'auto'} textAlign={'center'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Fundamental Analysis</Heading>
              <Text justifyContent={'center'}>
              Discover the essentials of Fundamental Analysis in stock exchange training – demystifying stock market insights. Gain the skills to evaluate companies and make savvy investment choices with confidence.
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Financial Statements</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Valuation Techniques</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Reports</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Research</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'75%'} >
              {/* <Image margin={'auto'} src={technical} /> */}
              <Lottie animationData={Girl}/>
            </Box>

            <Stack style={contentStyle} gap={4} width={'90%'} margin={'auto'} textAlign={'center'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Technical Analysis</Heading>
              <Text justifyContent={'center'}>
              Explore the world of Technical Analysis through our courses regarding stock market, where we break down complex market trends and charts into simple, actionable insights. Acquire the skills to make informed trading decisions confidently.
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Chart Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Trading Strategies</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Indicators and Oscillators</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Backtesting</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'80%'} >
              {/* <Image margin={'auto'} src={derivative} /> */}
              <Lottie animationData={Derivative}/>
            </Box>

            <Stack style={contentStyle} gap={4} width={'90%'} margin={'auto'} textAlign={'center'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Derivatives</Heading>
              <Text justifyContent={'center'}>
              Begin your exploration of Derivatives with our online trading courses, where we simplify complex financial instruments. Develop expertise in risk management and trading strategies to gain a thorough grasp of the market.
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Chart Patterns</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Options Strategies</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Live Trading</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Hedging Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          </Carousel>
        
        </Box>


        {/* *********************** Course without carousel for Laptop *************************** */}

        <Stack 
        display={{base:'none', sm:'none', md:'none', lg:'block'}} 
        width={"84%"}
        margin={"auto"} 
        gap={0}
        >
        
          <SimpleGrid  gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box width={'64%'} >
              {/* <Image src={basics} /> */}
              <Lottie animationData={Reading}/>
            </Box>

            <Stack gap={8} width={'80%'} margin={'auto'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Basics Of Stock Market</Heading>
              <Text >
                Grasp the fundamentals, from understanding stocks and stock
                exchanges to decoding market terminology and setting clear
                investment goals
              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} justifyContent={'space-around'} margin={'auto'}>

            <Stack width={'80%'} gap={8} >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Fundamental Analysis</Heading>
              <Text width={'80%'}>
              Discover the essentials of Fundamental Analysis in stock exchange training – demystifying stock market insights. Gain the skills to evaluate companies and make savvy investment choices with confidence.

              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3}>
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Financial Statements</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Valuation Techniques</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Reports</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Research</Text>
                </Flex>
              </SimpleGrid>
            </Stack>

            <Box width={'90%'} >
              {/* <Image width={'90%'} src={fundamenta} /> */}
              <Lottie animationData={ManMoving}/>
            </Box>
          </SimpleGrid>

          <SimpleGrid gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box width={'90%'} >
              {/* <Image src={technical} /> */}
              <Lottie animationData={Girl}/>
            </Box>

            <Stack gap={8} width={'80%'} >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Technical Analysis</Heading>
              <Text width={'80%'}>
              Explore the world of Technical Analysis through our courses regarding stock market, where we break down complex market trends and charts into simple, actionable insights. Acquire the skills to make informed trading decisions confidently.

              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3}>
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Chart Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Trading Strategies</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Indicators and Oscillators</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Backtesting</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} justifyContent={'space-around'} margin={'auto'}>

            <Stack gap={8} width={'80%'} >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Derivatives</Heading>
              <Text width={'80%'}>
              Begin your exploration of Derivatives with our online trading courses, where we simplify complex financial instruments. Develop expertise in risk management and trading strategies to gain a thorough grasp of the market.
              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3}>
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Chart Patterns</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Options Strategies</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Live Trading</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Hedging Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>

            <Box width={'90%'} >
              {/* <Image src={derivative} /> */}
              <Lottie animationData={Derivative}/>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
};

export default OurCourses;
