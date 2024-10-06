import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryCard = ({name,bgColor,image}) => {
  return (
    <Link 
      href={`/blog?cat=`} 
      className="flex items-center justify-center gap-3 p-4 rounded-lg transition-transform hover:transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      {/* <Image
        src={image} 
        width={32} 
        height={32} 
        className="rounded-full object-cover"
      /> */}
      <span className="capitalize text-lg font-medium">{name}</span>
    </Link>
  )
}

export default CategoryCard
