import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';


export function Navigation() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EDEDED",
    '&:hover': {
      backgroundColor: "#D8D9CF",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <div className="navigation">
      <div className="search-field">
        <Search>
          <Button>
            <SearchIconWrapper>
              <SearchIcon color="primary" />
            </SearchIconWrapper>
          </Button>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </div>
      <div className="nav-icons-profile">
        <div className="nav-icons">
          <Button>
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon color="action" />
            </Badge>
          </Button>
          <Button>
            <Badge badgeContent={3} color="primary">
              <EmailIcon color="action" />
            </Badge>
          </Button>
        </div>
        <div className="nav-profile-items">
          <p>Satish</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuAUVs_6TlB0CfEPv27WIt9OalOIPbU1kLA&usqp=CAU" alt="profile pic" />
        </div>
      </div>
    </div>
  );
}