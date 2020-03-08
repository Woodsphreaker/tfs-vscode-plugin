module.exports = {
  pageDefault: `
  import react from 'react'
  import TfsPageDefault from '../../../components/pages/pageDefault'

  const Index = ({ ...props }) => (
    <>
      <TfsPageDefault>Contents Here ...</TfsPageDefault>
    </>
  )

  export default Index`,

  pageDefaultComponent: `
  import react from 'react'
  import { Text, View } from 'react-native'
  
  const TfsPageDefault = ({ ...props }) => (
    <>
      <View>
        <Text>Contents Here ...</Text>
      </View>
    </>
  )

  export default TfsPageDefault

  `
}