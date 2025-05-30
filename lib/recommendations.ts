import { toolsData } from "./tools-data"

export function getToolRecommendations(answers: Record<string, string>) {
  // Filter tools based on user answers
  const filteredTools = toolsData.filter((tool) => {
    // Match by role
    if (!tool.roles.includes(answers.role)) {
      return false
    }

    // Match by goal
    if (!tool.goals.includes(answers.goal)) {
      return false
    }

    // Match by budget
    if (!tool.budgets.includes(answers.budget)) {
      return false
    }

    // Match by experience level
    if (!tool.experienceLevels.includes(answers.experience)) {
      return false
    }

    // Match by team size
    if (!tool.teamSizes.includes(answers.team)) {
      return false
    }

    // Match by use case (if specified)
    if (answers.use_case && !tool.useCases.includes(answers.use_case)) {
      return false
    }

    return true
  })

  // If we don't have enough matches, relax some criteria
  let relaxedTools = filteredTools

  if (filteredTools.length < 8) {
    relaxedTools = toolsData.filter((tool) => {
      // Match by role and goal only
      return tool.roles.includes(answers.role) && tool.goals.includes(answers.goal)
    })
  }

  // Separate free and premium tools
  const freeTools = relaxedTools.filter((tool) => !tool.isPremium).slice(0, 3)

  const premiumTools = relaxedTools.filter((tool) => tool.isPremium || !freeTools.includes(tool)).slice(0, 5)

  return {
    freeTools,
    premiumTools,
  }
}
