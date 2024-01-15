import { Input } from "@/components/ui/input"
import Link from 'next/link';


export default function Inputs() {
  //create 
  // onSubmit function  to handle the form submission using state hook also to handle the form submission using state hook
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
    return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <Input />
        
         <Link href="/Section"> 
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Input Pages
        </button>
      </Link>
    </main>
  );
}