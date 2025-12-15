import HeroSection from './components/HeroSection'
import DiscoverSection from './components/DiscoverSection'
import DestinationsSection from './components/DestinationsSection'
import StatsSection from './components/StatsSection'
import WhyUsSection from './components/WhyUsSection'
import ExploreDestinationSection from './components/ExploreDestinationSection'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import NewsletterSection from './components/NewsletterSection'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DiscoverSection />
      <DestinationsSection />
      <StatsSection />
      <WhyUsSection />
      <ExploreDestinationSection />
      <ReviewsSection />
      <ContactSection />
      <NewsletterSection />
      <WhatsAppButton />
    </div>
  )
}

export default App

