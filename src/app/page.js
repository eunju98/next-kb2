import Image from "next/image";


export default function Home() {
  return (
    <div>
      <section>
        <div>
        <div className="text-[15vw] font-black">thinK Great</div>
        <div className="relative">
        <Image src="/images/intro.jpg" alt=""
         width={1300} height={1300} className="w-full h-[400px]
         object-cover" />
        <div className="absolute left-5 bottom-10 flex flex-col gap-2">
        <span className="text-white text-lg font-bold">KB그룹</span>
        <strong className="text-white text-3xl font-bold">KB그룹광고 <br /> 드디어 TV방송에서 <br /> 만나다.</strong>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
}
