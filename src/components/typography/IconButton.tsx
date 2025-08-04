import type { IconType } from "react-icons";

type IconButtonProps = {
  icon: IconType;
  hasNoti?: boolean;
};

export default function IconButton({ icon: Icon, hasNoti }: IconButtonProps) {
  return (
    <button className="rounded-full relative">
      {hasNoti && 
        <span className="absolute -top-4 -right-3 h-6 w-6 bg-orange-600 rounded-full
        text-white text-sm flex items-center justify-center">
          0
        </span>}
      <Icon className="w-7 h-7 transition-all duration-200 ease-in-out hover:text-tertiary-txt hover:scale-[1.05] cursor-pointer" />
    </button>
  );
}
