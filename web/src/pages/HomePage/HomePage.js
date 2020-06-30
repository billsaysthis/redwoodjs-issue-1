import AdminLayout from 'src/layouts/AdminLayout'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const HomePage = () => {
  return (
    <AdminLayout>
      <Container>
        <Typography variant="h2">Welcome to Supporters United</Typography>
        <Typography variant="div">Explanation of the site</Typography>
      </Container>
    </AdminLayout>
  )
}

export default HomePage
