export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">About ChefNiche</h1>
      <p className="text-gray-600 mb-6">
        ChefNiche is a Canadian kitchen & restaurant supply built for home chefs and pros.
        We curate reliable brands, keep inventory honest, and ship fast from Canada.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">What we believe</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Tools should last years, not months.</li>
            <li>Clear prices, fair policies, and real support.</li>
            <li>Quality first—no endless junk listings.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why shop with us</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Fast Canadian shipping</li>
            <li>Price match on comparable items</li>
            <li>Hassle-free returns within 30 days</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
