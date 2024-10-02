"use client"

import { useState, useCallback } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Label } from "@/app/components/ui/label"
import { ChevronLeft, ChevronRight, Truck, Package } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns"
import { useLoadScript, Autocomplete } from "@react-google-maps/api"

const libraries: ("places")[] = ["places"]

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [location, setLocation] = useState("")
  const [serviceType, setServiceType] = useState<"delivery" | "pickup">("delivery")

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  })

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = monthStart
  const endDate = monthEnd

  const dateFormat = "MMMM yyyy"
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const timeSlots = [
    "10:00 am", "10:30 am", "11:00 am", "11:30 am",
    "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm",
    "2:00 pm", "2:30 pm"
  ]

  const onLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()
      if (place.formatted_address) {
        setLocation(place.formatted_address)
      } else if (place.name) {
        setLocation(place.name)
      }
    })
  }, [])

  if (loadError) return <div>Error loading maps</div>
  if (!isLoaded) return <div>Loading maps</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <h1 className="text-3xl font-bold mb-6">Book a Service</h1>
      <p className="text-gray-600 mb-8">Choose your service type, date, and time</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="text-base">Service Type</Label>
                  <RadioGroup
                    defaultValue="delivery"
                    className="grid grid-cols-2 gap-4 mt-2"
                    onValueChange={(value) => setServiceType(value as "delivery" | "pickup")}
                  >
                    <div>
                      <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                      <Label
                        htmlFor="delivery"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <Truck className="mb-3 h-6 w-6" />
                        Delivery
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                      <Label
                        htmlFor="pickup"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <Package className="mb-3 h-6 w-6" />
                        Pickup
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label className="text-base">Select a Date</Label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-4">
                      <Button onClick={prevMonth} variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold">
                        {format(currentMonth, dateFormat)}
                      </span>
                      <Button onClick={nextMonth} variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center font-medium text-sm">
                          {day}
                        </div>
                      ))}
                      {days.map((day, idx) => (
                        <Button
                          key={idx}
                          variant={isSameDay(day, selectedDate) ? "default" : "ghost"}
                          className={`p-2 ${
                            !isSameMonth(day, monthStart)
                              ? "text-gray-300"
                              : isSameDay(day, selectedDate)
                              ? "bg-primary text-primary-foreground"
                              : ""
                          }`}
                          onClick={() => setSelectedDate(day)}
                        >
                          {format(day, "d")}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <Label className="text-base">Select a Time</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Service Type</h3>
                  <p className="text-sm text-gray-600">
                    {serviceType === "delivery" ? "Delivery" : "Pickup"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Date & Time</h3>
                  <p className="text-sm text-gray-600">
                    {selectedDate && format(selectedDate, "d MMMM yyyy")} at {selectedTime}
                  </p>
                </div>
                <div>
                  <Label htmlFor="location" className="font-semibold">
                    {serviceType === "delivery" ? "Delivery" : "Pickup"} Location
                  </Label>
                  <Autocomplete
                    onLoad={onLoad}
                  >
                    <Input
                      id="location"
                      placeholder={`Enter ${serviceType === "delivery" ? "delivery" : "pickup"} location`}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-1"
                    />
                  </Autocomplete>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Staff Member #1</p>
                  <p className="text-sm text-gray-600">1 hr</p>
                  <p className="font-semibold">RM 35</p>
                </div>
                <Button className="w-full">Confirm Booking</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default BookingPage