"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RWebShare } from "react-web-share";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState();
  const [moreComments, showMoreComments] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dataResponse = await axios.post(
        "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b"
      );

      setData(dataResponse.data.result[0]);
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return (
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <p className="text-2xl text-black">Loading....</p>
      </div>
    );
  }

  const goToNextPage = () => {
    router.push("card");

    localStorage.setItem(
      "bgImage",
      data.profileDesignInfo.profileBannerImageURL
    );
    localStorage.setItem("profileImage", data.dpURL);
    localStorage.setItem("profileFirstName", data.firstname);
    localStorage.setItem("profileLastName", data.lastname);
    localStorage.setItem("profilePost", data.title[0].value);
    localStorage.setItem("profileLocation", data.address.fullAddress);
  };

  return (
    <div
      style={{
        backgroundImage: `url('${data.profileDesignInfo.profileBannerImageURL}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "cover",
        height: "100%",
      }}
      className="text-white pb-7"
    >
      <div className="px-5 py-[10px] bg-white bg-opacity-20">
        <p className="font-medium text-base leading-6 -tracking-[1.9%] ">
          Profile
        </p>
      </div>
      <div className="px-5 mt-[67px] flex flex-col items-start">
        <Image
          src={data.dpURL}
          width={60}
          height={60}
          alt="profile-pic"
          className="border-2 border-white rounded-full mb-[10px]"
        />
        <div className="flex flex-col items-start mb-20">
          <div className="flex items-center gap-[5px]">
            <h6 className="text-2xl font-medium leading-7">
              {data.firstname} {data.lastname}
            </h6>
            <Image
              src={"./ic_round-verified.svg"}
              width={20}
              height={20}
              alt="verified"
            />
          </div>
          <div className="flex items-center gap-2 mt-[9px]">
            <Image src={"./briefcase.svg"} width={16} height={16} alt="post" />
            <p className="text-lg font-medium leading-[22px] capitalize">
              {data.title[0].value}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={"./location.svg"}
              width={12}
              height={16}
              alt="location"
            />
            <p className="text-lg font-medium leading-[22px] capitalize">
              {data.address.fullAddress}
            </p>
          </div>
        </div>
        <Image
          src={"/fullImage.png"}
          width={56}
          height={85}
          alt="fullImage"
          className="cursor-pointer"
          onClick={goToNextPage}
        />
      </div>
      <RWebShare
        data={{
          text: "Hey Checkout Rachit's Card on elRed",
          url: "https://task-elred-4chi40lzi-gupta258s-projects.vercel.app/",
          title: "Professional",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <div className="bg-white bg-opacity-20 mx-4 py-4 rounded-xl custom-shadow mt-[26px] flex flex-col items-center justify-center cursor-pointer">
          <Image
            src={"./share.svg"}
            width={36}
            height={36}
            alt="share"
            className="mb-2"
          />
          <p className="text-xs font-medium leading-[14px]">Share</p>
        </div>
      </RWebShare>
      <div className="mt-4 bg-white bg-opacity-20 mx-4 p-4 rounded-xl custom-shadow">
        <h6 className="font-medium text-lg leading-[22px] mb-4">Ratings</h6>
        <div className="px-2">
          <div className="flex items-start gap-8">
            <p className="text-xl font-medium leading-6">57</p>
            <p className="text-xs font-medium leading-[18px]">
              Has ethical code of conduct and is safe to do bussines with
            </p>
          </div>
          <div className="border-[0.4px] border-white border-opacity-30 mt-2 mb-8" />
          <div className="flex items-center gap-8">
            <p className="text-xl font-medium leading-6">27</p>
            <p className="text-xs font-medium leading-[18px]">
              Met In real life/Video call
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white bg-opacity-20 mx-4 p-4 rounded-xl custom-shadow h-[250px] overflow-scroll">
        <div className="flex items-center justify-between mb-4">
          <h6 className="font-medium text-lg leading-[22px]">Comments</h6>
          <p className="font-medium text-base leading-[20px]">See all</p>
        </div>
        <div className="flex flex-col items-center gap-[22px]">
          <div className="flex items-start gap-2">
            <Image
              src={"./comments-one.svg"}
              width={42}
              height={42}
              alt="comment-one"
            />
            <div>
              <p className="font-medium text-sm leading-[21px] mb-[6px]">
                Gwen Stacy{" "}
                <span className="opacity-60">See you in the next event</span>{" "}
                @roger vaccaro
              </p>
              <div className="flex items-center gap-4 font-medium text-[13px] leading-[16px] opacity-60">
                <p>1s</p>
                <p>241 likes</p>
                <p>Reply</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"./comments-two.svg"}
              width={42}
              height={42}
              alt="comment-two"
            />
            <div>
              <p className="font-medium text-sm leading-[21px] mb-[6px]">
                Gwen Stacy{" "}
                <span className="opacity-60">
                  Never judge a book by its cover
                </span>
              </p>
              <div className="flex items-center gap-4 font-medium text-[13px] leading-[16px] opacity-60">
                <p>1s</p>
                <p>241 likes</p>
                <p>Reply</p>
              </div>
            </div>
          </div>
          {moreComments ? (
            <>
              <div className="flex items-start gap-2">
                <Image
                  src={"./comments-one.svg"}
                  width={42}
                  height={42}
                  alt="comment-one"
                />
                <div>
                  <p className="font-medium text-sm leading-[21px] mb-[6px]">
                    Gwen Stacy{" "}
                    <span className="opacity-60">
                      See you in the next event
                    </span>{" "}
                    @roger vaccaro
                  </p>
                  <div className="flex items-center gap-4 font-medium text-[13px] leading-[16px] opacity-60">
                    <p>1s</p>
                    <p>241 likes</p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={"./comments-two.svg"}
                  width={42}
                  height={42}
                  alt="comment-two"
                />
                <div>
                  <p className="font-medium text-sm leading-[21px] mb-[6px]">
                    Gwen Stacy{" "}
                    <span className="opacity-60">
                      Never judge a book by its cover
                    </span>
                  </p>
                  <div className="flex items-center gap-4 font-medium text-[13px] leading-[16px] opacity-60">
                    <p>1s</p>
                    <p>241 likes</p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
              <button
                className="flex items-center justify-center font-medium text-xs leading-[14px] opacity-60 cursor-pointer"
                onClick={() => showMoreComments(false)}
              >
                ----- Hide 2 replies
              </button>
            </>
          ) : (
            <button
              className="flex items-center justify-center font-medium text-xs leading-[14px] opacity-60 cursor-pointer"
              onClick={() => showMoreComments(true)}
            >
              ----- View 2 more replies
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
