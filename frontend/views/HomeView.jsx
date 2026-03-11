import Image from 'next/image';
import Link from 'next/link';
import HeroBannerCarousel from '@/components/HeroBannerCarousel';
import RecentProjectsSlider from '@/components/RecentProjectsSlider';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function HomeView({ heroSlides, services, projects, testimonials }) {
  const recentProjects = projects.slice(0, 6);
  const projectCategories = [
    'Interior design',
    'Commercial architect',
    'Landscape architect',
    'Civic project',
  ];

  const testimonialList = (testimonials || []).slice(0, 2);

  return (
    <main className="bg-[#efe8de] text-[#1f1a15]">
      <ScrollToTopButton />
      {/* Hero */}
      <HeroBannerCarousel slides={heroSlides} />

      {/* About */}
      <section className="bg-white -mt-8 pt-14 pb-14 rounded-t-[40px]">
        <div className="max-w-6xl mx-auto px-7 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex items-center gap-3 text-sm text-[#6b5a4a]">
              <span className="w-2 h-2 rounded-full bg-[#6b5a4a]" />
              <span className="uppercase tracking-[0.2em] text-xs">About Us</span>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg sm:text-xl text-[#2b241d] leading-relaxed">
                Scholar Builders & Interior is an architectural and construction company
                incorporated at Perumbavoor, Ernakulam District, Kerala.
              </p>
              <div className="border-t border-[#e5dfd6] mt-8" />
              <p className="text-sm text-[#7b6a59] mt-6 max-w-2xl">
                We provide building construction and consultancy services in Kerala, delivering
                projects within fixed budgets and time frames. Services include commercial and
                industrial building construction, town planning approvals, Pollution Control Board
                approvals, Fire & Rescue NOC, District Medical Office NOC, industrial registration,
                project subsidy and industrial subsidy support.
              </p>
            </div>
            <div className="lg:ml-auto">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 border border-[#2b241d] text-[#2b241d] px-4 py-2 rounded-full text-[11px] font-poppins font-semibold whitespace-nowrap transition-all duration-300 hover:bg-[#2b241d] hover:text-white"
              >
                View All
                <span className="w-6 h-6 rounded-full border border-black text-black flex items-center justify-center text-[10px] leading-none bg-white transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-transparent group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RecentProjectsSlider projects={recentProjects} />

      {/* Right-side collage section */}
      <section className="bg-[#efe8de] py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-3 gap-4">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="text-center">
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <p className="text-[10px] text-[#6f5f50] mt-2">{project.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6f5f50] mb-4">Our Architects</p>
              <div className="divide-y divide-[#ded5ca] bg-white rounded-2xl">
                {services.slice(0, 5).map((svc) => (
                  <div key={svc.id} className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 rounded-full bg-[#efe8de] flex items-center justify-center text-xs font-semibold text-[#6f5f50]">
                      {svc.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-poppins font-semibold text-[#2b241d]">
                        {svc.title}
                      </p>
                      <p className="text-xs text-[#8b7a69]">
                        {svc.description.slice(0, 48)}...
                      </p>
                    </div>
                    <span className="text-xs text-[#8b7a69]">View Profile</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-[28px] overflow-hidden h-64">
              <Image
                src={projects[5]?.image || projects[2]?.image}
                alt="Project Categories"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                <h3 className="font-playfair text-2xl">Project</h3>
                <p className="font-playfair italic text-xl -mt-1">Categories</p>
                <ul className="text-xs mt-3 space-y-1 text-white/80">
                  {projectCategories.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-white/90 text-[#1f1a15] px-3 py-1.5 rounded-full text-[11px] font-poppins font-semibold w-fit mt-4"
                >
                  Contact Us
                  <span className="w-5 h-5 rounded-full bg-[#1f1a15] text-white flex items-center justify-center text-[10px]">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6f5f50] mb-4">
                Testimonials
              </p>
              <div className="space-y-6">
                {testimonialList.map((t) => (
                  <div key={t.id} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#efe8de] flex items-center justify-center text-xs font-semibold text-[#6f5f50] shrink-0">
                      {t.avatar || t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-poppins font-semibold text-[#2b241d]">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-[#8b7a69]">{t.role}</p>
                      <p className="text-xs text-[#8b7a69] mt-2">
                        {t.review}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







