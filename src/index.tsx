import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './router';
import Header from "./header/header"
import Theme from "./theme/theme"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Header />
    <Page />
    <Theme palette={false} />
  </>
);