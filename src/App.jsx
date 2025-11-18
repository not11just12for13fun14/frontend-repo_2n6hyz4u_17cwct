import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import CreativeExamples from './components/CreativeExamples'
import SocialProof from './components/SocialProof'
import WhatsIncluded from './components/WhatsIncluded'
import OSIntegration from './components/OSIntegration'
import FoundersCTA from './components/FoundersCTA'
import ApplicationForm from './components/ApplicationForm'

function App() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <WhyUs />
      <CreativeExamples />
      <SocialProof />
      <WhatsIncluded />
      <OSIntegration />
      <FoundersCTA />
      <ApplicationForm />
    </div>
  )
}

export default App
