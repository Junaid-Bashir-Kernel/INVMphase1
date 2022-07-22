import Plot from 'react-plotly.js';

export default function Charrt() {


return (

 <div>

<Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 300, height: 240, title: 'A Fancy Plot'} }
      />

 </div>
 
)

}