import { AppBar, Toolbar, IconButton, Grid, Button } from '@mui/material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return(
    <Button className={isActive ? 'active': ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </Button>
  )
}

export default function ResponsiveAppBar(props) {
    return (
      <AppBar position='sticky' enableColorOnDark style={{ marginTop: 10 }}> 
        <Toolbar>
          <Grid container justifyContent="flex-start" alignItems={'stretch'}>
            <CustomLink to='/'>
              DATA PUGS
            </CustomLink>
            <CustomLink to='/homerules'>
              Home Rules
            </CustomLink>
          </Grid>
          <Grid container justifyContent="flex-end">
            <IconButton onClick={() => props.setLightMode(!props.lightMode)} color="inherit">
              {props.lightMode === true ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    )
}
