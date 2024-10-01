"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addDays } from "date-fns"

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [location, setLocation] = useState("")

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

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <h1 className="text-3xl font-bold mb-6">Booking Page</h1>
      <p className="text-gray-600 mb-8">Check out our availability and book the date and time that works for you</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Select a Date and Time</CardTitle>
            </CardHeader>
            <CardContent>
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
              <div className="grid grid-cols-2 gap-2">
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
              <Button className="mt-4 w-full" variant="link">
                Show all sessions
              </Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Same Day Pickup</h3>
                  <p className="text-sm text-gray-600">
                    {selectedDate && format(selectedDate, "d MMMM yyyy")} at {selectedTime}
                  </p>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <Input
                    id="location"
                    placeholder="Enter pickup location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Staff Member #1</p>
                  <p className="text-sm text-gray-600">1 hr</p>
                  <p className="font-semibold">RM 35</p>
                </div>
                <Button className="w-full">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default BookingPage;