"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { X } from "lucide-react";
interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="w-6 h-6 p-0 border-none rounded-md"
      onClick={() => router.back()}
    >
      <X aria-label="close modal" className="w-4 h-4" />
    </Button>
  );
};

export default CloseModal;
