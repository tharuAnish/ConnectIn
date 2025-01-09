import {
  ChevronDown,
  HelpCircle,
  Grid2X2,
  Target,
  ArrowUpSquare,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface TrendingNews {
  title: string
  timeAgo: string
  readers: number
}

interface Puzzle {
  name: string
  description: string
  icon: JSX.Element
}

const trendingNews: TrendingNews[] = [
  {
    title: "EV sales hit record high",
    timeAgo: "2h ago",
    readers: 1841,
  },
  {
    title: "Campus placements bounce back",
    timeAgo: "3h ago",
    readers: 1357,
  },
  {
    title: "Hospitality sector set for growth",
    timeAgo: "3h ago",
    readers: 622,
  },
  {
    title: "Will planning for Indias rich",
    timeAgo: "6h ago",
    readers: 486,
  },
  {
    title: "Quick commerce all set for a revamp",
    timeAgo: "7h ago",
    readers: 459,
  },
]

const puzzles: Puzzle[] = [
  {
    name: "Tango",
    description: "Harmonize the grid",
    icon: (
      <Grid2X2 className="h-8 w-8 p-1.5 bg-orange-100 text-orange-500 rounded" />
    ),
  },
  {
    name: "Queens",
    description: "4 connections played",
    icon: (
      <Grid2X2 className="h-8 w-8 p-1.5 bg-purple-100 text-purple-500 rounded" />
    ),
  },
  {
    name: "Pinpoint",
    description: "Guess the category",
    icon: (
      <Target className="h-8 w-8 p-1.5 bg-blue-100 text-blue-500 rounded" />
    ),
  },
  {
    name: "Crossclimb",
    description: "Unlock a trivia ladder",
    icon: (
      <ArrowUpSquare className="h-8 w-8 p-1.5 bg-cyan-100 text-cyan-500 rounded" />
    ),
  },
]

export function TrendingSection() {
  return (
    <div className="w-full bg-white rounded-xl border">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Trending Now</CardTitle>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-xs text-muted-foreground">
          curated by LinkedIn News
        </p>
      </div>
      <div className="grid gap-4 pt-0 p-4">
        {/* Trending News */}
        <div className="grid gap-1">
          {trendingNews.map((news, index) => (
            <div
              key={index}
              className="grid gap-1 cursor-pointer hover:bg-muted rounded-sm p-1 px-2"
            >
              <h3 className="font-medium text-sm truncate">{news.title}</h3>
              <p className="text-xs text-muted-foreground">
                {news.timeAgo} • {news.readers.toLocaleString()} readers
              </p>
            </div>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start p-1 h-auto text-sm font-medium"
          >
            Show more
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <Separator />

        {/* Puzzles */}
        <div>
          <h2 className="font-medium mb-3">Todays puzzles</h2>
          <div className="grid gap-2">
            {puzzles.map((puzzle, index) => (
              <div
                key={index}
                className="flex items-center justify-between cursor-pointer hover:bg-muted rounded-sm p-1"
              >
                <div className="flex items-center gap-3">
                  {puzzle.icon}
                  <div>
                    <h3 className="font-medium text-sm">{puzzle.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {puzzle.description}
                    </p>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
