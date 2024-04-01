import { Box, HStack, Text } from "@chakra-ui/react";

const Dogovor = ({ договор }: { договор: ТипОдногоДоговора }) => {
  const { Index, Дата, Номер } = договор;
  return (
    <Box w="100%" borderRadius="md" p="3">
      <HStack fontSize="sm">
        <Text color="orange.500" fontWeight="bold">
          {Index}
        </Text>
        <Text>{"#" + Номер}</Text>
      </HStack>

      <Text fontSize="lg">{Дата}</Text>
    </Box>
  );
};

export default Dogovor;
