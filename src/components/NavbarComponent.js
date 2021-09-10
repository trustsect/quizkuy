import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'

function NavbarComponent(){
	return(
		<Navbar bg="white" className="border-bottom py-1 ps-2" fixed="top" expand="lg">
      		<Container>
		        <Navbar.Brand href="./" className="py-auto">
		          QuizkuyApp
		        </Navbar.Brand>
        	</Container>
      </Navbar>
	);
}

export default NavbarComponent;