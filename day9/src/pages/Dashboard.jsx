import store from "../Redux/Store";

const Dashboard = () => {

  console.log(store.getState());
  return (
  <>
  <h1 className="title" > Dashboard</h1>
  <break></break>
  <h1 className="title" > Hello ,{ store.getState().email }</h1>
  </>
  );
};

export default Dashboard;
