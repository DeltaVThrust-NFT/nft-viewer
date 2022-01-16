export const deriveNetworkName = () => {
  if (!window?.ethereum?.networkVersion) {
    throw new Error("No network version found");
  }

  switch (window.ethereum.networkVersion) {
    case "1":
      return "mainnet";
    case "2":
      return "morden";
    case "3":
      return "ropsten";
    case "4":
      return "rinkeby";
    default:
      throw new Error(
        `Unknown network version: ${window.ethereum.networkVersion}`
      );
  }
};
