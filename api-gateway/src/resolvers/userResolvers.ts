import { createServiceProxy } from "../utils/serviceProxy";

const serviceProxy = createServiceProxy();

const userResolvers = {
  Mutation: {
    loginUser: async (_: unknown, args: { username: string }) => {
      return serviceProxy.userService.loginUser(args.username);
    },
  },
};

export default userResolvers