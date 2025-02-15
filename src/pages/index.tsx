import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Header />
      <div className="grid gap-4">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Footer />
      </div>
    </div>
  );
}
