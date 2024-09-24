import styled from "styled-components";

export const NavStyle = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 0.8 rem;
    user-select: none;

    a {
        color: inherit;
    }

    .navbar-items {
        display: flex;
        justify-content: center;
        align-items: center;

        &.showNavbar{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 15px;
            margin: 15px;
            width: 100%;
        }

        & .nav-link {
            margin: 1rem;
            opacity: 0.8;
            padding: .15rem .35rem;
            border: 1px solid transparent;
            border-radius: 3px;
            transition: all 0.3s ease;
            &:hover {
                border: 1px solid #ddd;
            }
            &.active {
                background: #fff;
                color: #333;
                transition: all 0.3s ease;
            }

        }

        &.showNavbar {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }

    }
`;