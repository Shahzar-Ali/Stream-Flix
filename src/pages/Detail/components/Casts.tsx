import { memo, FC } from "react";
import { m } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import Image from "@/common/Image";
import { useMotion } from "@/hooks/useMotion";

interface CastsProps {
  casts: {
    id: string;
    profile_path: string;
    name: string;
  }[];
}

const Casts: FC<CastsProps> = ({ casts }) => {
  const isNotMobile = useMediaQuery("(min-width: 768px");
  const { fadeDown, staggerContainer } = useMotion();
  const topCasts = casts.slice(0, 4);

  if (topCasts.length === 0) return null;

  return (
    <>
      <m.h3
        variants={fadeDown}
        className="text-secColor font-bold md:text-[18px] sm:text-[16.75px] xs:text-[15.75px] text-[14.75px]"
      >
        Top Casts
      </m.h3>
      <m.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap md:gap-4 sm:gap-[14px] gap-2  sm:-mt-2 xs:-mt-[6px] -mt-1"
      >
        {topCasts.map((cast) => {
          const { id, profile_path: profilePath, name } = cast;
          return (
            <m.figure
              variants={fadeDown}
              key={id}
              className="flex flex-col justify-start gap-2"
            >
              <div className="md:h-[96px] md:w-[64px] h-[54px] w-[40px]">
                <Image
                  width={isNotMobile ? 64 : 40}
                  height={isNotMobile ? 96 : 54}
                  src={`https://image.tmdb.org/t/p/original/${profilePath}`}
                  alt={name}
                  className=" object-cover rounded-md shadow-md"
                />
              </div>

              <h4 className="text-gray-300 md:text-[12px] sm:text-[10.75px] text-[10px] md:max-w-[64px] text-center font-semibold sm:-mt-0 leading-snug max-w-[40px]">
                {name}
              </h4>
            </m.figure>
          );
        })}
      </m.div>
    </>
  );
};

export default memo(Casts, (prevProps, newProps) => {
  return prevProps.casts[0]?.id === newProps.casts[0]?.id;
});
