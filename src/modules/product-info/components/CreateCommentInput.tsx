"use client";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { createCommentHandler } from "../logic/commentLogic";
import { ProductContext } from "../contexts/productContext";
import { Loader2 } from "lucide-react";

function CreateCommentInput() {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const context = useContext(ProductContext);

  if (!context) return null;
  const { product, setProduct } = context;

  if (!product) return null;

  return (
    <div className="rounded-2xl justify-end w-full flex gap-3 items-center">
      <input
        className="bg-white outline-none h-14 flex-1 shadow-2xl rounded-2xl text-sky-950 text-xl p-3"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={async () => {
          const newReview = await createCommentHandler(
            text,
            product.id,
            setLoading
          );

          if (newReview) {
            setProduct({
              ...product,
              reviews: [...product.reviews, newReview], // تحديث الريفيوهات مباشرة
            });
          }
          setText("");
        }}
        className={`${
          loading
            ? "cursor-progress flex justify-center items-center"
            : "cursor-pointer"
        } bg-sky-500 h-14 rounded-2xl hover:border-sky-500 border-2 text-white hover:bg-transparent border-transparent hover:text-sky-500`}
      >
        {loading ? (
          <Loader2 className="animate-spin text-white font-semibold" />
        ) : (
          "Create Comment"
        )}
      </Button>
    </div>
  );
}

export default CreateCommentInput;
