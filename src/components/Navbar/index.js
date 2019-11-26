import React, { useState, useEffect } from 'react';
import ImportGoogleSheetsBtn from '../UploadSheet';
import LogAllContexts from '../Debugger/LogAllContexts';
import useGoogleSheets from '../../utils/hooks/useGoogleSheets';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Index = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [authUrl, setAuthUrl] = useState(null);

  const { getAuthUrl } = useGoogleSheets();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
      getAuthUrl()
        .then(res => {
            console.log(res.data.url);
            setAuthUrl(res.data.url);
        })
        .catch(() => {
            console.log('Couldnt get auth url... big sad :(');
        })
  }, [])

        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Grafitti</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/dashboard">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={authUrl}>Connect Google</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><LogAllContexts /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <ImportGoogleSheetsBtn />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Index;