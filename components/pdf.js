import useSWR from "swr"
import Badge from "@leafygreen-ui/badge"
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function ItemList(){

 const fetcher = (...args) => fetch(...args).then((res) => res.json())

 let url=`/api/makepdf`

 const { data, error } = useSWR(url, fetcher)

 if (error) return <div>Failed to load</div>
 if (!data) return <div>  <Badge variant="red" className="my-badge">Loading....</Badge></div>
 console.log(data)


 const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: ""
  },
  
});




return (
 <Document>

    <Page size="A4" style={styles.page}>
    

      <View style={{color:"tomato",  textAlign: 'center',fontFamily:"courier new"}}>
        <Text>Inventory worth {data.amount}</Text>
      </View>


      <View  style={{color:"green",  textAlign: 'center',fontFamily:"courier new"}}>
        <Text>Sale Worth {data.soldamount}</Text>
      </View>

      <View  style={{color:"orangered",  textAlign: 'center',fontFamily:"courier new"}}>
        <Text>Inventory count {data.invitems}</Text>
      </View>

      
      <View  style={{color:"green",  textAlign: 'center',fontFamily:"courier new"}}>
        <Text>Sale count {data.solditems}</Text>
      </View>


    </Page>
  </Document>
 
)

}