import { forwardRef, useState } from 'react'
import { cn } from '~/utils/cn'
import { ProjectImage } from '~/types/portfolio'
import { Button, Card } from '~/components/ui'
import { CloseIcon, ArrowRightIcon } from '~/components/ui'

interface ProjectGalleryProps {
  images: ProjectImage[]
  className?: string
}

export const ProjectGallery = forwardRef<HTMLDivElement, ProjectGalleryProps>(
  ({ images, className, ...props }, ref) => {
    const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (image: ProjectImage, index: number) => {
      setSelectedImage(image)
      setCurrentIndex(index)
    }

    const closeLightbox = () => {
      setSelectedImage(null)
    }

    const nextImage = () => {
      const nextIndex = (currentIndex + 1) % images.length
      setCurrentIndex(nextIndex)
      setSelectedImage(images[nextIndex])
    }

    const prevImage = () => {
      const prevIndex = (currentIndex - 1 + images.length) % images.length
      setCurrentIndex(prevIndex)
      setSelectedImage(images[prevIndex])
    }

    if (images.length === 0) {
      return null
    }

    return (
      <>
        <div ref={ref} className={cn('space-y-6', className)} {...props}>
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <Card
                key={image.id}
                variant="default"
                padding="none"
                hover
                className="group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative aspect-video bg-slate-100">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {image.caption && (
                  <div className="p-4">
                    <p className="text-sm text-slate-600">{image.caption}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <CloseIcon size="sm" />
              </Button>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  >
                    <ArrowRightIcon size="sm" className="rotate-180" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  >
                    <ArrowRightIcon size="sm" />
                  </Button>
                </>
              )}

              {/* Image */}
              <div className="relative bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Caption */}
                {selectedImage.caption && (
                  <div className="p-6 bg-white">
                    <p className="text-slate-700 text-center">{selectedImage.caption}</p>
                  </div>
                )}
              </div>

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} of {images.length}
                </div>
              )}
            </div>

            {/* Background Click to Close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            />
          </div>
        )}
      </>
    )
  }
)

ProjectGallery.displayName = 'ProjectGallery'
