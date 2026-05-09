import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import AstraDocsPage from './pages/AstraDocsPage'
import AstraPointPage from './pages/AstraPointPage'
import AstraFinancePage from './pages/AstraFinancePage'
import AssistantPage from './pages/AssistantPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />
        <Route
          path="/astradocs"
          element={
            <MainLayout>
              <AstraDocsPage />
            </MainLayout>
          }
        />
        <Route
          path="/astrapoint"
          element={
            <MainLayout>
              <AstraPointPage />
            </MainLayout>
          }
        />
        <Route
          path="/astrafinance"
          element={
            <MainLayout>
              <AstraFinancePage />
            </MainLayout>
          }
        />
        <Route
          path="/assistant"
          element={
            <MainLayout>
              <AssistantPage />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
