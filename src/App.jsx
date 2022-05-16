import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/banner";
import Slider from "./Components/slider";
import About from "./Components/About";
import Only_content from "./Components/only_content";
import Roadmap from "./Components/roadmap";
import Monsters from "./Components/monsters";
import Team from "./Components/team";
import Footer from "./Components/footer";
import Contact from "./Components/contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ChainId, DAppProvider } from "@usedapp/core";
import Anatomy from "./Components/Anatomy";

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/d014af161a4b4ffbaa358366e232e2c8",
  },
  supportedChains: [ChainId.Mainnet],
};

function App() {
  return (
    <DAppProvider config={config}>
      <div className="App">
        <ToastContainer />
        {/* nav */}
        <Navbar />

        {/* banner */}
        <Banner />

        {/* Slider */}
        <Slider />

        {/* <Anatomy /> */}

        {/* About */}
        <About />

        {/* onlu_content */}
        <Only_content />

        {/* roadmap */}
        <Roadmap />

        {/* monsters */}
        <Monsters />

        {/* team */}
        <Team />

        {/* contact */}
        <Contact />

        {/* footer */}
        <Footer />
      </div>
    </DAppProvider>
  );
}

export default App;
