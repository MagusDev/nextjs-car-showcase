"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updatSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updatSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap 5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full index-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
