import { BiWorld } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="w-[550px] h-[55px] mb-[45px] bg-[#F55A5A] inter flex text-white justify-center items-center">
      <BiWorld className="w-6 h-6 mr-1" />
      <p className="text-sm font-medium">my travel journal.</p>
    </div>
  );
}
