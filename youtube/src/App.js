import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import List from "./pages/List";
import Detail from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/videos/:keyword",
      element: <List />,
    },
    {
      path: "/videos/watch/:videoId",
      element: <Detail />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initailIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
