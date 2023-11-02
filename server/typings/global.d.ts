declare global {
    interface BigInt {
      toJSON: () => string;
    }
  }
  
export default global;