import {
  Jobs,
  Messages,
  Payments,
  Bell,
  ChevronDown,
  Logo,
} from "../../public/svg";
import { useState } from "react";

interface TabButtonProps {
  label: string;
  icon: React.ComponentType<{}>;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  icon: Icon,
  isActive,
  onClick,
}) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
      isActive ? "bg-[#DC4A2D] text-white" : "hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    <Icon />
    <span className="font-medium text-lg">{label}</span>
  </button>
);

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Jobs");

  return (
    <nav className="w-full h-[80px] bg-white">
      <div className="h-[61px] mt-[10px] p-4 flex items-center justify-between">
        <div className="w-[100px] h-[61px] bg-[#E7E7E7]">
          <Logo />
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          {["Jobs", "Messages", "Payments"].map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              icon={
                tab === "Jobs" ? Jobs : tab === "Messages" ? Messages : Payments
              }
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="mr-2">
            <Bell />
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <img src="/Images1.png" alt="Profile" />
          </div>
          <ChevronDown />
        </div>
      </div>
      <hr className="mt-2 h-[2px] bg-[#E7E7E7]" />
    </nav>
  );
};

export default Navbar;
