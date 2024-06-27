// @ts-ignore
import { Location, DB } from "../../public/svg";
import { useState } from "react";

const Hero = () => {
  const [activeButton, setActiveButton] = useState("Job Preview");
  return (
    <>
      {/*---------------------- Job Preview -----------------------*/}
      <div className="w-full h-[47px] ">
        <div className="h-[30px] ml-[100px] gap-[72px] flex items-center">
          <div className="flex flex-col items-center">
            <button
              className={`w-[117px] h-[27px] font-sans border-none font-semibold text-[20px] leading-6 ${
                activeButton === "Job Preview"
                  ? "text-[#DC4A2D]"
                  : "text-[#888888]"
              }`}
              onClick={() => setActiveButton("Job Preview")}
            >
              Job Preview
            </button>
            {activeButton === "Job Preview" && (
              <hr className="w-[100px] border-t-2 border-red-500 mt-1" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`w-[101px] h-[27px] font-sans border-none font-medium text-[20px] leading-7 ${
                activeButton === "Applicants"
                  ? "text-[#DC4A2D]"
                  : "text-[#888888]"
              }`}
              onClick={() => setActiveButton("Applicants")}
            >
              Applicants
            </button>
            {activeButton === "Applicants" && (
              <hr className="w-[75px] border-t-2 border-red-500" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`w-[101px] h-[27px] font-sans border-none font-medium text-[20px] leading-7 ${
                activeButton === "Match" ? "text-[#DC4A2D]" : "text-[#888888]"
              }`}
              onClick={() => setActiveButton("Match")}
            >
              Match
            </button>
            {activeButton === "Match" && (
              <hr className="w-[55px] border-t-2 border-red-500" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`w-[101px] h-[27px] font-sans border-none font-medium text-[20px] leading-7 ${
                activeButton === "Message" ? "text-[#DC4A2D]" : "text-[#888888]"
              }`}
              onClick={() => setActiveButton("Message")}
            >
              Message
            </button>
            {activeButton === "Message" && (
              <hr className="w-[75px] border-t-2 border-red-500" />
            )}
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-[#E7E7E7]" />

      <div className="bg-white p-1">
        {/*---------------------- senior designer -----------------------*/}
        <div className="ml-[100px] mt-[30px] gap-[24px] h-[98px] w-[623px] ">
          <div className="h-[47px] gap-[12px] flex items-center justify-center">
            <h1 className="font-sans font-semibold text-[35px] text-[#3D3D3D] leading-[47px] w-[409px] ml-2">
              Senior Product Designer
            </h1>
            <h4 className="font-sans font-medium h-[19px] leading-[18px] text-[14px] text-[#888888] w-[118px]  ">
              posted 2 days ago
            </h4>
            <button className="w-[57px] h-[22px] flex items-center justify-center border-2 text-xs gap-1 border-[#ABEFC6] text-[#067647] rounded-full">
              <span className="w-[6px] h-[6px] flex  items-center justify-center rounded-full bg-[#17B26A]"></span>
              Open
            </button>
          </div>
          <div className="w-[363px] h-[27px] mt-2 gap-[6px] flex items-center ">
            <div className="w-[160px] h-[27px] gap-[4px] flex items-center justify-center ml-2">
              <Location />
              <span className="h-[27px] w-[136px] font-sans  font-medium leading-[27px] text-[18px]  text-[#5D5D5D] flex items-center p-1">
                {" "}
                Delaware, USA
              </span>
            </div>
            <span className="w-[4px] h-[4px] rounded-full bg-[#D1D1D1]"></span>

            <div className="w-[150px] h-[27px] gap-[4px] flex items-center justify-center  ">
              <DB />
              <span className="font-sans h-[27px] w-[110px] gap-[4px] font-medium text-[18px] leading-[27px] text-[#5D5D5D] flex items-center justify-center">
                $300k-$400k
              </span>
            </div>
          </div>
        </div>
        <hr className="mt-5 h-[2px] bg-[#E7E7E7] " />

        {/*----------------------skill required  -----------------------*/}

        <div className="w-[872px] h-[115px] mr-4 mt-[35px] ml-[100px] gap-[64px] flex">
          <div className="w-[170px] h-[110px] gap-[8px] border-1">
            <span className=" w-[96px] h-[19px] font-sans font-medium text-[14px] leading-[18px] text-[#6E6D6D]">
              Skills Required:
            </span>
            <div className="items-center w-[126px] h-[88px] gap-[8px] ">
              <div className="h-[24px] w-[66px] mt-2 flex items-center justify-center rounded-md border-[1px] px-[4px] py-[6px] gap-1 bg-[#FFFFFF] border-[#D0D5DD] ">
                <img
                  className="w-[16px] h-[16px] rounded-md object-center"
                  src="../public/Figma.png"
                  alt="Figma"
                />
                <span className="w-[34px] h-16px] font-sans font-medium text-[12px] leading-[16px] items-center">
                  Figma
                </span>
              </div>
              <div className="h-[24px] w-[126px] mt-1 flex items-center justify-center rounded-md border-[1px] px-[4px] py-[6px] gap-1 bg-[#FFFFFF] border-[#D0D5DD] ">
                <img
                  className="w-[16px] h-[16px] rounded-md object-center"
                  src="../public/Adobe_illustrators.png"
                  alt="Adobe_Illustrator"
                />
                <span className="w-[96px] h-[16px] font-sans font-medium text-[12px] leading-[16px] items-center">
                  Adobe Illustrator
                </span>
              </div>
              <div className="h-[24px] w-[88px] mt-1 flex items-center justify-center rounded-md border-[1px] px-[4px] py-[6px] gap-1 bg-[#FFFFFF] border-[#D0D5DD] ">
                <img
                  className="w-[16px] h-[16px] rounded-md object-center"
                  src="../public/AdobeXD.png"
                  alt="AdobeXD"
                />
                <span className="w-[56px] h-16px] font-sans font-medium text-[12px] leading-[16px] items-center">
                  Adobe XD
                </span>
              </div>
            </div>
          </div>

          <div className="w-[170px] h-[50px] gap-[8px]">
            <span className="w-[129px] h-[19px] font-sans font-medium text-[14px] leading-[18px] text-[#6E6D6D]">
              Preferred Language:
            </span>
            <div className="w-[477px] h-[22px] font-sans font-semibold text-[16px] leading-[21px] text-[#3D3D3D]">
              English
            </div>
          </div>
          <div className="w-[170px] h-[50px] gap-[8px]">
            <span className="w-[129px] h-[19px] font-sans font-medium text-[14px] leading-[18px] text-[#6E6D6D]">
              Type:
            </span>
            <div className="w-[477px] h-[22px] font-sans font-semibold text-[16px] leading-[21px] text-[#3D3D3D]">
              Full Time
            </div>
          </div>
          <div className="w-[170px] h-[50px] gap-[8px]">
            <span className="w-[129px] h-[19px] font-sans font-medium text-[14px] leading-[18px] text-[#6E6D6D]">
              Years of Experience:
            </span>
            <div className="w-[477px] h-[22px] font-sans font-semibold text-[16px] leading-[21px] text-[#3D3D3D]">
              3+ Years of Experience
            </div>
          </div>
        </div>
        <hr className="mt-10 h-[2px] bg-[#E7E7E7] " />

        {/*----------------------About the Job  -----------------------*/}

        <div className="w-[526px] h-[401px] mt-[30px] ml-[100px] gap-[8px]">
          <h2 className="w-[108px] h-[20px] font-sans font-medium text-[14px] leading-[18px] text-[#6E6D6D] ">
            About the Job
          </h2>
          <ul className="list-decimal list-inside mt-2">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ul>
          <h3 className="font-sans font-medium text-[16px] leading-[28px] text-[#3D3D3D]">
            Benefits:
          </h3>
          <ul className="list-disc list-inside ml-2">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <h3 className="font-sans font-medium text-[16px] leading-[28px] text-[#3D3D3D]">
            Schedule:
          </h3>
          <ul className="list-disc list-inside ml-2">
            <li>Health insurance</li>
          </ul>
          <h3 className="font-sans font-medium text-[16px] leading-[28px] text-[#3D3D3D]">
            Supplemental pay types:
          </h3>
          <ul className="list-disc list-inside ml-2">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <h3 className="font-sans font-medium text-[16px] leading-[28px] text-[#3D3D3D]">
            Work Location: In person
          </h3>
        </div>

        <hr className="mt-10 h-[2px] bg-[#E7E7E7]" />
        {/*---------------------- CompanyInfo -----------------------*/}
        <div className="w-[736px] h-[250px] ml-[100px] mt-[20px] gap-[8px] ">
          <div className="w-[148px] h-[60px] gap-[10px] flex items-center justify-center">
            <img
              className="w-[40px] h-[40px] rounded-sm"
              src="Images1.png"
              alt="Atlassian"
            />
            <h3 className="w-[68px] h-[27px] font-sans font-medium text-[20px] leading-[27px] text-[#4F4F4F]">
              Atlassian
            </h3>
          </div>

          <div className="grid grid-rows-3 grid-cols-2 gap-2 px-2">
            <div className="w-[344px] h-[49px] gap-2">
              <span className="text-gray-500">Company size:</span>
              <div>1k - 2k Employees</div>
            </div>
            <div className="w-[344px] h-[49px] gap-2">
              <span className="text-gray-500">Type:</span>
              <div>Private</div>
            </div>
            <div className="w-[344px] h-[49px] gap-2">
              <span className="text-gray-500">Sector:</span>
              <div>Information Technology, Infrastructure</div>
            </div>
            <div>
              <span className="text-gray-500">Funding:</span>
              <div>Bootstrapped</div>
            </div>

            <div className="w-[344px] h-[49px] gap-2">
              <span className="text-gray-500">Founded In:</span>
              <div>2019</div>
            </div>
            <div>
              <span className="text-gray-500">Founded By:</span>
              <div>Scott Farquhar, Mike Cannon-Brookes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
