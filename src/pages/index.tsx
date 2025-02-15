import LoginForm from "@/components/user/login";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#022D44] to-[#1497AF] flex items-center justify-center p-4">
      <LoginForm />
    </main>
  );
}
