import Sidebar from "../components/Dashboard/Sidebard";
import Navbar from "../components/Dashboard/Navbar";
import StudentGrades from "../components/Dashboard/StudentGrades";
import StudentAverage from "../components/Dashboard/StudentAverage";

const navbarWidth = "250px";

function Dashboard() {
  return (
    <>
      <Sidebar navbarWidth={navbarWidth} />
      <Navbar navbarWidth={navbarWidth} />
      <StudentAverage />
    </>
  );
}

export default Dashboard;
