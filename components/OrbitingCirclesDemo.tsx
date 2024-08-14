import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { BluetoothSearching, Facebook, GithubIcon, HardDrive } from "lucide-react";
import Image from "next/image";
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Why Me
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
    gitHub: () => <GithubIcon size={24} />,
    notion: () => <Facebook size={24} />,
    googleDrive: () => <HardDrive size={24} />,
    whatsapp: () => <IconBrandWhatsapp size={24} />,
  };
