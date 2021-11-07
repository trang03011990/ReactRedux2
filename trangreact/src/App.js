import logo from './logo.svg';
import './App.css';
import HomeComponent from './BaiTapThucHanhLayout/HomeComponent';
import HomePage from './BaiTapGlasses/HomePage';
import './style.css';
import ShoesStore from './BaiTapChonGiay/ShoesStore';
import {store}from'./Redux/configStore'
import {Provider} from 'react-redux'
import BaiTapOanTuXi from './BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapDatVe from './BaiTapDatVe/BaiTapDatVe';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapDatVe/>
        {/* <BaiTapOanTuXi/> */}
      </Provider>
      {/* <ShoesStore/> */}
      {/* <HomePage/> */}
        {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
