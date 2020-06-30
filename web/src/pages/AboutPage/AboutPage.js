import AdminLayout from 'src/layouts/AdminLayout'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const AboutPage = () => {
  return (
    <AdminLayout>
      <Container>
        <Typography variant="h2">About Supporters United</Typography>
        <Typography variant="div">Explanation of the site</Typography>
      </Container>
    </AdminLayout>
  )
}

export default AboutPage
