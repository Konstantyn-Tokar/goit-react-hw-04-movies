import { NavLink } from "react-router-dom";
import Container from "../Container";
import s from "./Navigation.module.css";

const Navigation = () => (
  <Container>
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activelink}>
        Nome
      </NavLink>

      <NavLink to="/movies" className={s.link} activeClassName={s.activelink}>
        Movies
      </NavLink>
    </nav>
  </Container>
);

export default Navigation;
