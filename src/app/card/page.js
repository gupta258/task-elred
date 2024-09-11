"use client";

import { RWebShare } from "react-web-share";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Card() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: `url('${localStorage.getItem("bgImage")}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "cover",
        height: "100vh",
      }}
      className="text-white pb-7 relative"
    >
      <div className="px-5 py-[10px] bg-white bg-opacity-20">
        <p className="font-medium text-base leading-6 -tracking-[1.9%]">
          Profile
        </p>
      </div>

      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center backdrop-blur-sm px-4">
        <div
          className="border border-[#909090] custom-gradient rounded-lg w-full px-5 pt-5 pb-16"
          style={{
            backgroundImage: `url('${localStorage.getItem("bgImage")}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "cover",
          }}
        >
          <button
            className="absolute top-10 right-5"
            onClick={() => router.back()}
          >
            <Image src={"./cross.svg"} width={24} height={24} alt="cross" />
          </button>
          <div className="flex items-center justify-end mb-6">
            <RWebShare
              data={{
                text: localStorage.getItem("metaDataText"),
                url: localStorage.getItem("metaDataURL"),
                title: localStorage.getItem("metaDataTitle"),
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="flex items-center gap-1 cursor-pointer">
                <Image
                  src={"./shareCard.svg"}
                  width={24}
                  height={25}
                  alt="shareCard"
                />
                <p className="font-medium text-sm leading-[17px]">Share</p>
              </button>
            </RWebShare>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="border-4 border-[#147BFF] rounded-full relative mb-6">
              <Image
                src={localStorage.getItem("profileImage")}
                width={116}
                height={116}
                alt="profile-pic"
                className="rounded-full"
              />
              <Image
                src={"./ic_round-verified.svg"}
                width={28}
                height={28}
                alt="verified"
                className="absolute bottom-0 right-0 z-10"
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-[30px] gap-[2px]">
              <h4 className="font-bold text-[30px] leading-[35px] tracking-[3%]">
                {localStorage.getItem("profileFirstName")}
              </h4>
              <h6 className="font-semibold text-lg leading-[21px] tracking-[3%]">
                {localStorage.getItem("profileLastName")}
              </h6>
            </div>
            <div className="flex flex-col items-center justify-center mb-[35px] gap-2 font-bold text-base leading-[19px] ">
              <h4 className="tracking-[5%]">
                {localStorage.getItem("profilePost")}
              </h4>
              <h4 className="tracking-[5%]">WildCraft</h4>
              <h6>{localStorage.getItem("profileLocation")}</h6>
            </div>
            <div className="flex flex-col items-center justify-center mb-[62px] gap-7">
              <Image
                src={"/iconsFirst.png"}
                width={141}
                height={30}
                alt="icons-first"
              />
              <Image
                src={"/iconsSecond.png"}
                width={178}
                height={30}
                alt="icons-second"
              />
            </div>
            <Image
              src={"/lastIcons.png"}
              width={178}
              height={30}
              alt="last-icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
