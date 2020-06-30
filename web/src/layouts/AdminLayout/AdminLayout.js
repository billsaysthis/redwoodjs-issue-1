import { Link, routes } from '@redwoodjs/router'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}))

const AdminLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link to={routes.home()} className={classes.link}>
                Supporters United
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Manage
            </Typography>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to={routes.about()} className={classes.link}>
                About
              </Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
