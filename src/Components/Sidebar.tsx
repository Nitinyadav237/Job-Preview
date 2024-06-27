import {
  Delete,
  Edit,
  Applicants,
  Matches,
  Message,
  Views,
} from "../../public/svg";

Delete;

const Sidebar = () => {
  return (
    <div className="w-[360px] h-[361px] gap-6 p-2 mt-[45px] rounded-md border-2 ml-4">
      <div className="h-[46px] w-full gap-4 flex justify-center items-center ">
        <button
          className="w-[172px] h-[46px] 
              px-3 py-6 gap-2
              bg-[#FEF4F2]  border-2 border-[#DC4A2D] rounded-md flex justify-center items-center
              font-sans font-medium text-[16px] leading-5 text-[#DC4A2D]
              "
        >
          <Delete />
          Delete job
        </button>
        <button
          className="w-[172px] h-[46px] 
              px-3 py-6 gap-2 
              bg-[#DC4A2D] border-[#FED3CA] border-2 rounded-md flex justify-center items-center
              font-sans font-medium text-[16px] leading-5 text-[#FFFFFF]
              "
        >
          <Edit />
          Edit job
        </button>
      </div>

      <div className="w-full h-[291px] rounded-sm  mt-8">
        <div className="w-[336px] h-[42px]  flex items-center justify-between ">
          <div className="w-[135px] h-[42px] p-2 gap-2 flex items-center font-sans font-medium text-[16px] leading-5 text-[#4F4F4F]">
            <Applicants />
            Applicants
          </div>
          <span className="w-[57px] h-[39px] gap-2 px-1 py-2 font-sans font-semibold text-[20px] leading-7 text-[#3D3D3D] ">
            400
          </span>
        </div>

        <hr className="w-[336px]  mt-2 bg-[#E7E7E7]" />

        <div className="w-[336px] h-[42px] mt-4  flex items-center justify-between ">
          <div className="w-[135px] h-[42px] p-2 gap-2 flex items-center font-sans font-medium text-[16px] leading-5 text-[#4F4F4F]">
            <Matches />
            Matches
          </div>
          <span className="w-[57px] h-[39px] gap-2 px-1 py-2 font-sans font-semibold text-[20px] leading-7 text-[#3D3D3D] ">
            100
          </span>
        </div>
        <hr className="w-[336px]  mt-2 bg-[#E7E7E7]" />

        <div className="w-[336px] h-[42px] mt-4  flex items-center justify-between ">
          <div className="w-[135px] h-[42px] p-2 gap-2 flex items-center font-sans font-medium text-[16px] leading-5 text-[#4F4F4F]">
            <Message />
            Messages
          </div>
          <span className="w-[57px] h-[39px] gap-2 px-1 py-2 font-sans font-semibold text-[20px] leading-7 text-[#3D3D3D] ">
            147
          </span>
        </div>
        <hr className="w-[336px]  mt-2 bg-[#E7E7E7]" />

        <div className="w-[336px] h-[42px] mt-4 flex items-center justify-between ">
          <div className="w-[135px] h-[42px] p-2 gap-2 flex items-center font-sans font-medium text-[16px] leading-5 text-[#4F4F4F]">
            <Views />
            Views
          </div>
          <span className="w-[57px] h-[39px] gap-2 px-1 py-2 font-sans font-semibold text-[20px] leading-7 text-[#3D3D3D] ">
            800
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
