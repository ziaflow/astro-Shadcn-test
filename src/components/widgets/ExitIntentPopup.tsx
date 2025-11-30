"use client"

import { useEffect, useState } from "react"
import { LeadMagnetWidget } from "./LeadMagnetWidget"

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if already shown in this session
    const shownInSession = sessionStorage.getItem("exit_intent_shown")
    if (shownInSession) {
        setHasShown(true)
        return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setOpen(true)
        setHasShown(true)
        sessionStorage.setItem("exit_intent_shown", "true")
      }
    }

    // Fallback timer for mobile/non-mouse users (show after 30s)
    const timer = setTimeout(() => {
        if (!hasShown && !sessionStorage.getItem("exit_intent_shown")) {
            setOpen(true)
            setHasShown(true)
            sessionStorage.setItem("exit_intent_shown", "true")
        }
    }, 30000)

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [hasShown])

  return (
    <LeadMagnetWidget
        open={open}
        onOpenChange={setOpen}
        hideTrigger={true}
    />
  )
}
