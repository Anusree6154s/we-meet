import { createServiceProxy } from "../utils/serviceProxy";

const serviceProxy = createServiceProxy();

const messageResolvers = {
  Query: {
    getMessages: async () => {
      return serviceProxy.messageService.getMessages();
    },
  },
  Mutation: {
    sendMessage: async (
      _: unknown,
      args: { username: string; content: string }
    ) => {
      return serviceProxy.messageService.sendMessage(args);
    },
  },
};

export default messageResolvers;
