import BarChart from './charts/BarChart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
