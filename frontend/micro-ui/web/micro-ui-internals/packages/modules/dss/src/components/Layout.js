import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import CustomAreaChart from "./CustomAreaChart";
import CustomBarChart from "./CustomBarChart";
import CustomHorizontalBarChart from "./CustomHorizontalBarChart";
import CustomPieChart from "./CustomPieChart";
import CustomTable from "./CustomTable";
import FilterContext from "./FilterContext";
import GenericChart from "./GenericChart";
import MetricChart from "./MetricChart";
import Summary from "./Summary";

let index = 1;

const showCustomLabel = (title, t) => {
  switch (title) {
    case "DSS_FSM_MONTHLY_WASTE_CAL":
      return `${t("DSS_WASTE_RECIEVED")} ${t(`DSS_WASTE_UNIT`)}`;
    default:
      return "";
  }
}

const Layout = ({ rowData, forHome = false }) => {
  const { t } = useTranslation();
  const { value } = useContext(FilterContext);
  const [searchQuery, onSearch] = useState("");
  const [chip, updateChip] = useState({});
  const [renderedCharts, setRenderedCharts] = useState({});
  const [chartRefs, setChartRefs] = useState({}); // Store chart refs by name
  const scrollContainerRef = useRef(null);

  const renderChart = (chart, title) => {
    switch (chart.chartType) {
      case "table":
        return <CustomTable data={chart} onSearch={searchQuery} chip={chip} title={title} />;
      case "donut":
        return <CustomPieChart
          data={chart}
          title={title}
          variant={chart?.variant}
        />;
      case "line":
        return <CustomAreaChart data={chart} title={title} />;
      case "horizontalBar":
        return (
          <CustomHorizontalBarChart
            data={chart}
            xAxisType="number"
            yAxisType="category"
            layout="vertical"
            yDataKey="name"
            xDataKey=""
            showDrillDown={false}
            title={title}
            horizontalBarv2={chart.horizontalBarv2 ? true : false}
          // horizontalBarv2={true} //for testing

          />
        );
      case "bar":
        return <CustomHorizontalBarChart data={chart} title={title} yAxisLabel={showCustomLabel(title, t)} />;
      default:
        return null;
    }
  };

  const renderVisualizer = (visualizer, key, chip, onChipChange) => {
    switch (visualizer.vizType) {
      case "metric-collection":
        return (
          <GenericChart header={visualizer.name} className={`metricsTable ${visualizer?.isHorizontalChart ? "dss-metric-horizontal" : ""}`} key={key} value={value} iconName={visualizer?.iconName}>
            <MetricChart data={visualizer} />
          </GenericChart>
        );
      case "chart":
        if (
          value?.filters?.tenantId?.length === 0 &&
          (visualizer?.charts?.[0].id === "fsmTopDsoByPerformance" || visualizer?.charts?.[0].id === "fsmBottomDsoByPerformance")
        )
          return null;
        return (
          <GenericChart
            key={key}
            value={value}
            header={visualizer?.charts?.[chip ? chip.filter((ele) => ele.active)?.[0]?.index : 0].chartType === "line" ? `${visualizer.name}` : visualizer.name}
            chip={chip}
            updateChip={onChipChange}
            showDownload={visualizer?.charts?.[0].chartType === "table"}
            showSearch={visualizer?.charts?.[0].chartType === "table" && !visualizer?.noSearch}
            className={`${visualizer?.charts?.[0].chartType === "table" && !visualizer?.isNotFullWidth ? "fullWidth" : visualizer?.charts?.[0]?.horizontalBarv2 ? "dss-horizontal-v2" : ""}`}
            onChange={(e) => onSearch(e.target.value)}
          >
            {/* {visualizer.charts.map((chart, key) => renderChart(chart, key))} */}
            {renderChart(visualizer?.charts?.[chip ? chip.filter((ele) => ele.active)?.[0]?.index : 0], visualizer.name)}
          </GenericChart>
        );
      case "performing-metric":
        if (
          value?.filters?.tenantId?.length > 0 &&
          (visualizer?.charts?.[0].id === "fsmTopUlbByPerformance" || visualizer?.charts?.[0].id === "fsmBottomUlbByPerformance")
        )
          return null;
        return (
          <GenericChart value={value} header={visualizer.name} subHeader={`(${t(`SUB_${visualizer.name}`)})`} key={key} chip={chip} updateChip={onChipChange}>
            <CustomBarChart
              data={visualizer?.charts?.[chip ? chip.filter((ele) => ele.active)?.[0]?.index : 0]}
              fillColor={index++ % 2 ? "RED" : "GREEN"}
              title={visualizer.name}
              showDrillDown={true}
            />
          </GenericChart>
        );
      case "collection":
      case "module":
        return <Summary header={visualizer.name} className="metricsTable" key={key} value={value} data={visualizer} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    let chipData = {};
    rowData.vizArray.map((chart) => {
      if (chart?.charts?.length > 1) {
        chipData[chart.name] = chart.charts.map((ele, ind) => ({ tabName: ele.tabName, active: ind === 0, index: ind }));
      }
    });
    updateChip({ ...chipData });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const chartsToRender = {};

      rowData.vizArray.forEach((chart, key) => {
        const chartName = chart.name;
        const chartRef = chartRefs[chartName];

        if (chartRef) {

          const rect = chartRef.getBoundingClientRect();
          // Adjust the threshold as needed to control when the component should render
          if (rect.top < window.innerHeight) {
            chartsToRender[chartName] = true;
          }
        }
      });

      setRenderedCharts((prevRenderedCharts) => ({
        ...prevRenderedCharts,
        ...chartsToRender,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call the handler initially to render the visible components

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rowData.vizArray]);

  return (
    <div className="chart-row" ref={scrollContainerRef} style={{ minHeight: "400px" }}>
      {rowData.vizArray.map((chart, key) => {
        return (
          <div style={{ // Apply your custom inline styles here
            margin: 0, // Override margin
            padding: 0, // Override padding
            width: "100%"
            // Add any other style properties you want to override
          }} key={key} ref={(ref) => (chartRefs[chart.name] = ref)}>
            {renderedCharts[chart.name] && (
              <div className="chart nowidth31">
                {renderVisualizer(chart, key, chip?.[chart.name], (index) =>
                  updateChip((oldState) => {
                    let prevChip = oldState[chart.name];
                    oldState[chart.name] = prevChip.map((ele) => ({ ...ele, active: ele.index === index }));
                    return { ...oldState };
                  })
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Layout;

