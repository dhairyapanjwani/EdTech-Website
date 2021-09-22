import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";

const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      {/* <iframe
                src="https://codesandbox.io/embed/new?codemirror=1"
                style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe> */}

      {/* <iframe src="https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark"
                style={{width:"100%", height:"800px", border:"0", borderRadius:"4px", overflow:"hidden"}}
                title="React"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe> */}

      <iframe
        src="https://codesandbox.io/embed/fragments-0r9qx?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "90vh",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="FragmentS"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      {/* <iframe height="700" style={{ width: "100%" }} scrolling="no" title="React Iframe loader" src="https://codepen.io/fadehelix/embed/preview/BYxZJx?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/fadehelix/pen/BYxZJx">
                    React Iframe loader</a> by Fadehelix (<a href="https://codepen.io/fadehelix">@fadehelix</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe> */}
    </div>
  );
};

export default CodeEditor;
