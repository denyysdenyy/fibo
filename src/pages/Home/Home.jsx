import React from "react";
import Latest from "./Latest/Latest";
import Catalog from "./Catalog/Catalog";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const Home = () => {
  return (
    <>
      <Latest />
      <QueryClientProvider client={queryClient}>
        <Catalog />
      </QueryClientProvider>
    </>
  );
};

export default Home;
