//import logo from './logo.svg';
import './App.css';



function App() {
var employees = [
    { id: 1, salary: 10000, name: 'alisha'},
    { id: 2, salary: 20000, name: 'ali' },
    { id: 3, salary: 30000, name: 'alina' },
    { id: 4, salary: 40000, name: 'aliya' },
  ];

var test=()=>{
    return 'test me';
}


return (
 <div style={{"background": "red"}}>
<h1>List of employees:</h1>
<ul>
{employees.map((employee) => (
          <li key={employee.id}>{employee.name}|{employee.salary}{test()}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
