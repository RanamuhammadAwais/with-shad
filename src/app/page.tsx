import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"
import Salman from "@/components/example"
import Product from "@/components/product"
import Overview from "@/components/overview"
import Promo from "@/components/promo"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
        {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Learning Shadcn UI with Bruder Shah je 
    </h1>
    
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      "Lets see what can i et out of it now , if it gives me wings or not , makes me feel enlightened or not "
    </blockquote>

    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="">

      <Calendar> My calnder </Calendar>
    </div> */}

      <Promo/>

      <div className="">
        <Salman/>
      </div>
        <div className="p-10">
           <Overview/>
        </div>

    <Product/>



    
    </main>
  );
}
