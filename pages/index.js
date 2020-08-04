import Container from '../components/container'


export default function Home() {
 
  return <>
    <Container endpoint="landing" section={1}/>
    <Container endpoint="recentWork" section={2}/>
    <Container endpoint="links" section={3}/>
    <Container endpoint="contact" section={4}/>
  </>
}