import { useState } from 'react'
import { IconGrid, IconFlask, IconChartBar } from './Icons'

const TABS = [
  {
    id: 'case-studies',
    label: 'Case Studies',
    icon: <IconGrid size={16} />,
  },
  {
    id: 'experiments',
    label: 'Experiments',
    icon: <IconFlask size={16} />,
  },
  {
    id: 'visualizations',
    label: 'Visualizations',
    icon: <IconChartBar size={16} />,
  },
]

export default function ProjectTabs({ children }) {
  const [active, setActive] = useState('case-studies')

  const panels = {}
  if (children) {
    ;(Array.isArray(children) ? children : [children]).forEach((child) => {
      if (child?.props?.tabId) panels[child.props.tabId] = child
    })
  }

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Project categories"
        className="flex gap-1 p-1 bg-[#1e293b] border border-[#334155] rounded-xl mb-8"
      >
        {TABS.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={[
                'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg',
                'text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5',
              ].join(' ')}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab panels */}
      {TABS.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== tab.id}
          className="animate-fade-up"
        >
          {panels[tab.id]}
        </div>
      ))}
    </div>
  )
}

/** Wrap each tab's content with this so ProjectTabs can key it by tabId */
export function TabPanel({ tabId, children }) {
  return <>{children}</>
}
