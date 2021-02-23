import './App.css';
import AceEditor from "react-ace-editor";
import 'brace/mode/c_cpp'
import 'brace/theme/terminal'

function App() {
  return (
    <div className="App">
      <h1 className="title">Code editor 🚀</h1>
      <div className="editor">
        <AceEditor className="editor" mode="c_cpp" style={{ height: '600px',width:'1000px',fontSize:'36px', boxShadow:"20px 10px 20px 10px #dcdcdc"}} theme="terminal" />
      </div>
      
    </div>
  );
}

export default App;
