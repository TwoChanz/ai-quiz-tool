"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { QuizQuestionType } from "@/lib/quiz-data"

interface QuizQuestionProps {
  question: QuizQuestionType
  selectedOption: string | null
  onOptionSelect: (option: string) => void
}

export default function QuizQuestionComponent({ question, selectedOption, onOptionSelect }: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>
      {question.description && <p className="text-gray-500">{question.description}</p>}

      <RadioGroup value={selectedOption || ""} onValueChange={onOptionSelect} className="space-y-3">
        {question.options.map((option) => (
          <div
            key={option.value}
            className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all ${
              selectedOption === option.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => onOptionSelect(option.value)}
          >
            <RadioGroupItem value={option.value} id={option.value} className="text-purple-600" />
            <div className="flex-1">
              <Label htmlFor={option.value} className="text-base font-medium cursor-pointer">
                {option.label}
              </Label>
              {option.description && <p className="text-sm text-gray-500 mt-1">{option.description}</p>}
            </div>
            {option.icon && <div className="text-gray-400">{option.icon}</div>}
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
