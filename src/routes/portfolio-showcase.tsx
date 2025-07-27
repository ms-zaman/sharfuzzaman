import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Section, SectionHeader, Button } from '~/components/ui'
import { ProjectGrid, ProjectCard, ProjectCardCompact } from '~/components/portfolio'
import { projects } from '~/data/projects'

export const Route = createFileRoute('/portfolio-showcase')({
  component: PortfolioShowcase,
})

function PortfolioShowcase() {
  const [layout, setLayout] = useState<'grid' | 'list' | 'compact'>('grid')
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Section variant="gradient" spacing="lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Portfolio Showcase
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Testing our project card components and layouts
          </p>
        </div>
      </Section>

      {/* Layout Controls */}
      <Section variant="default" spacing="md">
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={layout === 'grid' ? 'primary' : 'outline'}
            onClick={() => setLayout('grid')}
          >
            Grid View
          </Button>
          <Button
            variant={layout === 'list' ? 'primary' : 'outline'}
            onClick={() => setLayout('list')}
          >
            List View
          </Button>
          <Button
            variant={layout === 'compact' ? 'primary' : 'outline'}
            onClick={() => setLayout('compact')}
          >
            Compact View
          </Button>
        </div>

        {/* Project Grid */}
        <ProjectGrid
          projects={projects}
          layout={layout}
          showLoadMore={true}
          initialCount={4}
        />
      </Section>

      {/* Individual Card Examples */}
      <Section variant="muted" spacing="lg">
        <SectionHeader 
          title="Individual Card Examples"
          description="Different card variants and configurations"
        />
        
        <div className="space-y-12">
          {/* Featured Project Card */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Featured Project Card</h3>
            <div className="max-w-md">
              <ProjectCard
                project={projects.find(p => p.featured) || projects[0]}
                showMetrics={true}
              />
            </div>
          </div>

          {/* Compact Cards */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Compact Cards</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
              {projects.slice(0, 4).map((project) => (
                <ProjectCardCompact
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>

          {/* List Layout */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">List Layout</h3>
            <div className="space-y-6">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  layout="list"
                  showMetrics={true}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section variant="default" spacing="lg">
        <SectionHeader 
          title="Portfolio Statistics"
          description="Overview of the project data"
        />
        
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
            <div className="text-slate-600">Total Projects</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-slate-600">Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-slate-600">Featured</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {Array.from(new Set(projects.flatMap(p => p.technologies.map(t => t.id)))).length}
            </div>
            <div className="text-slate-600">Technologies</div>
          </div>
        </div>
      </Section>
    </div>
  )
}
