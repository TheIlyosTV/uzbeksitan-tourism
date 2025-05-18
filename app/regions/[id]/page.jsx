import Image from "next/image"
import Link from "next/link"
import { regions } from "../../data/regions"

export async function generateMetadata({ params }) {
  const { id } = await params
  const region = regions.find(r => r.id === Number(id))
  return {
    title: region ? `${region.name} | Your App Name` : "Region Not Found",
    description: region
      ? region.description
      : "Region information not available"
  }
}

export async function generateStaticParams() {
  return regions.map(region => ({
    id: String(region.id)
  }))
}

export default async function RegionPage({ params }) {
  const { id } = await params
  const region = regions.find(r => r.id === Number(id))

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800">Viloyat topilmadi</h2>
          <Link
            href="/regions"
            className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
          >
            Barcha viloyatlar
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 mt-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          {region.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
            <Image
              src={region.image}
              alt={region.name}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
              {region.description}
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Diqqatga sazovor joylar
            </h2>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
              {region.attractions.map((attraction, index) => (
                <li key={index} className="text-base">{attraction}</li>
              ))}
            </ul>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Mehmonxonalar
            </h2>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
              {region.hotels.map((hotel, index) => (
                <li key={index} className="text-base">{hotel}</li>
              ))}
            </ul>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Restoranlar
            </h2>
            <ul className="list-disc list-inside mb-8 text-gray-700 space-y-2">
              {region.restaurants.map((restaurant, index) => (
                <li key={index} className="text-base">{restaurant}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/plan-trip?region=${region.name}`}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md"
              >
                Sayohat buyurtma qilish
              </Link>
              <Link
                href="/regions"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-md"
              >
                Barcha viloyatlar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}