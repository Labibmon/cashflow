import Card from '@/components/commons/card/index.'
import Flex from '@/components/commons/flex'
import Layout from '@/components/layout-page'

export default function Home() {
  return (
    <Layout>
      <Flex flexDirection='row' alignContent={'space-between'}>
        <Card>Hallo</Card>
        <Card>Hallo</Card>
        <Card>Hallo</Card>
      </Flex>
    </Layout>
  )
}
