// Imports
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <div className="bg-primary text-white p-4 flex items-center lg:order-2">
      <ConnectWallet className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" />
    </div>
  );
};

export default Header;
