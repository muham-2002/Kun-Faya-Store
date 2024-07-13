import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={100} className="w-screen h-[95vh] object-fill" />
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

