import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        fill
        src="https://static.theoneswelove.ch/assets/images/movies/The-Big-Lebowski-1998/still/The-Big-Lebowski-1998-still-1726071539543-0.jpg"
        alt="Something"
        sizes="1200px"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
  );
}
