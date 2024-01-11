import { Input } from "@/components/ui/input"
import Typewriter from 'typewriter-effect';

export default function Inputs() {
  //create 
  // onSubmit function  to handle the form submission using state hook also to handle the form submission using state hook
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

    return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <Input />
    </main>
  );
}