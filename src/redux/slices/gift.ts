import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGift } from '../../types/gift.ts'


// Define the initial state using that type
interface IInitialState {
  gift: IGift[]
}

export const initialState: IInitialState= {
  gift: []
}

const giftSlice = createSlice({
  name: 'giftState',
  initialState,
  reducers: {
    setGifts: (state, action: PayloadAction<IGift[]>) => {
      state.gift = action.payload;
    },
    resetGifts: (state) => {
      state.gift = []
    }
  },
})


export const { setGifts, resetGifts } = giftSlice.actions;

export default giftSlice.reducer
