import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Stage } from './components/Stage';
import { AnimatedSection } from './components/AnimatedSection';
import { Cloud, Database, Code, CheckCircle2, Target, Rocket } from 'lucide-react';
import { Timeline } from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative">
        <AnimatedSection className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Azure Infrastructure PTC Journey</h2>
            <p className="text-lg text-gray-600 mb-8">
              A comprehensive guide to achieving infrastructure excellence with Azure PTC support
            </p>
          </div>
        </AnimatedSection>

        {/* Stage 1 */}
        <div className="mb-24">
          <Stage
            title="Stage 1: Initial Engagement and Early Wins"
            stageNumber={1}
            icon={<Target className="w-6 h-6" />}
            sections={[
              {
                title: "Focus Areas",
                content: [
                  "Establishing credibility with new customers",
                  "Understanding Azure's core services",
                  "Planning foundational architectures and best practices"
                ]
              },
              {
                title: "PTC Contributions",
                content: [
                  "Guidance on typical customer requirements",
                  "Foundational architecture reviews",
                  "Implementation assistance for early deployments"
                ]
              },
              {
                title: "Outcomes",
                content: [
                  "Enhanced trust from new customers",
                  "Accelerated onboarding process",
                  "Clear demonstration of technical proficiency"
                ]
              }
            ]}
          />
          <Timeline progress={25} />
        </div>

        {/* Stage 2 */}
        <div className="mb-24">
          <Stage
            title="Stage 2: Expansion and Repeatable Success"
            stageNumber={2}
            icon={<Rocket className="w-6 h-6" />}
            sections={[
              {
                title: "Focus Areas",
                content: [
                  "Scaling workloads and solution offerings",
                  "Implementing complex services",
                  "Refining technical strategies"
                ]
              },
              {
                title: "PTC Contributions",
                content: [
                  "Architecture best practices & deployment strategies",
                  "Innovation mindset development",
                  "Implementation & reference architectures"
                ]
              },
              {
                title: "Outcomes",
                content: [
                  "Consistent delivery of high-quality solutions",
                  "Broader range of Azure offerings",
                  "Increased partner confidence"
                ]
              }
            ]}
          />
          <Timeline progress={50} />
        </div>

        {/* Stage 3 */}
        <div className="mb-24">
          <Stage
            title="Stage 3: Maturity and Specialized Capabilities"
            stageNumber={3}
            icon={<CheckCircle2 className="w-6 h-6" />}
            sections={[
              {
                title: "Focus Areas",
                content: [
                  "Handling mission-critical workloads",
                  "Maintaining customer satisfaction",
                  "Demonstrating technical excellence"
                ]
              },
              {
                title: "PTC Contributions",
                content: [
                  "Advisory on specialized workloads",
                  "Solution enhancement and scalability",
                  "Customer retention strategies"
                ]
              },
              {
                title: "Outcomes",
                content: [
                  "Advanced solution portfolio",
                  "Increased customer loyalty",
                  "Strong reputation in Azure solutions"
                ]
              }
            ]}
          />
          <Timeline progress={75} />
        </div>

        {/* Stage 4 */}
        <div className="mb-24">
          <Stage
            title="Ongoing Benefits & Future Growth"
            stageNumber={4}
            icon={<Cloud className="w-6 h-6" />}
            sections={[
              {
                title: "Technical Excellence",
                content: [
                  "Continuous architecture validation",
                  "Risk mitigation strategies",
                  "Future-proofing solutions"
                ]
              },
              {
                title: "Business Growth",
                content: [
                  "Enhanced market positioning",
                  "Expanded service offerings",
                  "Strong customer relationships"
                ]
              },
              {
                title: "Community Impact",
                content: [
                  "Industry leadership",
                  "Knowledge sharing",
                  "Ecosystem collaboration"
                ]
              }
            ]}
          />
          <Timeline progress={100} />
        </div>

        <AnimatedSection className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Azure Journey?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Start your transformation with an Azure Infrastructure PTC today. From initial deployment
                to advanced enterprise solutions, we're here to guide your success.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
              >
                Connect with a PTC
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Azure Partner Technical Consultant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;