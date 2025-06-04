import { useRouter } from "next/navigation";

export type ApiResponse<type> = {
  status: number;
  message: string;
  data: type;
};

export type RouterType = ReturnType<typeof useRouter>;
