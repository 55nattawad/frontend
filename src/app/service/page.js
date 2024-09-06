import Carousel from "@/components/CaroselService";


export default function Home() {
  return (
    <main style={{ backgroundColor: '#b39ddb', minHeight: '100vh' }}>
      <Carousel />
      <br/>
      <section className="py-3">
        <div className="container">
          <h2 className="text-center mb-4 text-white">service</h2>
        </div>
      </section>
      </main>
  );
}

