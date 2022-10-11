import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/system";

function StudentGrades() {
  const data = {
    datasets: [
      {
        backgroundColor: "#3F11B5",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 2,
        categoryPercentage: 0.5,
        data: [7, 7, 7, 2, 9, 9, 10],
        label: "This year",
      },
      {
        backgroundColor: "#ddd",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 2,
        categoryPercentage: 0.5,
        data: [7, 7, 7, 2, 9, 9, 10],
        label: "Class average",
      },
    ],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug", "7 aug"],
  };

  return (
    <Box
      sx={{
        marginLeft: "auto",
        width: "700px",
        position: "relative",
      }}
    >
      <Bar data={data} />
    </Box>
  );
}

export default StudentGrades;
