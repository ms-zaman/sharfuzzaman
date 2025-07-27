import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects } from '~/data/projects'
import { getProjectBySlug, getRelatedProjects, formatProjectDateRange, getCategoryDisplayName } from '~/utils/portfolio'
import { Section, Button, Card, CardHeader, CardTitle, CardDescription } from '~/components/ui'
import { ProjectCardCompact } from '~/components/portfolio'
import { ArrowRightIcon, ExternalLinkIcon } from '~/components/ui'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = getProjectBySlug(projects, params.slug)
    if (!project) {
      throw notFound()
    }
    return { project }
  },
})

function ProjectDetail() {
  const { project } = Route.useLoaderData()
  const relatedProjects = getRelatedProjects(projects, project, 3)
  
  const liveLink = project.links.find(link => link.type === 'live')
  const githubLink = project.links.find(link => link.type === 'github')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section variant="gradient" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link to="/work" className="text-blue-600 hover:text-blue-700 font-medium">
                ← Back to Work
              </Link>
            </nav>

            {/* Project Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  {getCategoryDisplayName(project.category)}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>{formatProjectDateRange(project)}</span>
                <span>•</span>
                <span>{project.role.join(', ')}</span>
                {project.teamSize && (
                  <>
                    <span>•</span>
                    <span>Team of {project.teamSize}</span>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {liveLink && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.open(liveLink.url, '_blank')}
                  >
                    <ExternalLinkIcon size="sm" className="mr-2" />
                    View Live Project
                  </Button>
                )}
                {githubLink && (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open(githubLink.url, '_blank')}
                  >
                    View Source Code
                    <ArrowRightIcon size="sm" className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            ) : (
              <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                <div className="text-slate-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-slate-300 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg">Project Preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section variant="default" spacing="md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech.id}
                className={`px-4 py-2 font-medium rounded-lg ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section variant="muted" spacing="lg">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Challenge */}
          <Card variant="default" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl mb-4">The Challenge</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.challenge}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Solution */}
          <Card variant="default" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl mb-4">The Solution</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.solution}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Results */}
          <Card variant="default" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl mb-4">The Results</CardTitle>
              {project.results && project.results.length > 0 ? (
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {result.value}
                      </div>
                      <div className="font-medium text-slate-900 mb-1">
                        {result.label}
                      </div>
                      {result.description && (
                        <div className="text-sm text-slate-600">
                          {result.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <CardDescription className="text-base">
                  Project completed successfully with positive client feedback and improved user experience.
                </CardDescription>
              )}
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Long Description */}
      <Section variant="default" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>{project.longDescription}</p>
          </div>
        </div>
      </Section>

      {/* Process */}
      {project.process && project.process.length > 0 && (
        <Section variant="muted" spacing="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.process.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section variant="default" spacing="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Related Projects
            </h2>
            <p className="text-xl text-slate-600">
              Other projects you might find interesting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <ProjectCardCompact
                key={relatedProject.id}
                project={relatedProject}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/work">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRightIcon size="sm" className="ml-2" />
              </Button>
            </Link>
          </div>
        </Section>
      )}
    </div>
  )
}
