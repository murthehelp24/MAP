import { create } from 'zustand'
import { api } from '../lib/api'

const DutyStore = (set, get) => ({
  personnel: [],
  location: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    //fn body
    try {
      const personnel = await api.get('/personnel')
      const location = await api.get('/locations')
      set({
        personnel: personnel,
        location: location
      })
    } catch (error) {
      console.log(error)
    }
  }
})

const useDutyStore = create(DutyStore)


export default useDutyStore