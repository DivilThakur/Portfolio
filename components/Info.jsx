import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineUser className="text-2xl mt-1 text-accent" />
          <div>
            <p className="">Date of Birth</p>
            <p>14 April 2004</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div>
            <p className="">Email Address</p>
            <p>divilthkr3@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div>
            <p className="">Phone</p>
            <p>+11 22 33 44 55</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div>
            <p className="">Location</p>
            <p>Chandigarh, Punjab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
