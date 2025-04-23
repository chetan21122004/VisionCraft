import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <div className="flex p-1 items-center justify-center rounded-md bg-emerald-500 text-white font-bold">
        VisionCraft
      </div>
    </Link>
  )
}

