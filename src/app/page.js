import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <div className="container">
        <div className="text-[15vw] font-black">thinK Great</div>
        <div className="relative">
        <Image src="/images/midea01.jpg" alt=""
         width={1300} height={1300} className="w-full h-[400px]
         object-cover" />
        <div className="absolute left-5 bottom-10 flex flex-col gap-2">
        <span className="text-white text-lg font-bold">KB그룹</span>
        <strong className="text-white text-3xl font-bold">KB그룹광고 <br /> 드디어 TV방송에서 <br /> 만나다.</strong>
        </div>
        </div>
        </div>
      </section>


      <section>
        <div className="container">
          <ul>
            <li>
              <Link href="#" className="flex flex-col gap-3">
              <Image src="/images/midea02.jpg" alt="" width={1300} height={1300} 
              className="w-full aspect-video object-cover" />
              <div className="flex flex-col">
              <span className="text-md text-gray-500">소셜미디어</span>
              <strong className="text-xl">소통과 화합의 현장!<br />
               KG모빌리티 파트너스 데이</strong>
              </div>

              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>
            <Link href="#">곽재선의 창<ChevronRight /> </Link>
          </h2>
          <div></div>
        </div>
      </section>
    </div>
  );
}
