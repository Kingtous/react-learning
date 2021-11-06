import { Component } from "react";
// 编辑器
import "codemirror/lib/codemirror.js";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/anyword-hint.js";
// 代码包
import "codemirror/theme/monokai.css";
import "codemirror/mode/jsx/jsx.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";

import { UnControlled as CodeMirror } from "react-codemirror2";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.value,
      mode: props.mode,
    };
  }

  render() {
    return (
      <CodeMirror
        value={this.state.text}
        options={{
          mode: this.state.mode,
          theme: "monokai",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    );
  }
}

export default CodeEditor;
