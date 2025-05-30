import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Find Your Perfect AI Tools
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Answer 6 quick questions and discover the best AI tools for your specific role, goals, and budget.
                  Personalized recommendations in under 60 seconds.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/quiz">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Take the Quiz <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start">
              <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="p-2 bg-purple-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-600"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Role-Based</h3>
                <p className="text-gray-500 text-center">
                  Tailored recommendations for marketers, developers, designers, and more
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="p-2 bg-purple-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-600"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Budget-Friendly</h3>
                <p className="text-gray-500 text-center">Find tools that match your budget, from free to enterprise</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="p-2 bg-purple-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-600"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Expert Curated</h3>
                <p className="text-gray-500 text-center">Recommendations based on 200+ hours of research and testing</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to find your perfect AI toolkit?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Take our 60-second quiz and get personalized recommendations for your specific needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/quiz">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Start the Quiz <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <p className="text-center text-sm text-gray-500">© 2025 AI Tool Matchmaker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
