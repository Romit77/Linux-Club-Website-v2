import { Footer } from "@/components/component/footer";
import  Navbar  from "@/components/component/Navbar";

export default function RegisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
