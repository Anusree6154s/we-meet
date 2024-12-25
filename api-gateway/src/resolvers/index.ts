import messageResolvers from "./messageResolvers";
import userResolvers from "./userResolvers";

// combining resolvers
const resolvers = {
  ...messageResolvers,
  ...userResolvers,
};

export default resolvers