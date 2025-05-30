import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // Get data from query params
    const role = searchParams.get("role") || "professional"
    const toolNames = searchParams.get("tools") || "AI tools"

    // Font
    const interSemiBold = fetch(
      new URL(
        "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZFhjQ.ttf",
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer())

    const fontData = await interSemiBold

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f7ff",
          backgroundImage: "linear-gradient(to bottom right, #f9f7ff, #ffffff)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 24,
            padding: 40,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            width: "90%",
            height: "80%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
            <div
              style={{
                backgroundColor: "#6366f1",
                borderRadius: "50%",
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#111827" }}>AI Tool Matchmaker</h1>
          </div>

          <h2 style={{ fontSize: 48, fontWeight: "bold", color: "#111827", textAlign: "center", marginBottom: 24 }}>
            My AI Toolkit for {role}s
          </h2>

          <p style={{ fontSize: 24, color: "#4B5563", textAlign: "center", marginBottom: 32 }}>
            I discovered my perfect AI tools: {toolNames}
          </p>

          <div
            style={{
              backgroundColor: "#6366f1",
              color: "white",
              padding: "16px 32px",
              borderRadius: 8,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Take the quiz to find yours!
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
            weight: 600,
          },
        ],
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate image", { status: 500 })
  }
}
