import { Info } from "lucide-react"
import React from "react"

interface NAVITEMS {
  heading: string
  subHeading: string
}
const newsItems: NAVITEMS[] = [
  {
    heading: "Human Metapneumovirus (hMPV) Overview",
    subHeading: "2h ago - 745 readers",
  },
  {
    heading: "E-retailer retag health drinks",
    subHeading: "4h ago - 345 readers",
  },
  {
    heading: "Lets transport raises $22 million",
    subHeading: "6h ago - 323 readers",
  },
  {
    heading: "Casual waer is in at India Inc",
    subHeading: "6h ago - 234 readers",
  },
  {
    heading: "Snaller cities go on loans",
    subHeading: "7h ago - 112 readers",
  },
]

const News = () => {
  return (
    <div className="hidden md:block w-[25%] bg-white h-fit rounded-lg border ">
      <div className="flex items-center justify-between p-3">
        <h1 className="font-medium text-lg">LinkedIn News</h1>
        <Info size={16} className="text-gray-600" />
      </div>
      <div>
        {newsItems.map((item, index) => {
          return (
            <div
              key={index}
              className="px-3 py-2 hover:bg-gray-200 transition hover:cursor-pointer"
            >
              <h1 className="text-sm font-medium text-gray-800">
                {item.heading}
              </h1>
              <p className="text-xs text-gray-600">{item.subHeading}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default News
