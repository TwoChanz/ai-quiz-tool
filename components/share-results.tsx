"use client"

import type React from "react"
import { useEffect } from "react"

interface ShareResultsProps {
  role: string
  toolNames: string
  shareUrl: string
  shareMessage: string
}

const ShareResults: React.FC<ShareResultsProps> = ({ role, toolNames, shareUrl, shareMessage }) => {
  // Create social image URL
  const toolNamesForImage = encodeURIComponent(toolNames)
  const roleForImage = encodeURIComponent(role)
  const socialImageUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/api/share-image?role=${roleForImage}&tools=${toolNamesForImage}`

  // Add meta tags for social sharing
  useEffect(() => {
    // Update meta tags for social sharing
    const metaTags = [
      { property: "og:title", content: `AI Tool Recommendations for ${role}s` },
      { property: "og:description", content: shareMessage },
      { property: "og:image", content: socialImageUrl },
      { property: "og:url", content: shareUrl },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: `AI Tool Recommendations for ${role}s` },
      { property: "twitter:description", content: shareMessage },
      { property: "twitter:image", content: socialImageUrl },
    ]

    // Add meta tags to head
    metaTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement("meta")
        meta.setAttribute("property", property)
        document.head.appendChild(meta)
      }
      meta.setAttribute("content", content)
    })

    // Clean up
    return () => {
      metaTags.forEach(({ property }) => {
        const meta = document.querySelector(`meta[property="${property}"]`)
        if (meta) {
          document.head.removeChild(meta)
        }
      })
    }
  }, [role, shareMessage, socialImageUrl, shareUrl])

  return null
}

export default ShareResults
