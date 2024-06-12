import {
  Category,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  StepAreaSeries,
  StepLineSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

const areaData = [
  { time: "1:00 AM", value: 18000 },
  { time: "6:00 AM", value: 36000 },
  { time: "12:00 PM", value: 20000 },
  { time: "1:00 PM", value: 50000 },
  { time: "6:00 PM", value: 62000 },
  { time: "12:00 AM", value: 59000 },
  { time: "", value: 59000 },
];
const lineData = [
  { time: "1:00 AM", value: 21000 },
  { time: "6:00 AM", value: 30000 },
  { time: "12:00 PM", value: 16000 },
  { time: "1:00 PM", value: 22000 },
  { time: "6:00 PM", value: 18000 },
  { time: "12:00 AM", value: 40000 },
  { time: "", value: 40000 },
];

interface AxisLabelRenderEventArgs {
  axis: {
    name: string;
  };
  text: string;
  value: number;
}

const axisLabelRender = (val: AxisLabelRenderEventArgs) => {
  if (val.axis.name === "primaryYAxis") {
    val.text = `${val.value / 1000}k`;
  }
};

const SteppedAreaChart = () => {
  return (
    <ChartComponent
      primaryXAxis={{
        valueType: "Category",
        title: "Time",
        labelIntersectAction: "Rotate45",
        labelPlacement: "OnTicks",
      }}
      primaryYAxis={{
        // title: "Value",
        minimum: 10000,
        maximum: 100000,
        interval: 20000,
        majorGridLines: { width: 0 },
        labelFormat: "{value}k",
      }}
      tooltip={{ enable: true }}
      border={{ width: 0 }}
      height="350px"
      axisLabelRender={axisLabelRender}
    >
      <Inject services={[StepAreaSeries, StepLineSeries, Category, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={areaData}
          xName="time"
          yName="value"
          type="StepArea"
          name="Value"
          // marker={{ dataLabel: { visible: true } }}
          fill="#BEEC1A"
          // border={{ width: 2, color: "#000" }}
        />
        <SeriesDirective
          dataSource={lineData} // Use your step line data here
          xName="time"
          yName="value"
          type="StepLine"
          name="Step Line"
          fill="#000000"
          width={3}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default SteppedAreaChart;
