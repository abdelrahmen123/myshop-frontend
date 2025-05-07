import { Review } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Edit2Icon, Trash2Icon } from "lucide-react";

function Comment({ review }: { review: Review }) {
  return (
    <main className="flex justify-between items-center bg-white rounded-2xl p-5 text-gray-800">
      <h3 className="overflow-y-scroll">{review.text}</h3>
      <div className="flex gap-3">
        <Button className="bg-sky-500 hover:border-sky-500 border-2 text-white hover:bg-transparent border-transparent hover:text-sky-500">
          <Edit2Icon />
        </Button>
        <Button className="bg-red-500 hover:border-red-500 border-2 text-white hover:bg-transparent border-transparent hover:text-red-500">
          <Trash2Icon />
        </Button>
      </div>
    </main>
  );
}

export default Comment;
