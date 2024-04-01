import { Box, Center, Text } from "@chakra-ui/react";
import useSWR from "swr";
import myAxiosFetcher from "../services/fetcher";
import fetcher from "../services/fetcher";
import Dogovor from "./Dogovor";

export default function Main() {
  //const url = `https://Sr/upp/hs/logistics/v1/getnumber?number=02944-000001`
  const url = "https://mocki.io/v1/c3148520-e2f3-47b5-88fe-c751ab646388"; // чисто для теста

  const { data, error, isLoading } = useSWR<MassivDogovorovType>(url, fetcher);
  // в папке types прописал типы ответа от 1С сервера, назвал это как  MassivDogovorovType

  if (error) return <Text>Error: {error}</Text>;
  if (isLoading || !data) return <Text>Loading...</Text>;
  return (
    <Box h="100vh" w="100%" bgColor="gray.800">
      <Center w="100%" p="10">
        <Box p="5" borderRadius="lg" minW="400" minH="100" bgColor="gray.200">
          <Text fontSize="2xl">Данные:</Text>
          {data.map((договор) => (
            <Dogovor договор={договор} />
          ))}
        </Box>
      </Center>
    </Box>
  );
}
