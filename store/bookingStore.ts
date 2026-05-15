import { create } from 'zustand'

interface BookingState {
  service: string
  date: string
  time: string
  provider: string
  setBooking: (data: Partial<BookingState>) => void
}

export const useBookingStore = create<BookingState>((set) => ({
  service: '',
  date: '',
  time: '',
  provider: '',

  setBooking: (data) =>
    set((state) => ({
      ...state,
      ...data,
    })),
}))