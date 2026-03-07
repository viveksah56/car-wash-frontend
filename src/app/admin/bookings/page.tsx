'use client'

import { useEffect, useState } from "react"
import DOMPurify from "dompurify"

export default function BookingPage() {

    const [services, setServices] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        try {

            const res = await fetch(
                "http://localhost:8000/api/v1/service-types"
            )

            const json = await res.json()

            setServices(json?.data?.data || [])

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="p-8 max-w-6xl mx-auto">

            <h1 className="text-3xl font-bold mb-6">
                Service Booking
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service: any) => (

                    <div
                        key={service.serviceTypeId}
                        className="p-6 border rounded-xl shadow-sm"
                    >

                        <h2 className="text-xl font-semibold">
                            {service.serviceName}
                        </h2>

                        <div
                            className="mt-3 text-sm text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    service.description || ""
                                )
                            }}
                        />

                        <div className="mt-4 flex justify-between">
                            <p>⏱ {service.durationMin} min</p>
                            <p className="font-semibold">
                                💰 ${service.memberPrice}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}