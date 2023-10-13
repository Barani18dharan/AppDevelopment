import store from "../Redux/Store";

const Dashboard = () => {

  console.log(store.getState());
  return (
  <>
  <h1 className="title" ></h1>
  <break></break>
  <h1 className="title" > Hey { store.getState().email }</h1>
  <br />
  <br />
  <h1>Welcome to Meetx</h1>
  </>
  );
};

export default Dashboard;
