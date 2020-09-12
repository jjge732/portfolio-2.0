import Container from '../components/container'

const sections = [
  "landing",
  "objective",
  "recentWork",
  "links",
  "contact"
]
export default function Home() {
 
  return <>
    {sections.map((sectionName, sectionIndex) => <Container sectionName={sectionName} sectionIndex={sectionIndex}/>)}
  </>
}