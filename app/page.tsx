export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Analytics
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Find Hidden Correlations<br />in Your Health Data
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload CSV or JSON exports from your wearable. Our Pearson correlation engine surfaces unexpected relationships between your metrics — sleep vs. HRV, steps vs. mood, and more.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Analyzing — $7/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["CSV & JSON", "Any wearable export"],
            ["Pearson r", "Statistical rigor"],
            ["Instant", "No server storage"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{title}</div>
              <div className="text-[#8b949e] text-sm mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited file uploads",
              "Full correlation matrix",
              "Interactive scatter plots",
              "Actionable insight summaries",
              "Export results as PDF"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What file formats are supported?",
              "We support CSV and JSON exports from any wearable or health app, including Apple Health, Garmin, Fitbit, and Oura."
            ],
            [
              "Is my health data stored on your servers?",
              "No. All analysis runs client-side in your browser. Your data never leaves your device."
            ],
            [
              "What is a Pearson correlation?",
              "It's a statistical measure (−1 to +1) of how strongly two metrics move together. Values near ±1 indicate strong relationships worth exploring."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
