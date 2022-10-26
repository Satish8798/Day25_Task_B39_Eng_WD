import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { grey } from '@mui/material/colors';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableRowsIcon from '@mui/icons-material/TableRows';

export function SideBar() {

  const [showInterfaceComp, setShowInterfaceComp] = useState(false);
  const [showInterfaceUtil, setShowInterfaceUtil] = useState(false);
  const [showAddonPages, setShowAddonPages] = useState(false);

  return (
    <div className="side-bar">
      <div className="side-bar-brand">
        <EmojiEmotionsIcon sx={{ color: grey['A100'] }} fontSize="large" />
        <h4 style={{ color: "white" }}>SB ADMIN <sup>2</sup></h4>
      </div>
      <div className="side-bar-dashboard">
        <SpeedIcon sx={{ color: grey['A100'] }} />
        <h5 style={{ color: "white" }}>Dashboard</h5>
      </div>
      <div className="side-bar-interface-options">
        <p>INTERFACE</p>
        <div className="interface-components" onClick={() => {
          setShowInterfaceComp(!showInterfaceComp);
        }}>
          <SettingsIcon sx={{ color: grey['A100'] }} />
          <p>Components</p>
          {showInterfaceComp ?
            (<KeyboardArrowDownIcon sx={{ color: grey['A100'] }} />) :
            (<KeyboardArrowRightIcon sx={{ color: grey['A100'] }} />)}
        </div>
        {showInterfaceComp &&
          <div className="interface-components-list">
            <h6>CUSTOM COMPONENTS</h6>
            <p>Buttons</p>
            <p>Cards</p>
          </div>}
      </div>
      <div className="side-bar-utility-options">
        <div className="interface-utilities" onClick={() => {
          setShowInterfaceUtil(!showInterfaceUtil);
        }}>
          <BuildIcon sx={{ color: grey['A100'] }} />
          <p>Utilities</p>
          {showInterfaceUtil ?
            (<KeyboardArrowDownIcon sx={{ color: grey['A100'] }} />) :
            (<KeyboardArrowRightIcon sx={{ color: grey['A100'] }} />)}
        </div>
        {showInterfaceUtil &&
          <div className="interface-utilities-list">
            <h6>CUSTOM UTILITIES</h6>
            <p>Colors</p>
            <p>Borders</p>
            <p>Animations</p>
            <p>Other</p>
          </div>}
      </div>
      <div className="side-bar-addon-options">
        <p>ADDONS</p>
        <div className="interface-pages" onClick={() => {
          setShowAddonPages(!showAddonPages);
        }}>
          <FolderIcon sx={{ color: grey['A100'] }} />
          <p>Pages</p>
          {showAddonPages ?
            (<KeyboardArrowDownIcon sx={{ color: grey['A100'] }} />) :
            (<KeyboardArrowRightIcon sx={{ color: grey['A100'] }} />)}
        </div>
        {showAddonPages &&
          <div className="interface-pages-list">
            <h6>LOGIN SCREENS</h6>
            <p>Login</p>
            <p>Register</p>
            <p>Forgot Password</p>
            <h6>OTHER PAGES</h6>
            <p>404 Page</p>
            <p>Blank Page</p>
          </div>}
        <div className="interface-pages">
          <BarChartIcon sx={{ color: grey['A100'] }} />
          <p>CHARTS</p>
        </div>
        <div className="interface-pages">
          <TableRowsIcon sx={{ color: grey['A100'] }} />
          <p>TABLES</p>
        </div>
      </div>
    </div>
  );
}
