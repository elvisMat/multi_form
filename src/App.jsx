// import { Container, Text, Box, Input, Flex, Stack, Button } from '@chakra-ui/react'
import React, { useReducer, useState } from 'react'
import { Tabs, Text, TabList, TabPanels, Tab, TabPanel, Box, Flex, Stack, Input, FormLabel, Button } from '@chakra-ui/react'
function App() {

  const [state, dispatch] = useReducer((state, action) => ({
    ...state,
    ...action
  }), {
    first: "",
    last: "",
    dob: "",
    s_first: "",
    s_last: "",
    s_age: "",
    date_of_marriage: ""

  });
  const [index, setIndex] = useState(0)
  return (
    <Box bg='white'>
      <Box px={2} bg='white' height={'64px'} boxShadow='md'>
        <Flex height={'100%'} alignItems={'center'} justifyContent={"space-between"}>
          <p><strong>Multi Step form</strong></p>
          <Box>

          </Box>
        </Flex>
      </Box>
      <Box mt={'75px'} px="20px">
        <Tabs index={index} >
          <TabList>
            <Tab disabled>Step 1</Tab>
            <Tab disabled>Step 2</Tab>
            <Tab>Step 3</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text as={'h3'} fontSize={'22px'} fontWeight='bold'>Personal Details</Text>
              <Stack mt={"20px"} >
                <FormLabel>Name</FormLabel>
                <Input onChange={(e) => dispatch({ first: e.target.value })} value={state.first} type={'text'} />
                <FormLabel>Surname</FormLabel>
                <Input onChange={(e) => dispatch({ last: e.target.value })} value={state.last} type={'text'} />

                <FormLabel>DOB</FormLabel>
                <Input onChange={(e) => dispatch({ dob: e.target.value.toString() })} value={state.dob} type={'date'} />
                <Box>
                  <Button onClick={() => setIndex(1)}>Next</Button>
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Text as={'h3'} fontSize={'22px'} fontWeight='bold'>Spouce Details</Text>
              <Stack mt={"20px"} >
                <FormLabel>Name</FormLabel>
                <Input onChange={(e) => dispatch({ s_first: e.target.value })} value={state.s_first} type={'text'} />
                <FormLabel>Surname</FormLabel>
                <Input onChange={(e) => dispatch({ s_last: e.target.value })} value={state.s_last} type={'text'} />

                <FormLabel>Date of marriage</FormLabel>
                <Input onChange={(e) => dispatch({ date_of_marriage: e.target.value.toString() })} value={state.date_of_marriage} type={'date'} />

                <FormLabel>Age</FormLabel>
                <Input onChange={(e) => dispatch({ s_age: e.target.value.toString() })} value={state.s_age} type={'number'} />
                <Box>
                  <Stack direction={'row'}>
                    <Button
                      onClick={() => setIndex(0)}
                      display={'inline'}>Back</Button>
                    <Button
                      onClick={() => setIndex(2)}
                      display={'inline'}>Next</Button>
                  </Stack>
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Text as={'h3'} fontSize={'22px'} fontWeight='bold'>Confirm</Text>
              <Text as={'h3'} fontSize={'20px'}>Your Details</Text>
              <Text >Name: {state.first}</Text>
              <Text >Surname: {state.last}</Text>
              <Text >Date of birth: {state.dob}</Text>
              <Box height={'20px'} />
              <Text as={'h3'} fontSize={'20px'}>Spouce Details</Text>
              <Text >Name: {state.s_first}</Text>
              <Text >Surname: {state.s_last}</Text>
              <Text >Spounces Age: {state.s_age}</Text>
              <Text >Date of marriage: {state.date_of_marriage}</Text>

              <Box height={'20px'} />
              <Stack direction='row'>
                <Button
                  onClick={() => setIndex(1)}
                  display={'inline'}>Back</Button>
                <Button
                  display={'inline'}>Done</Button>
              </Stack>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Box >
  )
}

export default App
