import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { IPurchaseFrequencyListItem } from '../../types'

const Chart = ({ data }: { data: IPurchaseFrequencyListItem[] }) => {
  const computedData = data.map((item) => {
    return {
      ...item,
      name: `${item.range.split(' - ')[1]}이하`,
    }
  })
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={700}
        height={400}
        data={computedData}
        barSize={20}
        barCategoryGap={5}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart
