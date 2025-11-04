import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(reviews.length / 3, (reviews.length / 3) * 2);
const thirdRow = reviews.slice((reviews.length / 3) * 2);

const ReviewCard = ({ techStack, logo }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          width="40"
          height="40"
          alt=""
          src={logo}
        />
        <div className="flex flex-col">
          <figcaption className="ml-3 text-2xl font-medium text-white">
            {techStack}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start c-space section-spacing">
      <h2 className="text-heading">My TechStack</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:10s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.logo} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.techStack} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:10s]">
          {thirdRow.map((review) => (
            <ReviewCard key={review.logo} {...review} />
          ))}
        </Marquee>
        
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
