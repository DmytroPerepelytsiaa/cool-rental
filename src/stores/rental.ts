import { defineStore } from 'pinia';
import type { Rental } from '@models/rental';
import { RENTAL_MOCKS } from '@mocks/rentals';

export const useRentalStore = defineStore('rental', {
  state: () => ({
    rentals: RENTAL_MOCKS,
  }),
  getters: {
    getById: (state) => (id: string) =>
      state.rentals.find((rental) => rental.id === id),
  },
  actions: {
    setRentals(rentals: Rental[]) {
      this.rentals = rentals;
    },
  },
});
