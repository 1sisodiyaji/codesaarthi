import { Tabs } from "./ui/tabs.tsx";

export function TabsDesign() {
  const tabs = [
    {
      title: "Notes",
      value: "Notes",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Notes</p>
          <img
      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724766205/Screenshot_2024-08-27_191256_u6mayl.png"
      alt="dummy" 
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "Projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <img
      src="/linear.webp"
      alt="dummy"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "RoadMap",
      value: "RoadMap",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Roadmap</p>
          <img
      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724766129/Screenshot_2024-08-27_191141_kzlnis.png"
      alt="dummy"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Tools",
      value: "Tools",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tools</p>
          <img
      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724612288/Screenshot_2024-08-16_200811_h2gcp1.png"
      alt="dummy"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "News",
      value: "News",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>News</p>
          <img
      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723130894/2_gmgxkt.png"
      alt="dummy"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Blogs",
      value: "Blogs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blogs</p>
          <img
      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723150833/4_txsurb.png"
      alt="dummy"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Ask - Freely",
      value: "Ask - Freely",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Ask - Freely</p>
          <img
            src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723157339/5_lg8sxf.png"
            alt="dummy"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Jobs",
      value: "Jobs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Jobs</p>
          <img
      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723145623/3_qwgvkv.png"
      alt="dummy"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
 
