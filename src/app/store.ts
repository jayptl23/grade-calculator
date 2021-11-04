import { configureStore } from '@reduxjs/toolkit'
import assessmentsReducer from '../features/assessmentsSlice'
import gradeReducer from '../features/gradeSlice'

export const store = configureStore({
  reducer: {
    assessments: assessmentsReducer,
    finalGrade: gradeReducer
    // posts: postsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch