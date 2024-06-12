import {
  Category,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  StepLineSeries,
} from "@syncfusion/ej2-react-charts";

const data = [
  { time: "1:00 AM", value: 15000 },
  { time: "6:00 AM", value: 12000 },
  { time: "12:00 PM", value: 25000 },
  { time: "1:00 PM", value: 35000 },
  { time: "", value: 35000 },
];

const SmallStepLineChart = () => {
  return (
    <ChartComponent
      primaryXAxis={{ valueType: "Category", visible: false }}
      primaryYAxis={{ visible: false }}
      width="145px"
      height="97px"
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: false }}
    >
      <Inject services={[StepLineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="time"
          yName="value"
          type="StepLine"
          width={2}
          fill="#BEEC1A"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default SmallStepLineChart;
