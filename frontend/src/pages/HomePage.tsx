import { Hero } from '@/components/Hero'

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Hero />
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
          Welcome to BluePeak
        </h2>
        <p className="text-lg text-slate-700 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
          BluePeak is your all-in-one platform for next-gen finance. We empower compliance officers, fintech analysts, and ambitious traders with robust tools for trading, portfolio management, and regulatory assurance—all wrapped in uncompromising security. Our suite of features, from real-time market insights to advanced KYC, is purpose-built for those who demand clarity, speed, and peace of mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <span className="text-blue-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM6.343 17.657A8.001 8.001 0 016.343 6.34m11.314 11.318a8.001 8.001 0 010-11.318m-1.414 1.414a6 6 0 010 8.486m-8.486-8.486a6 6 0 010 8.486" /></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Total Compliance</h3>
            <p className="text-slate-600 text-center">Automate regulatory checks and stay ahead of evolving standards with confidence.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <span className="text-blue-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17v-6a1 1 0 01.293-.707l7-7a1 1 0 011.414 0l7 7A1 1 0 0120 11v6a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Portfolio Clarity</h3>
            <p className="text-slate-600 text-center">Track your assets, performance, and risk with clarity. Insights for every level of expertise.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <span className="text-blue-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v18m6-18v18" /></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Real-Time Trading</h3>
            <p className="text-slate-600 text-center">Seize opportunities with lightning-fast execution and transparent reporting. Your edge, secured.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
