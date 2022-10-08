import { AppBar, Toolbar, IconButton, Grid, Button } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function LinkButton({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return(
    <Button className={isActive ? 'active': ''} component={Link} to={to} color={'inherit'} {...props}>
      {children}
    </Button>
  )
}

export default function ResponsiveAppBar(props) {
    return (
      <AppBar position='sticky' enableColorOnDark style={{ marginTop: 10 }}> 
        <Toolbar>
          <Grid container justifyContent="flex-start" alignItems={'stretch'}>
            <LinkButton to='/'>
              DATA PUGS
            </LinkButton>
            <LinkButton to='/homerules'>
              Home Rules
            </LinkButton>
            <LinkButton to='/tournaments'>
              Tournaments
            </LinkButton>
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
