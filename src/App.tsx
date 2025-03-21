import { lazy, type Component } from 'solid-js'
import { Router } from '@solidjs/router'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
const queryClient = new QueryClient()

const routes = {
  path: '/home',
  component: lazy(() => import('./Components/HomeScreen')),
}
const App: Component = () => {
  return (
    <div class="bg-gray-200 h-screen">
      <QueryClientProvider client={queryClient}>
        <Router>{routes}</Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
