import { useRouter } from 'next/router'

import Container from '../components/container'

export default function Home() {
  const router = useRouter();
  return <Container router={router}/>
}