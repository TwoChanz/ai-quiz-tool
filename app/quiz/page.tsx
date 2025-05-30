"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import QuizQuestion from "@/components/quiz-question"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { quizQuestions } from "@/lib/quiz-data"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = (currentQuestionIndex / quizQuestions.length) * 100

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      setAnswers({
        ...answers,
        [currentQuestion.id]: selectedOption,
      })

      // Move to next question or results
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedOption(null)
      } else {
        // Navigate to results with answers
        const queryParams = new URLSearchParams()
        Object.entries({ ...answers, [currentQuestion.id]: selectedOption }).forEach(([key, value]) => {
          queryParams.append(key, value)
        })
        router.push(`/results?${queryParams.toString()}`)
      }
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedOption(answers[quizQuestions[currentQuestionIndex - 1].id] || null)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <main className="flex-1 container max-w-3xl px-4 py-8 md:py-12">
        <div className="mb-8">
          <Progress value={progress} className="h-2 bg-gray-200" />
          <p className="text-sm text-gray-500 mt-2">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <QuizQuestion
            question={currentQuestion}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
          />

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-purple-600 hover:bg-purple-700 flex items-center"
            >
              {currentQuestionIndex < quizQuestions.length - 1 ? (
                <>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "See Results"
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
