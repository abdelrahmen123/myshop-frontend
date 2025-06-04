"use client";
import { Review } from "@/app/types";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import Comment from "./Comment";

function CommentsBox() {
  const reviews: Review[] = useAppSelector(
    (state) => state.products.markedProduct.reviews
  );

  return (
    <div className="flex flex-col gap-4 w-full p-7 bg-sky-100 container  text-center rounded-md shadow-2xl">
      <h1 className="text-start w-full text-gray-600 text-2xl font-semibold">
        Comments
      </h1>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <Comment key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default CommentsBox;
