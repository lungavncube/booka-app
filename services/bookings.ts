import { supabase } from '../lib/supabaseClients'

export const createBooking = async (booking: {
  name: string
  email: string
  service: string
  booking_date: string
}) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([booking])

  if (error) throw error
  return data
}

export const getBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('booking_date', { ascending: true })

  if (error) throw error
  return data
}