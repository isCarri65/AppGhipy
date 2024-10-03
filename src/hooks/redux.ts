import { RootState } from '../redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()