import axios, { AxiosInstance } from "axios";

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:4001";
const MESSAGE_SERVICE_URL =
  process.env.MESSAGE_SERVICE_URL || "http://localhost:4002";

//function responsible for communicating with microservices
export const createServiceProxy = () => {
  const userService: AxiosInstance = axios.create({
    baseURL: USER_SERVICE_URL,
  });
  const messageService: AxiosInstance = axios.create({
    baseURL: MESSAGE_SERVICE_URL,
  });

  return {
    userService: {
      loginUser: async (username: string) => {
        const response = await userService.post("/users/login", { username });
        return response.data;
      },
    },

    messageService: {
      getMessages: async () => {
        const response = await messageService.get("/messages");
        return response.data;
      },
      sendMessage: async (messageData: {
        username: string;
        content: string;
      }) => {
        const response = await messageService.post("/messages", messageData);
        return response.data;
      },
    },
  };
};
