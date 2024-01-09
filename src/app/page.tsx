
import Nav from '@/components/nav';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <Nav />
      <h1 className="text-5xl font-bold mb-4">Job Board</h1>
      <p className="text-lg">
        Welcome to our Job Board! Find exciting opportunities and take the next
        step in your career Journey.
      </p>
    </main>
  );
}


