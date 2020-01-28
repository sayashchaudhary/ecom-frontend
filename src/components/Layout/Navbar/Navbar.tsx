import React from 'react';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import Heart from '../../../assets/images/heart.png';
import Cart from '../../../assets/images/cart.png';
import Hamburger from '../../../assets/images/hamburger.png';
import { RoutePath } from '../../../routing/routes';
import { RouteUtils } from '../../../routing/route-utils';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex:100,
      color:'#373A59'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
      color:'#373A59',
    },
  }),
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const history = useHistory();
    const navigateToRoute = (route: RoutePath) => {
        if (route) {
            history.push(RouteUtils.getUrl(route, null));
        }
    };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      // keepMounted
      // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="menu_items">
        <MenuItem onClick={handleMenuClose} ><Link to="/">My Account</Link></MenuItem>
        <MenuItem onClick={handleMenuClose} ><Link to="/">My Order</Link></MenuItem>
        <MenuItem onClick={handleMenuClose} ><Link to="/">My Cart</Link></MenuItem>
        <MenuItem onClick={handleMenuClose} ><Link to="/">Customer Support</Link></MenuItem>
        <MenuItem onClick={handleMenuClose} ><Link to="/">F.A.Q</Link></MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className="container-fluid">
        <div className="nav">
            <AppBar position="static">
                <Toolbar>
                    <img src={Logo} alt="logo" className="nav__name"/>
                    <span className="nav__text">FOLK CHOICE</span>
                     <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                    <img src={Heart} alt="Wishlist" className="nav__heart" />
                    <img src={Cart} alt="cart" className="nav__cart" />
                    <div className="nav__right">
                        <button onClick={() => navigateToRoute(RoutePath.login)} type="submit" className="nav__right-login">Sign in</button>
                        <button onClick={() => navigateToRoute(RoutePath.register)} type="submit" className="nav__right-signin">Sign up</button>
                        <img src={Hamburger} alt="Hamburger" className="nav__right-hamburger" onClick={handleProfileMenuOpen}/>
                    </div>
                    </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
        <div className="demo">
          <Link to="/login"><button type="submit" className="nav__right-login">Sign in</button></Link>
          <Link to="/register"><button type="submit" className="nav__right-signin">Sign up</button></Link>
        </div>
      </div>
  );
}
