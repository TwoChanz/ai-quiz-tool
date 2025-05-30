"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ExternalLink, Lock } from "lucide-react"
import { getToolRecommendations } from "@/lib/recommendations"
import type { Tool } from "@/lib/tools-data"
import ShareResults from "@/components/share-results"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  // Get answers from URL params
  const answers: Record<string, string> = {}
  searchParams.forEach((value, key) => {
    answers[key] = value
  })

  // Get recommendations based on answers
  const { freeTools, premiumTools } = getToolRecommendations(answers)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate email
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call to save email
    try {
      // In a real app, you would send this to your API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubscribed(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <main className="flex-1 container max-w-4xl px-4 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Personalized AI Tool Recommendations
          </h1>
          <p className="mt-4 text-gray-500 md:text-xl max-w-2xl mx-auto">
            Based on your responses, we've curated the perfect AI toolkit for your needs.
          </p>
        </div>

        <div className="space-y-8">
          {/* Free Tools Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Free Preview: Top 3 Tools</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {freeTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>

          {/* Share Results Section */}
          <section className="mb-8">
            <ShareResults tools={freeTools} role={answers.role || "professional"} />
          </section>

          {/* Premium Tools Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Unlock 5 More Premium Recommendations</h2>
              <p className="text-gray-500 mt-2">
                Get access to 5 additional tools perfectly matched to your needs, plus setup guides and exclusive
                discounts.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                    {isSubmitting ? "Unlocking..." : "Unlock Premium Recommendations"}
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    We'll send your personalized recommendations to your email. No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center justify-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Success! Check your email for your premium recommendations.</span>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {premiumTools.slice(0, 3).map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-gray-500">We've sent 2 more tools and setup guides to your email!</p>
                </div>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center mt-12">
            <h2 className="text-2xl font-bold">Want to discover more AI tools?</h2>
            <p className="text-gray-500 mt-2 mb-6">
              Take the quiz again with different answers to explore more options.
            </p>
            <Link href="/quiz">
              <Button variant="outline" className="mx-auto">
                Retake Quiz
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{tool.name}</span>
          {tool.isPremium && <Lock className="h-4 w-4 text-gray-400" />}
        </CardTitle>
        <CardDescription>{tool.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-500">{tool.description}</p>

        <div className="mt-4">
          <div className="flex items-center text-sm">
            <span className="font-medium mr-2">Price:</span>
            <span>{tool.pricing}</span>
          </div>
          <div className="flex items-center text-sm mt-1">
            <span className="font-medium mr-2">Best for:</span>
            <span>{tool.bestFor}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full flex items-center justify-center">
            Visit Website <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
