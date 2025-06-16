"use client";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import Comment from "./Comment";
import CreateCommentInput from "./CreateCommentInput";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

function CommentsBox() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const context = useContext(ProductContext);

  if (!context) return null;
  const { product } = context;

  if (!product) return null;

  return (
    <div className="flex flex-col gap-4 w-full p-7 bg-sky-100 container mb-7 text-center rounded-md shadow-2xl">
      <h1 className="text-start w-full text-gray-600 text-2xl font-semibold">
        Comments
      </h1>
      <div>
        {isAuthenticated ? (
          <CreateCommentInput />
        ) : (
          <>
            <h2 className="text-start w-full text-gray-600 text-2xl font-semibold">
              You need to log in to create a comment
            </h2>
            <Link href="/auth/login" className="text-sky-500 underline">
              Login
            </Link>
          </>
        )}
      </div>
      {product?.reviews.length === 0 ? (
        <p>No comments</p>
      ) : (
        <div className="flex flex-col gap-4">
          {product?.reviews.map((review) => (
            <Comment key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentsBox;
