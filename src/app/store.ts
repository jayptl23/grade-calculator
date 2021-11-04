import { configureStore } from '@reduxjs/toolkit'
import assessmentsReducer from '../features/assessmentsSlice'

export const store = configureStore({
  reducer: {
    assessments: assessmentsReducer
    // posts: postsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch