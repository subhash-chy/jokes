import Image from "next/image";

function Testimonials(props) {
  const { avatar, name, statement } = props;
  return (
    <div className="border-2 border-[#422B46] p-8 flex items-start justify-between gap-8 rounded-md">
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-10 h-10 rounded-full">
          <Image
            className="rounded-full"
            objectFit="cover"
            layout="fill"
            alt={name}
            src={avatar}
          />
        </div>
        <p className="text-xs text-[#C900EC]">{name}</p>
      </div>
      <div>
        <p className="text-lg text-[#989898]">{statement}</p>
      </div>
    </div>
  );
}

export default Testimonials;
