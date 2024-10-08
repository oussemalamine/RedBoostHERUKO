import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

const WidgetsDropdown = ({ className }) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  const entrepreneurs = useSelector((state) => state.entrepreneurs.entrepreneurs)
  const programs = useSelector((state) => state.programsSlice.programs)
  const sessions = useSelector((state) => state.sessionsSlice.sessions)
  const users = useSelector((state) => state.usersSlice.users)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  return (
    <CRow className={className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/statistics/users" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="primary"
            value={users.length}
            title="Users"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                ref={widgetChartRef1}
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: getStyle('--cui-primary'),
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: { display: false, drawBorder: false },
                      ticks: { display: false },
                    },
                    y: {
                      min: 30,
                      max: 89,
                      grid: { display: false },
                      ticks: { display: false },
                    },
                  },
                  elements: {
                    line: { borderWidth: 1, tension: 0.4 },
                    point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* People reached on social media*/ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/entrepreneurs" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="info"
            value={entrepreneurs.length}
            title="Entrepreneurs"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                ref={widgetChartRef2}
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: getStyle('--cui-info'),
                      data: [1, 18, 9, 17, 34, 22, 11],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: { display: false, drawBorder: false },
                      ticks: { display: false },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      grid: { display: false },
                      ticks: { display: false },
                    },
                  },
                  elements: {
                    line: { borderWidth: 1 },
                    point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* People reached on social media*/ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/startupsAccelerated" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="warning"
            value={programs.length}
            title="Startups Accelerated"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: { display: false },
                    y: { display: false },
                  },
                  elements: {
                    line: { borderWidth: 2, tension: 0.4 },
                    point: { radius: 0, hitRadius: 10, hoverRadius: 4 },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* People reached on social media*/ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="danger"
            value={sessions.length}
            title="Startups Accelerated"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* Entrepreneurs Trained */ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="danger"
            value={sessions.length}
            title="Entrepreneurs Trained"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* Applications*/ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="danger"
            value={sessions.length}
            title="Applications"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* People reached on social media*/ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="secondary"
            value={sessions.length}
            title="People reached on social media"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* partners */ }
      <CCol sm={6} xl={4} xxl={3}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="success"
            value={sessions.length}
            title="Partners"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* partners */ }
<CCol sm={12} xl={8} xxl={6}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="success"
            value={sessions.length}
            title="Partners"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>

{/* partners */ }
<CCol sm={12} xl={8} xxl={6}>
        <Link to="/Dash/statistics/sessions" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            color="primary"
            value={sessions.length}
            title="Partners"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December',
                    'January', 'February', 'March', 'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false, drawTicks: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false, drawTicks: false, drawBorder: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </Link>
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
}

export default WidgetsDropdown
