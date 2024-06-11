import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ActivityRoutes from './ActivityRoutes'
import ProgramCards from './ProgramCards'

const ProgramRoutes = () => {
  const programs = useSelector((state) => state.programsSlice.programs)
  return (
    <Routes>
      <Route path={'/Monitoring'} name= {'Program Monitoring'} element= {<ProgramCards/>} />
      {programs.map((program) => (
        <Route
          key={program._id}
          name={program.programTitle}
          path={`/${program.programTitle}/*`}
          element={<ActivityRoutes program={program} />}
        />
      ))}
    </Routes>
  )
}

export default ProgramRoutes
