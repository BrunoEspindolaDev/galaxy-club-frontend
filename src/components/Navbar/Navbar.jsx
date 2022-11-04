import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { FiMenu } from "react-icons/fi";
import {
  Flex,
  Icon,
  Heading,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 563px)");

  const isHomeActive = pathname.includes("/home");
  const isReservationsActive = pathname.includes("/reservations");
  const isProfileActive = pathname.includes("/profile");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Flex as="header" h="65px" direction="column" bg="#1C1C1F" px={[5, 10]}>
      <Flex
        flex={1}
        w="100%"
        maxW="1100px"
        alignSelf="center"
        align="center"
        justify="space-between"
      >
        <Flex align="center" columnGap={2}>
          <Icon as={Logo} w="24px" h="24px" />
          <Heading as="h5" fontSize="lg" color="white">
            GalaxyClub
          </Heading>
        </Flex>
        {!isMobile && (
          <ButtonGroup>
            <Button
              size="sm"
              bg="transparent"
              isActive={isHomeActive}
              onClick={() => navigate("/home")}
            >
              Início
            </Button>
            <Button
              size="sm"
              bg="transparent"
              isActive={isReservationsActive}
              onClick={() => navigate("/reservations")}
            >
              Reservas
            </Button>
            <Button
              size="sm"
              bg="transparent"
              isActive={isProfileActive}
              onClick={() => navigate("/profile")}
            >
              Perfil
            </Button>
            <Button size="sm" bg="transparent" onClick={handleLogout}>
              Sair
            </Button>
          </ButtonGroup>
        )}
        {isMobile && (
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="menu"
              icon={<Icon as={FiMenu} w="20px" h="20px" />}
            />
            <MenuList bg="#1C1C1F">
              <MenuItem onClick={() => navigate("/home")}>Início</MenuItem>
              <MenuItem onClick={() => navigate("/reservations")}>Reservas</MenuItem>
              <MenuItem onClick={() => navigate("/profile")}>Perfil</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
