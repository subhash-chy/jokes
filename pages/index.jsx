import Image from "next/image";
import { Footer, Header, Login, Testimonial, WhyJoker } from "../components";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      <main className="">
        {/* Featured Image Section Only in Desktop */}
        <div className="relative w-full h-[40vh] md:h-[70vh]">
          <Image
            objectFit="cover"
            layout="fill"
            alt="Joker band"
            src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>

        <div className="px-8 md:px-16 pb-20">
          {/* Login Section */}
          <div className="py-20 flex flex-col gap-16 md:flex-row">
            <Login />

            <WhyJoker />
          </div>

          <div className="flex">
            {/* Testimonials Section */}
            <Testimonial
              avatar="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              name="Heimdaal"
              statement="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates placeat iusto accusamus? Nihil, nisi ab facere sint
              accusantium nulla eligendi adipisci reiciendis beatae dolor tempore
              fugit minus dolorum reprehenderit."
            />
            {/* <Testimonial /> */}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      {/* <Footer /> */}
    </>
  );
}
