import { FormAcces } from "./form.acces";
import { Header } from "./header";
import "./header.css";
import "./index.css";
import "./form.acces.css";
import { FormPersonal } from "./form.personal";
export function App() {
  return (
    <>
      <Header></Header>
      <FormAcces></FormAcces>
      <FormPersonal></FormPersonal>
    </>
  );
}
