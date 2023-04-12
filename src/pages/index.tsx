import Button from '@/components/commons/button'
import Card from '@/components/commons/card/index.'
import Flex from '@/components/commons/flex'
import Icons from '@/components/commons/icons'
import Text from '@/components/commons/text'
import Layout from '@/components/layout-page'
import { ColorsThemeEnum } from '@/types/color-theme'
import { ThemeSizeEnum, ThemeTextComponentEnum } from '@/types/commons'

export default function Home() {
  return (
    <Layout>
      <Flex>
        <Card background='#FFFFFF'>
          <Flex alignItems='center' justifyContent='center'>
            <Icons type='wallet' height='30px' width='30px' />
            <div style={{ marginRight: 'auto' }}>
              <Text component={ThemeTextComponentEnum.Label}>Total Saldo</Text>
              <Text component={ThemeTextComponentEnum.H4} mt='0' mb='0'>Rp. 3.000.000</Text>
            </div>
            <Flex flexDirection='column'>
              <Button
                id='button-add'
                variant={ColorsThemeEnum.Secondary}
                size={ThemeSizeEnum.Sm}
                icon='plus'
              />
            </Flex>
          </Flex>
        </Card>
        <br />

        <Card background='#FFFFFF'>
          <Flex alignItems='center' justifyContent='center'>
            <Icons type='wallet' height='30px' width='30px' />
            <div style={{ marginRight: 'auto' }}>
              <Text component={ThemeTextComponentEnum.Label}>Total Nilai Aset</Text>
              <Text component={ThemeTextComponentEnum.H4} mt='0' mb='0'>Rp. 3.000.000</Text>
            </div>
            <Flex flexDirection='column'>
              <Button
                id='button-add'
                variant={ColorsThemeEnum.Secondary}
                size={ThemeSizeEnum.Sm}
                icon='plus'
              />
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <br />
      <Flex>
        <Card background='#FFFFFF'>
          <Flex alignItems='center' justifyContent='center'>
            <div>
              <Text component={ThemeTextComponentEnum.Label}>Total Balance</Text>
              <Text component={ThemeTextComponentEnum.H4} mt='0' mb='0'>Rp. 3.000.000</Text>
            </div>
          </Flex>
        </Card>
        <Card background='#FFFFFF'>
          <Flex alignItems='center' justifyContent='center'>
            <div>
              <Text component={ThemeTextComponentEnum.Label}>Total Period Change</Text>
              <Text component={ThemeTextComponentEnum.H4} mt='0' mb='0'>Rp. 3.000.000</Text>
            </div>
          </Flex>
        </Card>
        <Card background='#FFFFFF'>
          <Flex alignItems='center' justifyContent='center'>
            <div>
              <Text component={ThemeTextComponentEnum.Label}>Total Period Expenses</Text>
              <Text component={ThemeTextComponentEnum.H4} mt='0' mb='0'>Rp. 3.000.000</Text>
            </div>
          </Flex>
        </Card>
        <Card background='#FFFFFF'>
          <Flex alignItems='center' justifyContent='center'>
            <div>
              <Text component={ThemeTextComponentEnum.Label}>Total Period Income</Text>
              <Text component={ThemeTextComponentEnum.H4} mt='0' mb='0'>Rp. 3.000.000</Text>
            </div>
          </Flex>
        </Card>
      </Flex>
    </Layout>
  )
}
