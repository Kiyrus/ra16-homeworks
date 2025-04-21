import './App.css'
import {DropDownItem} from "./components/DropDownItem.tsx";
import {DropdownData} from "./components/DropDownDataType.ts";

const languages: DropdownData = {
  title: "Select language",
  list: [
    { id: "es", label: "Español" },
    { id: "fr", label: "Français" },
    { id: "it", label: "Italia" },
    { id: "ru", label: "Russian" },
    { id: "si", label: "Simlish" },
  ]
};

function App() {

  return (
    <>
      <DropDownItem data={languages} />
    </>
  )
}

export default App
