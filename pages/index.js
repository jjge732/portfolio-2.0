import { useRouter } from 'next/router'

import Container from '../components/container'

export default function Home() {
  const router = useRouter();
  const {endpoint} = router.query
  console.log(endpoint)
  return <Container router={router}/>
}