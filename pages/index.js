import Container from '../components/container'


export default function Home() {
 
  return <>
    <Container sectionName="landing" sectionIndex={1}/>
    <Container sectionName="recentWork" sectionIndex={2}/>
    <Container sectionName="links" sectionIndex={3}/>
    <Container sectionName="contact" sectionIndex={4}/>
  </>
}