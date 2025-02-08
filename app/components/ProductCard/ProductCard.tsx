import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  title: string
  price: number
}

export function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <Link href="#" className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-center text-blue-color">{title}</h3>
        <p className="text-sm text-gray-500 text-center mb-0.5">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}