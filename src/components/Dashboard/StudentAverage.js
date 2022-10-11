import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/system";

function StudentAverage() {
  const data = {
    datasets: [
      {
        backgroundColor: ["#3F11B5", "#eee"],
        data: [7, 3],
      },
    ],
    labels: ["Average"],
  };

  return (
    <Box
      sx={{
        marginLeft: "auto",
        width: "400px",
        position: "relative",
      }}
    >
      <Doughnut data={data} />
    </Box>
  );
}

export default StudentAverage;
