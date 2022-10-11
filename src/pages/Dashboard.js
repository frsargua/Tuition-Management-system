import Sidebar from "../components/Dashboard/Sidebard";
import Navbar from "../components/Dashboard/Navbar";
import StudentGrades from "../components/Dashboard/StudentGrades";

const navbarWidth = "250px";

function Dashboard() {
  return (
    <>
      <Sidebar navbarWidth={navbarWidth} />
      <Navbar navbarWidth={navbarWidth} />
      <StudentGrades />
    </>
  );
}

export default Dashboard;
