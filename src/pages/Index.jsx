import { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Input, Select, Button, Box, Text, Heading } from "@chakra-ui/react";

const Index = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    address: "",
    areaSize: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit} width="100%">
        <Heading mb={6}>Cleaning Service Reservation</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="serviceType">Service Type</FormLabel>
          <Select id="serviceType" name="serviceType" placeholder="Select service type" onChange={handleChange}>
            <option>Move-In/Move-Out Cleaning</option>
            <option>Office Cleaning</option>
            <option>Commercial Cleaning</option>
            <option>Specialized Cleaning</option>
            <option>Appliance Cleaning</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input id="date" name="date" type="date" onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input id="address" name="address" type="text" onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="areaSize">Area Size (sq ft)</FormLabel>
          <Input id="areaSize" name="areaSize" type="number" onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Submit
        </Button>
      </VStack>

      {submittedData && (
        <Box mt={10} p={5} shadow="md" borderWidth="1px">
          <Heading size="md" mb={2}>
            Review Reservation
          </Heading>
          <Text>
            <strong>Service Type:</strong> {submittedData.serviceType}
          </Text>
          <Text>
            <strong>Date:</strong> {submittedData.date}
          </Text>
          <Text>
            <strong>Address:</strong> {submittedData.address}
          </Text>
          <Text>
            <strong>Area Size:</strong> {submittedData.areaSize} sq ft
          </Text>
          <Button mt={4} colorScheme="green">
            Submit Quote
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Index;
