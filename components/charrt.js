import Plot from 'react-plotly.js';

export default function Charrt(obj) {



return (

 <div>

<Plot
        data={[
          
          {
            values: [obj.itemsininventory,obj.itemssold],
            labels: ['Inventory', 'Sold'],
            type: 'pie'
          },
          
        ]}
        layout={ {width: 500, height: 340, title: 'Data Visualisation'} }
      />

 </div>
 
)

}