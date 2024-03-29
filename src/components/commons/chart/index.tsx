import { FC } from "react"
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import styles from '@/styles/components/Chart.module.scss'

export type DataListChart = {
  label?: string,
  value?: number,
  backgroundColor?: string,
  borderColor?: string,
}

export type ChartProps = {
  data: DataListChart[]
}

const components = [
  // ["Line", Line],
  // ["Bar", Bar],
  // ["Bar (Stacked)", BarStacked],
  // ["Bar (Horizontal)", BarHorizontal],
  // ["Bar (Horizontal + Stacked)", BarHorizontalStacked],
  // ["Band", Band],
  // ["Area", Area],
  // ["Bubble", Bubble],
  // ["Steam", Steam],
  // ["Spark Chart", SparkChart],
  // ["Multiple Axes", MultipleAxes],
  // ["Interaction Modes", InteractionMode],
  // ["Dark Mode", DarkMode],
  // ["Dynamic / Overflow Container", DynamicContainer],
  // ["Custom Styles", CustomStyles],
  // ["Synced Cursors", SyncedCursors],
  // ["Stress Test", StressTest],
];

const Chart: FC<ChartProps> = ({
  // data
}) => {
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  return (
    <div
      className={styles.chart}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;